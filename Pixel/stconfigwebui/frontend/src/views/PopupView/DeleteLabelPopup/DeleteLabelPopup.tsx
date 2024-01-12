import React, { useState, useEffect } from 'react'
import './DeleteLabelPopup.scss'
import { PopupActions } from "../../../logic/actions/PopupActions";
import { GenericYesNoPopup } from "../GenericYesNoPopup/GenericYesNoPopup";
import { AppState } from "../../../store";
import { connect } from "react-redux";
import axios from "axios";
import { deleteAnnotations } from '../../../url/ApiUrl';

interface IProps {
    configFolder: String,
}

const DeleteLabelPopup: React.FC<IProps> = (
    {
        configFolder,
    }) => {
    const [deleteState, setDeleteState] = useState(false);
    useEffect(() => {
        if (deleteState) {
            PopupActions.loading();
            axios
                .get(deleteAnnotations, {
                    params: {
                        dir: configFolder
                    }
                })
                .then((files) => {
                    console.log(files)
                })
                .catch((error) => {
                    console.log(error);
                })
            PopupActions.close();
        }
    }, [deleteState])

    const onAccept = async () => {
        await setDeleteState(true);
    };

    const onReject = () => {
        PopupActions.close();
    };


    const renderContent = () => {
        console.log("renderInternalContent");
        return <div className="DropZone">Are you sure you want to delete all annotation files?</div>
    }

    return (
        <GenericYesNoPopup
            title={"Delete annotation files"}
            renderContent={renderContent}
            acceptLabel={"Delete"}
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
)(DeleteLabelPopup);