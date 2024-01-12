import React from 'react'
import './SelectCameraIdPopup.scss'
import {AppState} from "../../../store";
import {connect} from "react-redux";
import {GenericYesNoPopup} from "../GenericYesNoPopup/GenericYesNoPopup";
import {PopupActions} from "../../../logic/actions/PopupActions";
import {CameraId} from "../../../store/labels/types";
import {updateProjectData} from "../../../store/general/actionCreators";
import {ProjectData} from "../../../store/general/types";
import Select from 'react-select';

interface IProps {
    cameras: CameraId[];
    updateProjectData: (projectData: ProjectData) => any;
    projectData: ProjectData;
}

const LoadCameraIdsPopup: React.FC<IProps> = ({cameras, updateProjectData, projectData}) => {
    
    const onAccept = () => {
        console.log(cameras)
        PopupActions.close();
    };

    const onReject = () => {
        console.log("rejected")
        PopupActions.close();
    };

    const renderContent = () => {
        return(<div className="SelectCameraIdPopupContent">
            <Select 
                className="Selector" 
                options={cameras.map((camera)=>({label: camera, value: camera}))}
                onChange={opt => updateProjectData({
                    ...projectData,
                    name: opt.value
                })}
            />
        </div>);
    };

    return(
        <GenericYesNoPopup
            title={"Load file with labels description"}
            renderContent={renderContent}
            acceptLabel={"Submit"}
            onAccept={onAccept}
            disableAcceptButton={cameras.length === 0}
            rejectLabel={"Cancel"}
            onReject={onReject}
        />
    );
};

const mapDispatchToProps = {
    updateProjectData
};

const mapStateToProps = (state: AppState) => ({
    cameras : state.labels.cameras,
    projectData: state.general.projectData
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadCameraIdsPopup);