import React, {useState} from 'react'
import './LoadCameraIdsPopup.scss'
import {AppState} from "../../../store";
import {connect} from "react-redux";
import {updateCameraIds} from "../../../store/labels/actionCreators";
import {GenericYesNoPopup} from "../GenericYesNoPopup/GenericYesNoPopup";
import {PopupWindowType} from "../../../data/enums/PopupWindowType";
import {updateActivePopupType} from "../../../store/general/actionCreators";
import {useDropzone} from "react-dropzone";
import {AcceptedFileType} from "../../../data/enums/AcceptedFileType";
import {CameraId} from "../../../store/labels/types";
import XLSX from 'xlsx';
import { uniq } from 'lodash';
import { PopupActions } from '../../../logic/actions/PopupActions';

interface IProps {
    updateActivePopupType: (activePopupType: PopupWindowType) => any;
    updateCameras: (cameras: CameraId[]) => any;
}

const LoadCameraIdsPopup: React.FC<IProps> = ({updateActivePopupType, updateCameras}) => {
    const [camerasList, setCamerasList] = useState([]);
    const [invalidFileLoadedStatus, setInvalidFileLoadedStatus] = useState(false);

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        accept: AcceptedFileType.EXCEL,
        multiple: false,
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length === 1) {
                const reader = new FileReader();
                reader.onload = function (evt) {
                    if(evt.target){
                        const content = evt.target.result;
                        const wb = XLSX.read(content, {type:"binary"});
                        const data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header:["ID", "OPERATION",	"STATUS",	"MESSAGE",	"NAME",	"SENSOR_TYPE", "GROUP_IDENTIFIER", "IDENTIFIER", "MAKE", "MODEL"]});
                        data.splice(0, 2)
                        console.log(data);
                        const seatIds = []
                        data.map((row:any)=>{
                            // let seat = {id: row.GROUP_IDENTIFIER}
                            // console.log(seat)
                            seatIds.push(row.GROUP_IDENTIFIER)
                        }) 
                        onSuccess(uniq(seatIds));
                    }
                };
                reader.onerror = () => onFailure();
                reader.readAsBinaryString(acceptedFiles[0]);
            }
        }
    });

    const onSuccess = (camerasList: CameraId[]) => {
        setCamerasList(camerasList);
        setInvalidFileLoadedStatus(false);
    };

    const onFailure = () => {
        setInvalidFileLoadedStatus(true);
    };

    const onAccept = () => {
        if (camerasList.length > 0) {
            updateCameras(camerasList);
            updateActivePopupType(PopupWindowType.SELECT_CAMERA_ID);    
        }
    };

    const onReject = () => {
        PopupActions.close()
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
                <p className="extraBold">Loading of xls/xlsx file was unsuccessful</p>
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
                <p className="extraBold">Drop xls/xlsx file</p>
                <p>or</p>
                <p className="extraBold">Click here to select it</p>
            </>;
        else if (camerasList.length === 1)
            return <>
                <img
                    draggable={false}
                    alt={"uploaded"}
                    src={"ico/box-closed.png"}
                />
                <p className="extraBold">only 1 camera id found</p>
            </>;
        else
            return <>
                <img
                    draggable={false}
                    alt={"uploaded"}
                    src={"ico/box-closed.png"}
                />
                <p className="extraBold">{camerasList.length} camera ids found</p>
            </>;
    };

    const renderContent = () => {
        return(<div className="LoadCameraIdsPopupContent">
            <div className="Message">
                Load a xls/xlsx file with a list of camera identifiers you are planning to use.
            </div>
            <div {...getRootProps({className: 'DropZone'})}>
                {getDropZoneContent()}
            </div>
        </div>);
    };

    return(
        <GenericYesNoPopup
            title={"Load file with labels description"}
            renderContent={renderContent}
            acceptLabel={"Select Camera Id"}
            onAccept={onAccept}
            disableAcceptButton={camerasList.length === 0}
            rejectLabel={"Cancel"}
            onReject={onReject}
        />
    );
};

const mapDispatchToProps = {
    updateActivePopupType,
    updateCameras: updateCameraIds
};

const mapStateToProps = (state: AppState) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadCameraIdsPopup);