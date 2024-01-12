import {ContextManager} from "../context/ContextManager";
import {store} from "../../index";
import {updateActivePopupType} from "../../store/general/actionCreators";
import { PopupWindowType } from "../../data/enums/PopupWindowType";

export class PopupActions {
    public static close() {
        store.dispatch(updateActivePopupType(null));
        ContextManager.restoreCtx();
    }
    public static loading() {
        store.dispatch(updateActivePopupType(PopupWindowType.LOADER));
        ContextManager.restoreCtx();
    }
}