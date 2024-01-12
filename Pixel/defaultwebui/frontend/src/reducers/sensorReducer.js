
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  sensorReducer.js

Brief:  It contains reducers related to sensor (Inference) page. 

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/

import {
  SENSOR_REQUEST,
  SENSOR_SUCCESS,
  SENSOR_FAIL,
  GET_SENSOR_REQUEST,
  GET_SENSOR_SUCCESS,
  GET_SENSOR_FAIL,
  CLEAR_ERRORS,
  CLEAR_SUCCESS,
  GET_SENSOR_APPLY_REQUEST,
  GET_SENSOR_APPLY_SUCCESS,
  GET_SENSOR_APPLY_FAIL,
  CLEAR_SENSOR_APPLY_ERRORS,
  CLEAR_SENSOR_APPLY_SUCCESS
} from "../constants/sensorConstants";

export const sensorReducer = (state = {}, action) => {
  switch (action.type) {
    case SENSOR_REQUEST:
      return { ...state, loading: true };

    case SENSOR_SUCCESS:
      return { loading: false, success: true, sensorInfo: action.payload };

    case SENSOR_FAIL:
      return { loading: false, error: action.payload };

      case CLEAR_ERRORS :
        return {
          ...state,
          error: null,
        };

        case CLEAR_SUCCESS :
          return {
            ...state,
            success: false,
          };

    default:
      return state;
  }
};



export const getSensorReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SENSOR_REQUEST:
      return { ...state, loading: true };

    case GET_SENSOR_SUCCESS:
      return { loading: false, success: true, getSensorInfo: action.payload };

    case GET_SENSOR_FAIL:
      return { loading: false, error: action.payload };


    default:
      return state;
  }
};




export const applySensorReducer = (state = {}, action) => {
  switch (action.type) {
    case   GET_SENSOR_APPLY_REQUEST:
      return {loading: true };

    case   GET_SENSOR_APPLY_SUCCESS:
      return { loading: false, success: true, applySensorInfo: action.payload };

    case   GET_SENSOR_APPLY_FAIL:
      return { loading: false, error: action.payload };

      case  CLEAR_SENSOR_APPLY_ERRORS:
        return {
          ...state,
          error: null,
        };

        case  CLEAR_SENSOR_APPLY_SUCCESS:
          return {
            ...state,
            success: false,
          };

     
    default:
      return state;
  }
};