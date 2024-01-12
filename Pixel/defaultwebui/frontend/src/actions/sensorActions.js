/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  sensorActions.js (Inference.js)

Brief:  It contain all action creator related to sensor(Inference) page.

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/

import { apiPrefix } from "../constants/apiPrefix";
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

import axios from "axios";

export const sensorRegister = (sensorValue,navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: SENSOR_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const data1 = {
      overlap_threshold: sensorValue.occupancy_sensitivity, //name incruguency
      confidence_threshold: sensorValue.confidence_threshold,
      resolution: {
        width: sensorValue.width,
        height: sensorValue.height,
      },
      people_count_degree: sensorValue.degree,
      model_input_resolution: sensorValue.model_input_threshold,
      iou_threshold: sensorValue.iou_threshold,
      sleep_time: sensorValue.sleep_time,
      periodic_interval: sensorValue.periodic_interval,
      iteration_count: sensorValue.iteration_count
    };

    axios.defaults.withCredentials = true;

    const response = await axios.post(`${apiPrefix}/api/config/sensor`, data1, config);
 
    if(response.status===200){
      dispatch({ type: SENSOR_SUCCESS, payload: response.data });
    }
  
  } catch (error) {

    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      alert.error("Session Timed Out. Please login Again.")
      navigate("/")
    }
    else{
      dispatch({
      
        type: SENSOR_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
    
  }


};

export const sensorGetInfo = (navigate) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SENSOR_REQUEST
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const response = await axios.get(
      `${apiPrefix}/api/config/sensor`, config, 
      { withCredentials: true }
    );

    if(response.status===200){
      dispatch({ type: GET_SENSOR_SUCCESS, payload: response.data });
    }



  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      navigate("/")
    }
    else{
      dispatch({
      
        type: GET_SENSOR_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
   
  }
};


export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

// Clear Success
export const clearSuccess = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS,
  });
};



export const applySensorInfo = (navigate, alert) => async (dispatch, getState) => {
  try {
    dispatch({
      type:   GET_SENSOR_APPLY_REQUEST
    });
    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`
      },
    };

    const response = await axios.get(
      `${apiPrefix}/api/config/sensor_apply`, config, 
      { withCredentials: true }
    );

    if(response.status===200){
      dispatch({ type: GET_SENSOR_APPLY_SUCCESS, payload: response.data });
    }

   

  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      alert.error("Session Timed Out. Please login Again.")
      navigate("/")
    }
    else{
      dispatch({
      
        type:  GET_SENSOR_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
   

  }
};


export const clearSensorApplyErrors = () => async (dispatch) => {
  dispatch({
    type:   CLEAR_SENSOR_APPLY_ERRORS,
  });
};

// Clear Success
export const clearSensorApplySuccess = () => async (dispatch) => {
  dispatch({
    type:   CLEAR_SENSOR_APPLY_SUCCESS,
  });
};