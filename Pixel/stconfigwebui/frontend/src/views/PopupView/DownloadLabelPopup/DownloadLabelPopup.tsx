import React, { useEffect } from 'react'
import './DownloadLabelPopup.scss'
import { PopupActions } from "../../../logic/actions/PopupActions";
import { GenericYesNoPopup } from "../GenericYesNoPopup/GenericYesNoPopup";
import { AppState } from "../../../store";
import { connect } from "react-redux";
import axios from "axios";
import { annotationList, rootUrl } from '../../../url/ApiUrl';
import { useSaveFilesAsZip } from 'use-save-files-as-zip';

interface IProps {
    configFolder: String,
}

const DownloadLabelPopup: React.FC<IProps> = (
    {
        configFolder,
    }) => {
    // The initialState is optional but if we need to add it just add a File array
    const { setFilesAsZip, saveAsZip } = useSaveFilesAsZip();
    // fetch annotation files
    useEffect(() => {
        axios
            .get(annotationList, {
                params: {
                    dir: configFolder
                }
            })
            .then(async (response) => {
                console.log(response.data.files);
                const annotationFiles: File[] = [];
                // await response.data.files.forEach(async fileName =>
                for (const fileName of response.data.files) {
                    try {
                        let res = await axios.get(rootUrl + configFolder + "/" + fileName)
                        let file = new File([res.data], fileName)
                        annotationFiles.push(file)
                        console.log(annotationFiles)
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                return annotationFiles
            })
            .then((files) => {
                console.log(files)
                // Here we can add all the files that we need to add to generate the ZIP file.
                setFilesAsZip(files);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const onAccept = async () => {
        PopupActions.loading();
        // Here we execute the instruccion to download the ZIP file
        saveAsZip(configFolder.toString());
        PopupActions.close();
    };

    const onReject = () => {
        PopupActions.close();
    };


    const renderContent = () => {
        console.log("renderInternalContent");
        return <div className="DropZone">Download annotation files</div>
    }

    return (
        <GenericYesNoPopup
            title={"Download annotation files"}
            renderContent={renderContent}
            acceptLabel={"Download"}
            onAccept={onAccept}
            rejectLabel={"Cancel"}
            onReject={onReject}
        />
    )
};


const mapStateToProps = (state: AppState) => ({
    configFolder: state.general.configFolder
});

export default connect(
    mapStateToProps,
)(DownloadLabelPopup);