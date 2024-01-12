import {rootUrl} from "../url/ApiUrl"

export class FileUtil {
    public static loadImage(fileName: string): Promise<HTMLImageElement> {
		return new Promise((resolve, reject) => {
			// const url = URL.createObjectURL(fileData);
            const image = new Image();
			image.src = rootUrl+fileName;
			image.onload = () => resolve(image);
			image.onerror = reject;
		})
    }

    public static loadImages(fileNames: string[]): Promise<HTMLImageElement[]> {
        return new Promise((resolve, reject) => {
            const promises: Promise<HTMLImageElement>[] = fileNames.map((fileName: string) => FileUtil.loadImage(fileName))
            Promise
                .all(promises)
                .then((values: HTMLImageElement[]) => resolve(values))
                .catch((error) => reject(error));
        });
    }

    public static readFile(fileData: File): Promise<string> {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onloadend = (event: any) => {
                resolve(event.target.result);
            };
            reader.onerror = reject;
            reader.readAsText(fileData);
        })
    }

    public static readFiles(fileData: File[]): Promise<string[]> {
        return new Promise((resolve, reject) => {
            const promises: Promise<string>[] = fileData.map((fileData: File) => FileUtil.readFile(fileData))
            Promise
                .all(promises)
                .then((values: string[]) => resolve(values))
                .catch((error) => reject(error));
        });
    }

    public static extractFileExtension(name: string): string | null {
        const parts = name.split(".");
        return parts.length > 1 ? parts[1] : null;
    }

    public static extractFileName(name: string): string | null {
        return name.split(".")[0];
    }
}