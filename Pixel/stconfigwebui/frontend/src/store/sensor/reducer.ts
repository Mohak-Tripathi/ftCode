import { sensorData, SensorState, SensorActionTypes} from "./types";
import {Action} from "../Actions";

const initialState: SensorState = {
    mqtt: null,
    sensor: null
};

export function sensorReducer(
    state = initialState,
    action: SensorActionTypes
): SensorState {
    switch(action.type){
        case Action.UPDATE_SENSOR_ID: {
            return {
                ...state,
                sensor: {
                    ...state.sensor,
                    sensorId: action.payload.sensorId
                }                                 
            }
        }
        case Action.UPDATE_OVERLAP_THRESHOLD: {
            return {
                ...state,
                sensor: {
                    ...state.sensor,
                    overlap_threshold: action.payload.overlapThreshold
                }                                 
            }
        }
        case Action.UPDATE_RESOLUTION: {
            return {
                ...state,
                sensor: {
                    ...state.sensor,
                    resolution: action.payload.resolutionData
                }                                 
            }
        }
        case Action.UPDATE_MQTT_DATA: {
            return {
                ...state,
                mqtt: action.payload.mqttData                                 
            }
        }        
        default:
            return state;
    }
}