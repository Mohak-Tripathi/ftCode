import React from 'react'
import './ErrorPopup.scss'
import { GenericYesNoPopup } from "../GenericYesNoPopup/GenericYesNoPopup";
import { AppState } from "../../../store";
import { connect } from "react-redux";
import { PopupActions } from "../../../logic/actions/PopupActions";

interface IProps {
    error: String
}

const ErrorPopup: React.FC<IProps> = (props) => {
    const { error
    } = props;

    const renderContent = () => {
        return (
            <div className="ErrorPopupContent">
                <div className="Message">
                    {error}
                </div>
            </div>
        )
    };

    const onAccept = () => {
        PopupActions.close();
    };

    // const onReject = () => {
    //     PopupActions.close();
    // };

    return (
        <GenericYesNoPopup
            title={"Error"}
            renderContent={renderContent}
            acceptLabel={"Exit"}
            onAccept={onAccept}
            rejectLabel={"Back"}
            // onReject={onReject}
            skipRejectButton={true}
        />)
};

const mapDispatchToProps = {

};

const mapStateToProps = (state: AppState) => ({
    error: state.general.error
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorPopup);