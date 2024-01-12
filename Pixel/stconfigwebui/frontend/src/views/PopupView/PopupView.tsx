import React from 'react';
import './PopupView.scss';
import { PopupWindowType } from "../../data/enums/PopupWindowType";
import { AppState } from "../../store";
import { connect } from "react-redux";
import LoadLabelsPopup from "./LoadLabelNamesPopup/LoadLabelNamesPopup";
import LoadCameraIdsPopup from "./LoadCameraIdsPopup/LoadCameraIdsPopup";
import SelectCameraIdPopup from "./SelectCameraIdPopup/SelectCameraIdPopup";
import InsertLabelNamesPopup from "./InsertLabelNamesPopup/InsertLabelNamesPopup";
import ExitProjectPopup from "./ExitProjectPopup/ExitProjectPopup";
import ErrorPopup from "./ErrorPopup/ErrorPopup";
import LoadMoreImagesPopup from "./LoadMoreImagesPopup/LoadMoreImagesPopup";
import { LoadModelPopup } from "./LoadModelPopup/LoadModelPopup";
import SuggestLabelNamesPopup from "./SuggestLabelNamesPopup/SuggestLabelNamesPopup";
import { CSSHelper } from "../../logic/helpers/CSSHelper";
import { ClipLoader } from "react-spinners";
import ImportLabelPopup from "./ImportLabelPopup/ImportLabelPopup";
import ExportLabelPopup from "./ExportLabelsPopup/ExportLabelPopup";
import UploadLabelPopup from "./UploadLabelsPopup/UploadLabelPopup";
import DownloadLabelPopup from "./DownloadLabelPopup/DownloadLabelPopup";
import DeleteLabelPopup from "./DeleteLabelPopup/DeleteLabelPopup";

interface IProps {
    activePopupType: PopupWindowType;
}

const PopupView: React.FC<IProps> = ({ activePopupType }) => {

    const selectPopup = () => {
        switch (activePopupType) {
            case PopupWindowType.LOAD_CAMERA_ID:
                return <LoadCameraIdsPopup />;
            case PopupWindowType.SELECT_CAMERA_ID:
                return <SelectCameraIdPopup />;
            case PopupWindowType.LOAD_LABEL_NAMES:
                return <LoadLabelsPopup />;
            case PopupWindowType.EXPORT_ANNOTATIONS:
                return <ExportLabelPopup />;
            case PopupWindowType.IMPORT_ANNOTATIONS:
                return <ImportLabelPopup />;
            case PopupWindowType.UPLOAD_ANNOTATIONS:
                return <UploadLabelPopup />;
            case PopupWindowType.DOWNLOAD_ANNOTATIONS:
                return <DownloadLabelPopup />;
            case PopupWindowType.DELETE_ANNOTATIONS:
                return <DeleteLabelPopup />;
            case PopupWindowType.INSERT_LABEL_NAMES:
                return <InsertLabelNamesPopup
                    isUpdate={false}
                />;
            case PopupWindowType.UPDATE_LABEL:
                return <InsertLabelNamesPopup
                    isUpdate={true}
                />;
            case PopupWindowType.EXIT_PROJECT:
                return <ExitProjectPopup />;
            case PopupWindowType.IMPORT_IMAGES:
                return <LoadMoreImagesPopup />;
            case PopupWindowType.LOAD_AI_MODEL:
                return <LoadModelPopup />;
            case PopupWindowType.SUGGEST_LABEL_NAMES:
                return <SuggestLabelNamesPopup />;
            case PopupWindowType.LOADER:
                return <ClipLoader
                    size={100}
                    // color={CSSHelper.getLeadingColor()}
                    color={"#7a0000"}
                    loading={true}
                />;
            case PopupWindowType.ERROR:
                return <ErrorPopup />;
            default:
                return null;
        }
    };

    return (
        activePopupType && <div className="PopupView">
            {selectPopup()}
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    activePopupType: state.general.activePopupType
});

export default connect(
    mapStateToProps
)(PopupView);