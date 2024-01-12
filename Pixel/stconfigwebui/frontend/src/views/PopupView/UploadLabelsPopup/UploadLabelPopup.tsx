import React, { useState } from 'react'
import './UploadLabelPopup.scss'
import { AppState } from "../../../store";
import { connect } from "react-redux";
import { GenericYesNoPopup } from "../GenericYesNoPopup/GenericYesNoPopup";
import { useDropzone } from "react-dropzone";
import { AcceptedFileType } from "../../../data/enums/AcceptedFileType";
import { PopupActions } from "../../../logic/actions/PopupActions";
import { saveAnnotations } from "../../../url/ApiUrl";
import axios from "axios";

interface IProps {
    configFolder: String,
}

const UploadLabelPopup: React.FC<IProps> = ({ configFolder }) => {
    const [invalidFileLoadedStatus, setInvalidFileLoadedStatus] = useState(false);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: AcceptedFileType.TEXT,
        multiple: true,
    });

    const fileUploader = async (fileArray: File[]) => {
        for (let index = 0; index < fileArray.length; index++) {
            try {
                const formData = new FormData();
                formData.append("annotations", fileArray[index], fileArray[index].name)
                await axios.post(saveAnnotations, formData, {
                    headers: { "Accept": 'application/json', "Content-Type": "multipart/form-data" }, params: {
                        dir: configFolder,
                        fileName: fileArray[index].name
                    }
                })
            } catch (error: unknown) {
                // TODO
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        }
    }


    const onAccept = async () => {
        PopupActions.loading();
        await fileUploader(acceptedFiles);
        PopupActions.close();
    };

    const onReject = () => {
        PopupActions.close();
    };

    const getDropZoneContent = () => {
        if (invalidFileLoadedStatus)
            return <>
                <input {...getInputProps()} />
                <img
                    draggable={false}
                    alt={"upload"}
                    src={"ico/box-opened.png"}
                />
                <p className="extraBold">Loading of labels file was unsuccessful</p>
                <p className="extraBold">Try again</p>
            </>;
        else if (acceptedFiles.length === 0)
            return <>
                <input {...getInputProps()} />
                <img
                    draggable={false}
                    alt={"upload"}
                    src={"ico/box-opened.png"}
                />
                <p className="extraBold">Drop annotation files</p>
                <p>or</p>
                <p className="extraBold">Click here to select it</p>
            </>;
        else if (acceptedFiles.length === 1)
            return <>
                <img
                    draggable={false}
                    alt={"uploaded"}
                    src={"ico/box-closed.png"}
                />
                <p className="extraBold">only 1 file selected</p>
            </>;
        else
            return <>
                <img
                    draggable={false}
                    alt={"uploaded"}
                    src={"ico/box-closed.png"}
                />
                <p className="extraBold">{acceptedFiles.length} files selected</p>
            </>;
    };

    const renderContent = () => {
        return (<div className="LoadLabelsPopupContent">
            <div className="Message">
                Upload annotation files with .csv and .txt extensions only.
            </div>
            <div {...getRootProps({ className: 'DropZone' })}>
                {getDropZoneContent()}
            </div>
        </div>);
    };

    return (
        <GenericYesNoPopup
            title={"Upload annotation files"}
            renderContent={renderContent}
            acceptLabel={"Upload"}
            onAccept={onAccept}
            skipAcceptButton={acceptedFiles.length === 0}
            disableAcceptButton={acceptedFiles.length === 0}
            rejectLabel={"Cancel"}
            onReject={onReject}
        />
    );
};

const mapStateToProps = (state: AppState) => ({
    configFolder: state.general.configFolder
});

export default connect(
    mapStateToProps,
)(UploadLabelPopup);