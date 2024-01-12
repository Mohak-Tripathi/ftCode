import {LabelType} from "./enums/LabelType";
import {ILabelFormatData} from "../interfaces/ILabelFormatData";
import {AnnotationFormatType} from "./enums/AnnotationFormatType";

export type ImportFormatDataMap = Record<LabelType, ILabelFormatData[]>

export const ImportFormatData: ImportFormatDataMap = {
    "RECT": [
        // {
        //     type: AnnotationFormatType.COCO,
        //     label: "Upload custom annotation files."
        // },
        {
            type: AnnotationFormatType.YOLO,
            label: "load/use existing annotation files from server."
        }
    ],
    "POINT": [],
    "LINE": [],
    "POLYGON": [
        {
            type: AnnotationFormatType.COCO,
            label: "Single file in COCO JSON format."
        }
    ],
    "IMAGE RECOGNITION": []
}