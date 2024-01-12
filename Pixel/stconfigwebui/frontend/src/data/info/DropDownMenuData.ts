import { updateActivePopupType } from "../../store/general/actionCreators";
import { PopupWindowType } from "../enums/PopupWindowType";
import { store } from "../../index";

export type DropDownMenuNode = {
    name: string
    description?: string
    imageSrc: string
    imageAlt: string
    disabled: boolean
    onClick?: () => void
    children?: DropDownMenuNode[]
}

export const DropDownMenuData: DropDownMenuNode[] = [
    {
        name: "Actions",
        imageSrc: "ico/actions.png",
        imageAlt: "actions",
        disabled: false,
        children: [
            // {
            //     name: "Edit Labels",
            //     description: "Modify labels list",
            //     imageSrc: "ico/tags.png",
            //     imageAlt: "labels",
            //     disabled: false,
            //     onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.UPDATE_LABEL))
            // },
            // {
            //     name: "Upload Labels",
            //     description: "Uploads labels.txt file",
            //     imageSrc: "ico/tags.png",
            //     imageAlt: "labels",
            //     disabled: false,
            //     onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.LOAD_LABEL_NAMES))
            // },
            {
                name: "Import Annotations",
                description: "Import annotations from file",
                imageSrc: "ico/import-labels.png",
                imageAlt: "import-labels",
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.IMPORT_ANNOTATIONS))
            },
            {
                name: "Export Annotations",
                description: "Export annotations to file",
                imageSrc: "ico/export-labels.png",
                imageAlt: "export-labels",
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.EXPORT_ANNOTATIONS))
            },
            {
                name: "Upload Annotations",
                description: "Upload annotation files",
                imageSrc: "ico/upload.png",
                imageAlt: "import-labels",
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.UPLOAD_ANNOTATIONS))
            },
            {
                name: "Download Annotations",
                description: "Download annotation files",
                imageSrc: "ico/down.png",
                imageAlt: "export-labels",
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.DOWNLOAD_ANNOTATIONS))
            },
            {
                name: "Delete Annotations",
                description: "Download annotation files",
                imageSrc: "ico/delete.png",
                imageAlt: "export-labels",
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.DELETE_ANNOTATIONS))
            },
            // {
            //     name: "Load AI Model",
            //     description: "Load our pre-trained annotation models",
            //     imageSrc: "ico/ai.png",
            //     imageAlt: "load-ai-model",
            //     disabled: false,
            //     onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.LOAD_AI_MODEL))
            // },
        ]
    },
    {
        name: "More",
        imageSrc: "ico/more.png",
        imageAlt: "more",
        disabled: false,
        children: [
            // {
            //     name: "Camera ID",
            //     description: "Select Camera ID",
            //     imageSrc: "ico/documentation.png",
            //     imageAlt: "documentation",
            //     disabled: true
            // },
            {
                name: "Camera ID",
                description: "Select Camera ID",
                imageSrc: "ico/bug.png",
                imageAlt: "bug",
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.LOAD_CAMERA_ID))
            }
        ]
    }
]

