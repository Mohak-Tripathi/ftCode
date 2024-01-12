import React, { useState } from "react";
import './ImagesDropZone.scss';
import { TextButton } from "../../Common/TextButton/TextButton";
import { ImageData, LabelName } from "../../../store/labels/types";
import { connect } from "react-redux";
import { addImageData, updateActiveImageIndex } from "../../../store/labels/actionCreators";
import { AppState } from "../../../store";
import { ProjectType } from "../../../data/enums/ProjectType";
import { PopupWindowType } from "../../../data/enums/PopupWindowType";
import { updateActivePopupType, updateProjectData, updateConfigFolder, updateErrorMsg } from "../../../store/general/actionCreators";
import { updateLabelNames } from "../../../store/labels/actionCreators";
import { ProjectData } from "../../../store/general/types";
import { ImageDataUtil } from "../../../utils/ImageDataUtil";
import axios from "axios";
import { imageList, runFeed } from "../../../url/ApiUrl"
import PopupView from "../../PopupView/PopupView";

interface IProps {
    updateActiveImageIndex: (activeImageIndex: number) => any;
    addImageData: (imageData: ImageData[]) => any;
    updateProjectData: (projectData: ProjectData) => any;
    updateActivePopupType: (activePopupType: PopupWindowType) => any;
    updateConfigFolder: (configFolder: String) => any;
    updateLabelNames: (labels: LabelName[]) => any;
    updateErrorMsg: (error: String) => any;
    projectData: ProjectData;
}

const ImagesDropZone: React.FC<IProps> = ({ updateActiveImageIndex, addImageData, updateProjectData, updateActivePopupType, updateConfigFolder, updateLabelNames, updateErrorMsg, projectData }) => {
    const [buttonState, setButtonState] = useState(false);

    const startEditor = async (projectType: ProjectType, configFolder: String) => {
        try {
            let response = await axios.get(imageList, {
                params: {
                    dir: configFolder
                }
            })
            // console.log(response.data.files);
            if (response.data.files.length > 0) {
                if (configFolder === 'captures') {
                    updateLabelNames([
                        { id: "609dedef-8391-461e-bf6e-019c4ccd734c", name: "S-1" },
                        { id: "f36d71b3-510d-4ab2-b560-6eebaa319cab", name: "S-2" },
                        { id: "f30239d5-2319-4d4f-ab8f-ee6e89e3581b", name: "S-3" },
                        { id: "7a25b2ed-2301-4d07-9807-ddf5d55b1747", name: "S-4" }
                    ]);
                    await addImageData([ImageDataUtil.createImageDataFromFileData(configFolder + '/270.jpg')]);
                }
                else if (configFolder === 'tables') {
                    updateLabelNames([
                        { id: "609dedef-8391-461e-bf6e-019c4ccd734c", name: "T-1" },
                        { id: "f36d71b3-510d-4ab2-b560-6eebaa319cab", name: "T-2" },
                        { id: "f30239d5-2319-4d4f-ab8f-ee6e89e3581b", name: "T-3" },
                        { id: "7a25b2ed-2301-4d07-9807-ddf5d55b1747", name: "T-4" },
                        { id: "f36d71b3-510d-4ab2-b560-6eebaa319ca7", name: "T-5" },
                        { id: "f30239d5-2319-4d4f-ab8f-ee6e89e35818", name: "T-6" },
                        { id: "7a25b2ed-2301-4d07-9807-ddf5d55b1744", name: "T-7" },
                        { id: "f36d71b3-510d-4ab2-b560-6eebaa319ca2", name: "T-8" },
                        { id: "f30239d5-2319-4d4f-ab8f-ee6e89e35814", name: "T-9" },
                        { id: "7a25b2ed-2301-4d07-9807-ddf5d55b1743", name: "T-10" },
                        { id: "f36d71b3-510d-4ab2-b560-6eebaa319ca1", name: "T-11" },
                        { id: "f30239d5-2319-4d4f-ab8f-ee6e89e35811", name: "T-12" },
                    ]);
                    await addImageData(response.data.files.map((fileName: String) => ImageDataUtil.createImageDataFromFileData(configFolder + "/" + fileName)));
                }
                updateActiveImageIndex(0);
                // addImageData(acceptedFiles.map((fileData:File) => ImageDataUtil.createImageDataFromFileData(fileData)));
                // console.log(response.data.files.map((fileName: string) => ImageDataUtil.createImageDataFromFileData(fileName)));
                updateConfigFolder(configFolder)
                updateProjectData({
                    ...projectData,
                    type: projectType
                });

            }
        }
        catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="ImagesDropZone">
            <div className="DropZoneButtons">
                <TextButton
                    label={"1. Capture Scene"}
                    onClick={() => { updateActivePopupType(PopupWindowType.LOADER); axios.get(runFeed).then((response) => { console.log(response.data); setButtonState(true); updateActivePopupType(null); }).catch((error) => { console.log(error); updateErrorMsg(error.message); updateActivePopupType(PopupWindowType.ERROR) }); }}
                />
            </div>
            <div className="DropZoneButtons">
                <TextButton
                    label={"2. Define Sections"}
                    isDisabled={!buttonState}
                    onClick={() => { if (buttonState) { startEditor(ProjectType.OBJECT_DETECTION, "captures") } }}
                />
            </div>
            <div className="DropZoneButtons">
                <TextButton
                    label={"3. Define Tables"}
                    // isDisabled={!buttonState}
                    onClick={() => {
                        startEditor(ProjectType.OBJECT_DETECTION, "tables")
                        // if(buttonState){startEditor(ProjectType.OBJECT_DETECTION, "tables")}
                    }}
                />
            </div>
        </div>
    )
};

const mapDispatchToProps = {
    updateActiveImageIndex,
    addImageData,
    updateProjectData,
    updateActivePopupType,
    updateConfigFolder,
    updateLabelNames,
    updateErrorMsg
};

const mapStateToProps = (state: AppState) => ({
    projectData: state.general.projectData,
    configFolder: state.general.configFolder
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImagesDropZone);