import React from 'react';
import './TopNavigationBar.scss';
import StateBar from "../StateBar/StateBar";
import { PopupWindowType } from "../../../data/enums/PopupWindowType";
import { AppState } from "../../../store";
import { connect } from "react-redux";
import { updateActivePopupType, updateProjectData } from "../../../store/general/actionCreators";
import { ProjectData } from "../../../store/general/types";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

interface IProps {
    updateActivePopupType: (activePopupType: PopupWindowType) => any;
    updateProjectData: (projectData: ProjectData) => any;
    projectData: ProjectData;
}

const TopNavigationBar: React.FC<IProps> = ({ updateActivePopupType, updateProjectData, projectData }) => {

    return (
        <div className="TopNavigationBar">
            <StateBar />
            <div className="TopNavigationBarWrapper">
                <div className="NavigationBarGroupWrapper">
                    <div
                        className="Header"
                        onClick={() => updateActivePopupType(PopupWindowType.EXIT_PROJECT)}
                    >
                        Pixel Sensor
                    </div>
                </div>
                <div className="NavigationBarGroupWrapper">
                    {<DropDownMenu />}
                </div>
                <div className="NavigationBarGroupWrapper middle">
                    <div className="ProjectName">Camera Id:</div>
                    <p>{projectData.name}</p>

                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    updateActivePopupType,
    updateProjectData
};

const mapStateToProps = (state: AppState) => ({
    projectData: state.general.projectData
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopNavigationBar);