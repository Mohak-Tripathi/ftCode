import { type } from "os";
import {Action} from "../Actions";

export type resolutionData = {
    width: number,
    height: number
}

export type mqttData = {
    broker: string,
    port: number,
    topic: string
}

export type sensorData = {
    overlap_threshold: number,
    resolution: resolutionData,
    sensorId: string
}

export type SensorState = {
    mqtt : mqttData,
    sensor: sensorData
}

interface UpdateSensorId {
    type: typeof Action.UPDATE_SENSOR_ID;
    payload: {
        sensorId: string;
    }
}

interface updateOverlapThreshold {
    type: typeof Action.UPDATE_OVERLAP_THRESHOLD;
    payload: {
        overlapThreshold: number;
    }
}

interface updateResolution {
    type: typeof Action.UPDATE_RESOLUTION;
    payload: {
        resolutionData: resolutionData;
    }
}

interface updateMqttData {
    type: typeof Action.UPDATE_MQTT_DATA;
    payload: {
        mqttData: mqttData;
    }
}

export type SensorActionTypes = UpdateSensorId
    | updateOverlapThreshold
    | updateResolution
    | updateMqttData