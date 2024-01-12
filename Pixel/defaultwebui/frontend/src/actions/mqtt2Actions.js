/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  mqtt2Action.js

Brief:  It contain all action creator related to mqtt2 page.

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/

 import { apiPrefix } from "../constants/apiPrefix";
import {
    MQTT_TWO_SAVEDATA_REQUEST,
    MQTT_TWO_SAVEDATA_SUCCESS,
    MQTT_TWO_SAVEDATA_FAIL,

   MQTT_TWO_REGISTER_REQUEST,
   MQTT_TWO_REGISTER_SUCCESS,
   MQTT_TWO_REGISTER_FAIL,
   CLEAR_ERRORS_MQTT_TWO,
   CLEAR_SUCCESS_MQTT_TWO,

   MQTT_TWO_CERT_SUCCESS,
   MQTT_TWO_CERT_REQUEST,
   MQTT_TWO_CERT_FAIL,
   CLEAR_ERRORS_MQTT_TWO_CERT,
   CLEAR_SUCCESS_MQTT_TWO_CERT,


    GET_MQTT_TWO_CERT_REQUEST,
    GET_MQTT_TWO_CERT_SUCCESS,
    GET_MQTT_TWO_CERT_FAIL,
    CLEAR_ERRORS_GET_MQTT_TWO_CERT,
    MQTT_TWO_APPLY_REQUEST,
    MQTT_TWO_APPLY_SUCCESS,
    MQTT_TWO_APPLY_FAIL,
    CLEAR_ERRORS_APPLY_MQTT_TWO,
    CLEAR_SUCCESS_APPLY_MQTT_TWO
  
  } from "../constants/mqtt2Constants";
  import axios from "axios";
  


  //Get request
  export const mqttTwoSaveDataAction = (navigate) => async (dispatch) => {
    try {
      dispatch({
        type: MQTT_TWO_SAVEDATA_REQUEST,
      });

      let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
      const config = {
        headers: {
          Authorization: `Bearer ${BearerCheck}`
        },
      };
  
  
  
      const response = await axios.get(`${apiPrefix}/api/config/mqtt_two`, config,  {
        withCredentials: true,
      });

      if(response.status===200){
        dispatch({ type: MQTT_TWO_SAVEDATA_SUCCESS, payload: response.data });
      }
  

    } catch (error) {
      if(error.response.status=== 401){
        localStorage.removeItem("token");
        localStorage.removeItem("user")
        navigate("/")
      }
      else{
        dispatch({
          type: MQTT_TWO_SAVEDATA_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    
    }
  };

  
  export const mqttTwoRegisterAction = (mqtt, navigate, alert) => async (dispatch) => {
    try {
      dispatch({
        type: MQTT_TWO_REGISTER_REQUEST,
      });
  
      let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${BearerCheck}`,
        },
      };
  

  
      const response = await axios.post(
        `${apiPrefix}/api/config/mqtt_two/params`,
        mqtt,  config, 
        { withCredentials: true }
      );

      if(response.status===200){
        dispatch({ type: MQTT_TWO_REGISTER_SUCCESS, payload: response.data });
      }
  
 
    } catch (error) {
      if(error.response.status=== 401){
        localStorage.removeItem("token");
        localStorage.removeItem("user")
        alert.error("Session Timed Out. Please login Again")
        navigate("/")
      }
      else{
        dispatch({
          type: MQTT_TWO_REGISTER_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
  
        });
      }

    }
  };
  
  
  export const getTwoMqttCert = (navigate) => async (dispatch) => {
    try {
      dispatch({
        type: GET_MQTT_TWO_CERT_REQUEST,
      });

      let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
      const config = {
        headers: {
          Authorization: `Bearer ${BearerCheck}`
        },
      };
  
  
  
      const response = await axios.get(`${apiPrefix}/api/config/mqtt_two/cert`, config, {
        withCredentials: true,
      });
  
      
      if(response.status===200){
  
        dispatch({ type: GET_MQTT_TWO_CERT_SUCCESS, payload: response.data });
      }

    } catch (error) {
     if(error.response.status=== 401){
        localStorage.removeItem("token");
        localStorage.removeItem("user")
        navigate("/")
      }
      else{
        dispatch({
          type: GET_MQTT_TWO_CERT_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    
    }
  };
  

  
  export const mqttTwoProtocolCertAction = (mqttProtocol, navigate, alert) => async (dispatch) => {
   



    try {
      dispatch({
        type: MQTT_TWO_CERT_REQUEST,
      });
  
      let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
  
      const formData = new FormData();
      formData.append("mqtt_two_cert_file", mqttProtocol);
    
      const headers = new Headers({
        Authorization: `Bearer ${BearerCheck}`,
      });
  
      const options = {
        method: "POST",
        headers,
        body: formData,
        credentials: "include", // Equivalent to withCredentials: true in Axios
      };
  
      const response = await fetch( `${apiPrefix}/api/config/mqtt_two/cert`, options);
  
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: MQTT_TWO_CERT_SUCCESS, payload: data });
      } else if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        alert.error("Session Timed Out. Please login Again");
        navigate("/");
      } else {
        const errorData = await response.json();
        dispatch({
          type: MQTT_TWO_CERT_FAIL,
          payload: errorData.message || "Failed to upload OTA.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch({
        type: MQTT_TWO_CERT_FAIL,
        payload: error.message || "Failed to upload OTA.",
      });
    }
  };
  
  // Clear Errors
  export const clearErrorsMQTTTwo = () => async (dispatch) => {
    dispatch({
      type: CLEAR_ERRORS_MQTT_TWO,
    });
  };
  
  // Clear Success
  export const clearSuccessMQTTTwo = () => async (dispatch) => {
    dispatch({
      type: CLEAR_SUCCESS_MQTT_TWO,
    });
  };
  
  export const clearErrorsMQTTCertTwo = () => async (dispatch) => {
    dispatch({
      type: CLEAR_ERRORS_MQTT_TWO_CERT,
    });
  };
  
  export const clearSuccessMQTTCertTwo = () => async (dispatch) => {
    dispatch({
      type: CLEAR_SUCCESS_MQTT_TWO_CERT,
    });
  };
  
  // Clear Errors
  export const clearErrorsMQTTCert = () => async (dispatch) => {
    dispatch({
      type: CLEAR_ERRORS_GET_MQTT_TWO_CERT,
    });
  };
  


  //APPLY

export const applyMqttTwoCheck = (navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: MQTT_TWO_APPLY_REQUEST,
    });


    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`
      },
    };


    const response = await axios.get(
      `${apiPrefix}/api/config/mqtt_two/params_apply`, config, 
      { withCredentials: true }
    );

    if(response.status===200){
 
      dispatch({ type: MQTT_TWO_APPLY_SUCCESS, payload: response.data });
    }

  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      alert.error("Session Timed Out. Please login Again")
      navigate("/")
    }
    else{
      dispatch({
        type: MQTT_TWO_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
   
  }
};


export const clearMqttTwoApplySuccess = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_APPLY_MQTT_TWO,
  });
};

export const clearMqttTwoApplyErrors= () => async (dispatch) => {
  dispatch({
    type:  CLEAR_ERRORS_APPLY_MQTT_TWO,
  });
};


