import React, { useState } from 'react'
import './ExportLabelPopup.scss'
import { AnnotationFormatType } from "../../../data/enums/AnnotationFormatType";
import { RectLabelsExporter } from "../../../logic/export/RectLabelsExporter";
import { LabelType } from "../../../data/enums/LabelType";
import { ILabelFormatData } from "../../../interfaces/ILabelFormatData";
import { PointLabelsExporter } from "../../../logic/export/PointLabelsExport";
import { PolygonLabelsExporter } from "../../../logic/export/polygon/PolygonLabelsExporter";
import { PopupActions } from "../../../logic/actions/PopupActions";
import { LineLabelsExporter } from "../../../logic/export/LineLabelExport";
import { TagLabelsExporter } from "../../../logic/export/TagLabelsExport";
import GenericLabelTypePopup from "../GenericLabelTypePopup/GenericLabelTypePopup";
import { ExportFormatData } from "../../../data/ExportFormatData";
import { AppState } from "../../../store";
import { connect } from "react-redux";

interface IProps {
    activeLabelType: LabelType,
    configFolder: String
}

const ExportLabelPopup: React.FC<IProps> = ({ activeLabelType, configFolder }) => {
    const [labelType, setLabelType] = useState(activeLabelType);
    const [exportFormatType, setExportFormatType] = useState(AnnotationFormatType.YOLO);

    const onAccept = async (labelType: LabelType) => {
        PopupActions.loading();
        switch (labelType) {
            case LabelType.RECT:
                await RectLabelsExporter.export(exportFormatType, configFolder);
                break;
            case LabelType.POINT:
                PointLabelsExporter.export(exportFormatType);
                break;
            case LabelType.LINE:
                LineLabelsExporter.export(exportFormatType);
                break;
            case LabelType.POLYGON:
                PolygonLabelsExporter.export(exportFormatType);
                break;
            case LabelType.IMAGE_RECOGNITION:
                TagLabelsExporter.export(exportFormatType);
                break;
        }
        PopupActions.close();
    };

    const onReject = (labelType: LabelType) => {
        PopupActions.close();
    };

    const onSelect = (exportFormatType: AnnotationFormatType) => {
        setExportFormatType(exportFormatType);
    };

    const getOptions = (exportFormatData: ILabelFormatData[]) => {
        // return exportFormatData.map((entry: ILabelFormatData) => {
        return <div
            className="OptionsItem"
            onClick={() => onSelect(exportFormatData[0].type)}
            key={exportFormatData[0].type}
        >
            {exportFormatData[0].type === exportFormatType ?
                <img
                    draggable={false}
                    src={"ico/checkbox-checked.png"}
                    alt={"checked"}
                /> :
                <img
                    draggable={false}
                    src={"ico/checkbox-unchecked.png"}
                    alt={"unchecked"}
                />}
            {exportFormatData[0].label}
        </div>
    };

    const renderInternalContent = (labelType: LabelType) => {
        return [
            <div className="Message">
                Select label type and the file format you would like to use to export labels.
            </div>,
            <div className="Options">
                {getOptions(ExportFormatData[labelType])}
            </div>
        ]
    }

    const onLabelTypeChange = (labelType: LabelType) => {
        setLabelType(labelType);
        setExportFormatType(null);
    }

    return (
        <GenericLabelTypePopup
            activeLabelType={labelType}
            title={`Export ${labelType.toLowerCase()} annotations`}
            onLabelTypeChange={onLabelTypeChange}
            acceptLabel={"Export"}
            onAccept={onAccept}
            disableAcceptButton={!exportFormatType}
            rejectLabel={"Cancel"}
            onReject={onReject}
            renderInternalContent={renderInternalContent}
        />
    )
};

const mapDispatchToProps = {};

const mapStateToProps = (state: AppState) => ({
    activeLabelType: state.labels.activeLabelType,
    configFolder: state.general.configFolder
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExportLabelPopup);