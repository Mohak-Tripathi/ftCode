import { AnnotationFormatType } from "../../data/enums/AnnotationFormatType";
import { ImageData, LabelName, LabelRect } from "../../store/labels/types";
import { ImageRepository } from "../imageRepository/ImageRepository";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { LabelsSelector } from "../../store/selectors/LabelsSelector";
import { XMLSanitizerUtil } from "../../utils/XMLSanitizerUtil";
import { ExporterUtil } from "../../utils/ExporterUtil";
import { GeneralSelector } from "../../store/selectors/GeneralSelector";
import { findIndex, findLast } from "lodash";
import axios from "axios";
import { saveAnnotations, deleteAllFiles } from "../../url/ApiUrl"

export class RectLabelsExporter {
    public static async export(exportFormatType: AnnotationFormatType, exportFromDir: String): Promise<void> {
        switch (exportFormatType) {
            case AnnotationFormatType.YOLO:
                await RectLabelsExporter.exportAsYOLO(exportFromDir);
                await RectLabelsExporter.exportAsCSV();
                break;
            case AnnotationFormatType.VOC:
                RectLabelsExporter.exportAsVOC();
                break;
            case AnnotationFormatType.CSV:
                RectLabelsExporter.exportAsCSV();
                break;
            default:
                return;
        }
    }

    private static exportAsYOLO(exportFromDir: String): void {
        console.log(exportFromDir)
        if (exportFromDir === "captures") {
            axios.get(deleteAllFiles, {
                params: {
                    dir: "tables"
                }
            }).then((files) => {
                console.log(files)
            }).catch((error) => {
                console.log(error);
            })
        }
        // let zip = new JSZip();
        LabelsSelector.getImagesData()
            .forEach((imageData: ImageData) => {
                const fileContent: string = RectLabelsExporter.wrapRectLabelsIntoYOLO(imageData);
                if (fileContent) {
                    console.log(imageData.fileName)
                    let fileName: string;
                    let dir: string;
                    [dir, fileName] = imageData.fileName.split("/")
                    fileName = fileName.replace(/\.[^/.]+$/, ".txt");
                    console.log(fileName, dir)
                    try {
                        const formData = new FormData();
                        formData.append("annotations", new Blob([fileContent]), fileName)
                        axios.post(saveAnnotations, formData, {
                            headers: { "Accept": 'application/json', "Content-Type": "multipart/form-data" }, params: {
                                dir: dir,
                                fileName: fileName
                            }
                        })
                        // zip.file(fileName, fileContent);
                    } catch (error: unknown) {
                        // TODO
                        if (error instanceof Error) {
                            throw new Error(error.message);
                        }
                    }
                }
            });

        // try {
        //     // zip.generateAsync({type:"blob"})
        //     //     .then(function(content) {
        //     //         saveAs(content, `${ExporterUtil.getExportFileName()}.zip`);
        //     //     });
        // } catch (error: unknown) {
        //     // TODO
        //     if (error instanceof Error) {
        //         throw new Error(error.message);
        //     }
        // }

    }

    private static wrapRectLabelsIntoYOLO(imageData: ImageData): string {
        if (imageData.labelRects.length === 0 || !imageData.loadStatus)
            return null;

        const labelNames: LabelName[] = LabelsSelector.getLabelNames();
        const image: HTMLImageElement = ImageRepository.getById(imageData.id);
        const labelRectsString: string[] = imageData.labelRects.map((labelRect: LabelRect) => {
            const labelFields = [
                findIndex(labelNames, { id: labelRect.labelId }).toString(),
                ((labelRect.rect.x + labelRect.rect.width / 2) / image.width).toFixed(6).toString(),
                ((labelRect.rect.y + labelRect.rect.height / 2) / image.height).toFixed(6).toString(),
                (labelRect.rect.width / image.width).toFixed(6).toString(),
                (labelRect.rect.height / image.height).toFixed(6).toString()
            ];
            return labelFields.join(" ")
        });
        return labelRectsString.join("\n");
    }

