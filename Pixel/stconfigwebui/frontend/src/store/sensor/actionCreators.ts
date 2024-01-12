import {sensorData, mqttData, resolutionData} from "./types";
import {Action} from "../Actions";


export function updateSensorId(sensorId: string) {
    return {
        type: Action.UPDATE_SENSOR_ID,
        payload: {
            sensorId
        }
    }
}

export function updateOverlapThreshold(overlapThreshold: number) {
    return {
        type: Action.UPDATE_OVERLAP_THRESHOLD,
        payload: {
            overlapThreshold
        }
    }
}

export function updateResolution(resolutionData: resolutionData){
    return{
        type: Action.UPDATE_RESOLUTION,
        payload:{
            resolutionData
        }
    }
}

export function updateMqttData(mqttData: mqttData){
    return{
        type: Action.UPDATE_MQTT_DATA,
        payload:{
            mqttData
        }
    }
}