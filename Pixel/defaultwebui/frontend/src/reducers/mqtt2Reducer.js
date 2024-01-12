
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  mqtt2Reducer.js

Brief:  It contains reducers related to mqtt2 page. 

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/


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
  
  
  export const mqttTwoSaveDataReducer = (state = {}, action) => {
    switch (action.type) {
      case MQTT_TWO_SAVEDATA_REQUEST:
        return { ...state, loading: true };
  
      case MQTT_TWO_SAVEDATA_SUCCESS:
        return { loading: false, success: true, mqttTwoDefaultInfo: action.payload };
  
      case MQTT_TWO_SAVEDATA_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export const mqttTwoRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case MQTT_TWO_REGISTER_REQUEST:
        return { ...state, loading: true };
  
      case MQTT_TWO_REGISTER_SUCCESS:
        return { loading: false, success: true, mqttTwoInfo: action.payload };
  
      case MQTT_TWO_REGISTER_FAIL:
        return { loading: false, error: action.payload };
  
      case CLEAR_ERRORS_MQTT_TWO:
        return {
          ...state,
          error: null,
        };
  
      case CLEAR_SUCCESS_MQTT_TWO:
        return {
          ...state,
          success: false,
        };
  
  
      default:
        return state;
    }
  };
  

  
  
  export const mqttTwoProtocolCertReducer = (state = {}, action) => {
    switch (action.type) {
      case MQTT_TWO_CERT_REQUEST:
        return { loading: true };
  
      case MQTT_TWO_CERT_SUCCESS:
        return { loading: false, success: true, mqttTwoProtocol: action.payload };
  
      case MQTT_TWO_CERT_FAIL:
        return { loading: false, error: action.payload };
  
        case CLEAR_ERRORS_MQTT_TWO_CERT:
          return {
            ...state,
            error: null,
          };
    
        case CLEAR_SUCCESS_MQTT_TWO_CERT:
          return {
            ...state,
            success: false,
          };
  
      default:
        return state;
    }
  };
  
  
  
  export const getMqttTwoCertReducer = (state = {getMqttTwoProtocolInfo: {}}, action) => {
    switch (action.type) {
      case GET_MQTT_TWO_CERT_REQUEST:
        return { loading: true };
  
      case GET_MQTT_TWO_CERT_SUCCESS:
        return { loading: false, success: true, getMqttTwoProtocolInfo: action.payload };
  
      case GET_MQTT_TWO_CERT_FAIL:
        return { loading: false, error: action.payload };
  
        case CLEAR_ERRORS_GET_MQTT_TWO_CERT:
          return {
            ...state,
            error: null,
          };
    
      default:
        return state;
    }
  };


  export const applyMqttTwoReducer = (state = {}, action) => {
    switch (action.type) {
      case MQTT_TWO_APPLY_REQUEST:
        return { loading: true };
  
      case MQTT_TWO_APPLY_SUCCESS:
        return { loading: false, success: true, applyMqttTwoInfo: action.payload };
  
      case MQTT_TWO_APPLY_FAIL:
        return { loading: false, error: action.payload };

        case CLEAR_ERRORS_APPLY_MQTT_TWO:
          return {
            ...state,
            error: null,
          };
    
        case CLEAR_SUCCESS_APPLY_MQTT_TWO:
          return {
            ...state,
            success: false,
          };
    
    
      default:
        return state;
    }
  };