    private static exportAsVOC(): void {
        let zip = new JSZip();
        LabelsSelector.getImagesData().forEach((imageData: ImageData) => {
            const fileContent: string = RectLabelsExporter.wrapImageIntoVOC(imageData);
            if (fileContent) {
                const fileName: string = imageData.fileName.replace(/\.[^/.]+$/, ".xml");
                try {
                    zip.file(fileName, fileContent);
                } catch (error: unknown) {
                    // TODO
                    if (error instanceof Error) {
                        throw new Error(error.message);
                    }
                }
            }
        });

        try {
            zip.generateAsync({ type: "blob" })
                .then(function (content) {
                    saveAs(content, `${ExporterUtil.getExportFileName()}.zip`);
                });
        } catch (error: unknown) {
            // TODO
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }

    private static wrapRectLabelsIntoVOC(imageData: ImageData): string {
        if (imageData.labelRects.length === 0 || !imageData.loadStatus)
            return null;

        const labelNamesList: LabelName[] = LabelsSelector.getLabelNames();
        const labelRectsString: string[] = imageData.labelRects.map((labelRect: LabelRect) => {
            const labelName: LabelName = findLast(labelNamesList, { id: labelRect.labelId });
            const labelFields = !!labelName ? [
                `\t<object>`,
                `\t\t<name>${labelName.name}</name>`,
                `\t\t<pose>Unspecified</pose>`,
                `\t\t<truncated>Unspecified</truncated>`,
                `\t\t<difficult>Unspecified</difficult>`,
                `\t\t<bndbox>`,
                `\t\t\t<xmin>${Math.round(labelRect.rect.x)}</xmin>`,
                `\t\t\t<ymin>${Math.round(labelRect.rect.y)}</ymin>`,
                `\t\t\t<xmax>${Math.round(labelRect.rect.x + labelRect.rect.width)}</xmax>`,
                `\t\t\t<ymax>${Math.round(labelRect.rect.y + labelRect.rect.height)}</ymax>`,
                `\t\t</bndbox>`,
                `\t</object>`
            ] : [];
            return labelFields.join("\n")
        });
        return labelRectsString.join("\n");
    }

    private static wrapImageIntoVOC(imageData: ImageData): string {
        const labels: string = RectLabelsExporter.wrapRectLabelsIntoVOC(imageData);
        const projectName: string = XMLSanitizerUtil.sanitize(GeneralSelector.getProjectName());

        if (labels) {
            const image: HTMLImageElement = ImageRepository.getById(imageData.id);
            return [
                `<annotation>`,
                `\t<folder>${projectName}</folder>`,
                `\t<filename>${imageData.fileName}</filename>`,
                `\t<path>/${projectName}/${imageData.fileName}</path>`,
                `\t<source>`,
                `\t\t<database>Unspecified</database>`,
                `\t</source>`,
                `\t<size>`,
                `\t\t<width>${image.width}</width>`,
                `\t\t<height>${image.height}</height>`,
                `\t\t<depth>3</depth>`,
                `\t</size>`,
                labels,
                `</annotation>`
            ].join("\n");
        }
        return null;
    }


    private static async exportAsCSV(): Promise<void> {
        // const content: string = LabelsSelector.getImagesData()
        //     .map((imageData: ImageData) => {
        //         return RectLabelsExporter.wrapRectLabelsIntoCSV(imageData)})
        //     .filter((imageLabelData: string) => {
        //         return !!imageLabelData})
        //     .join("\n");
        // const fileName: string = `${ExporterUtil.getExportFileName()}.csv`;
        // ExporterUtil.saveAs(content, fileName);
        const images: ImageData[] = LabelsSelector.getImagesData()
        // .forEach((imageData: ImageData) => 
        for (const imageData of images) {
            const fileContent: string = RectLabelsExporter.wrapRectLabelsIntoCSV(imageData);
            if (fileContent) {
                // console.log(imageData.fileName)
                let fileName: string;
                let dir: string;
                [dir, fileName] = imageData.fileName.split("/")
                if (dir === "captures") {
                    fileName = fileName.replace(/\.[^/.]+$/, ".csv");
                    // console.log(fileName, dir)
                    try {
                        const formData = new FormData();
                        formData.append("annotations", new Blob([fileContent]), fileName)
                        await axios.post(saveAnnotations, formData, {
                            headers: { "Accept": 'application/json', "Content-Type": "multipart/form-data" }, params: {
                                dir: dir,
                                fileName: fileName
                            }
                        })
                        // zip.file(fileName, fileContent);
                    } catch (error: unknown) {
                        // TODO
                        if (error instanceof Error) {
                            throw new Error(error.message);
                        }
                    }
                }
            }
        }
        // );
    }

    private static wrapRectLabelsIntoCSV(imageData: ImageData): string {
        if (imageData.labelRects.length === 0 || !imageData.loadStatus)
            return null;

        const image: HTMLImageElement = ImageRepository.getById(imageData.id);
        const labelNames: LabelName[] = LabelsSelector.getLabelNames();
        const labelRectsString: string[] = imageData.labelRects.map((labelRect: LabelRect) => {
            const labelName: LabelName = findLast(labelNames, { id: labelRect.labelId });
            const labelFields = !!labelName ? [
                labelName.name,
                Math.round(labelRect.rect.x).toString(),
                Math.round(labelRect.rect.y).toString(),
                Math.round(labelRect.rect.width).toString(),
                Math.round(labelRect.rect.height).toString(),
                imageData.fileName,
                image.width.toString(),
                image.height.toString()
            ] : [];
            return labelFields.join(",")
        });
        return labelRectsString.join("\n");
    }
}