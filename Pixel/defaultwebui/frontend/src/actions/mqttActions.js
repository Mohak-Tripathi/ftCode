/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  mqttAction.js

Brief:  It contain all action creator related to mqtt page.

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/

import { apiPrefix } from "../constants/apiPrefix";
import {
  MQTT_REGISTER_REQUEST,
  MQTT_REGISTER_SUCCESS,
  MQTT_REGISTER_FAIL,
  MQTT_SAVEDATA_SUCCESS,
  MQTT_SAVEDATA_FAIL,
  MQTT_SAVEDATA_REQUEST,
  MQTT_CERT_SUCCESS,
  MQTT_CERT_REQUEST,
  MQTT_CERT_FAIL,
  CLEAR_ERRORS_MQTT,
  CLEAR_SUCCESS_MQTT,
  CLEAR_ERRORS_MQTT_CERT,
  CLEAR_SUCCESS_MQTT_CERT,
  GET_MQTT_CERT_REQUEST,
  GET_MQTT_CERT_SUCCESS,
  GET_MQTT_CERT_FAIL,
  CLEAR_ERRORS_GET_MQTT_CERT,
  MQTT_APPLY_SUCCESS,
  MQTT_APPLY_FAIL,
  MQTT_APPLY_REQUEST,
  CLEAR_ERRORS_APPLY_MQTT,
  CLEAR_SUCCESS_APPLY_MQTT
} from "../constants/mqttConstants";
import axios from "axios";

//Get request

export const mqttSavedataAction = (navigate) => async (dispatch) => {
  try {
    dispatch({
      type: MQTT_SAVEDATA_REQUEST
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`
      },
    };

    const response = await axios.get(`${apiPrefix}/api/config/mqtt`, config,  {
      withCredentials: true,
    });

    if(response.status===200){
      dispatch({ type: MQTT_SAVEDATA_SUCCESS, payload: response.data });
    }


  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      navigate("/")
    }
    else{
      dispatch({
        type: MQTT_SAVEDATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
   

  }
};

export const getmqttCert = (navigate) => async (dispatch) => {
  try {
    dispatch({
      type: GET_MQTT_CERT_REQUEST,
    });
    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`
      },
    };


    const response= await axios.get(`${apiPrefix}/api/config/mqtt/cert`, config,  {
      withCredentials: true,
    });

    if(response.status===200){
      dispatch({ type: GET_MQTT_CERT_SUCCESS, payload: response.data });
    }

  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/")
    }
    else{
      dispatch({
        type: GET_MQTT_CERT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
   

  }
};

export const mqttRegisterAction = (mqtt, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: MQTT_REGISTER_REQUEST,
    });
    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const response = await axios.post(
      `${apiPrefix}/api/config/mqtt/params`,
      mqtt,      config, 
      { withCredentials: true }
 
    );

    if(response.status===200){
      dispatch({ type: MQTT_REGISTER_SUCCESS, payload: response.data });
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
        type: MQTT_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  
  }
};



export const mqttProtocolCertAction = (mqttProtocol, navigate,alert) => async (dispatch) => {
  try {
    dispatch({
      type: MQTT_CERT_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)


    const formData = new FormData();
    formData.append("mqtt_cert_file", mqttProtocol);
  
    const headers = new Headers({
      Authorization: `Bearer ${BearerCheck}`,
    });

    const options = {
      method: "POST",
      headers,
      body: formData,
      credentials: "include", // Equivalent to withCredentials: true in Axios
    };

    const response = await fetch( `${apiPrefix}/api/config/mqtt/cert`, options);

    if (response.ok) {
      const data = await response.json();
      dispatch({ type: MQTT_CERT_SUCCESS, payload: data });
    } else if (response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      alert.error("Session Timed Out. Please login Again");
      navigate("/");
    } else {
      const errorData = await response.json();
      dispatch({
        type: MQTT_CERT_FAIL,
        payload: errorData.message || "Failed to upload OTA.",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    dispatch({
      type: MQTT_CERT_FAIL,
      payload: error.message || "Failed to upload OTA.",
    });
  }

};





  

   






// Clear Errors
export const clearErrorsMQTT = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_MQTT,
  });
};

// Clear Success
export const clearSuccessMQTT = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_MQTT,
  });
};

export const clearErrorsMQTTCert = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_MQTT_CERT,
  });
};

export const clearSuccessMQTTCert = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_MQTT_CERT,
  });
};

// Clear Errors
export const clearErrorsMqttCert = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_GET_MQTT_CERT,
  });
};




export const applyMqttCheck = (navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: MQTT_APPLY_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`
      },
    };

  
    const response = await axios.get(
      `${apiPrefix}/api/config/mqtt/params_apply`, config, 
      { withCredentials: true }
    );

    if(response.status===200){
   
      dispatch({ type: MQTT_APPLY_SUCCESS, payload: response.data });
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
        type: MQTT_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  
 
  }
};

export const clearMqttApplySuccess = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_APPLY_MQTT,
  });
};

export const clearMqttApplyErrors= () => async (dispatch) => {
  dispatch({
    type:  CLEAR_ERRORS_APPLY_MQTT,
  });
};

