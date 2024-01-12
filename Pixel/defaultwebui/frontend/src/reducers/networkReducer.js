
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  networkReducer.js

Brief:  It contains reducers related to network page. 

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/


import {
  NTP_NETWORK_REQUEST,
  NTP_NETWORK_SUCCESS,
  NTP_NETWORK_FAIL,
  WIFI_NETWORK_REQUEST,
  WIFI_NETWORK_SUCCESS,
  WIFI_NETWORK_FAIL,
  WIFICRED_NETWORK_REQUEST,
  WIFICRED_NETWORK_SUCCESS,
  WIFICRED_NETWORK_FAIL,

  GET_NETWORK_INFO_REQUEST,
  GET_NETWORK_INFO_SUCCESS,
  GET_NETWORK_INFO_FAIL,
  CLEAR_ERRORS_CRED,
  CLEAR_SUCCESS_CRED,
  CLEAR_ERRORS_CRED_WIFI_NET,
  CLEAR_SUCCESS_CRED_WIFI_NET,
  CLEAR_SUCCESS_NTP,
  CLEAR_ERRORS_NTP,
  WIFICRED_APPLY_REQUEST,
  WIFICRED_APPLY_SUCCESS,
  WIFICRED_APPLY_FAIL,
  CLEAR_ERRORS_CRED_WIFI_APPLY,
  CLEAR_SUCCESS_CRED_WIFI_APPLY,
  STATICIP_APPLY_FAIL,
  STATICIP_APPLY_SUCCESS,
  STATICIP_APPLY_REQUEST,
  NTP_APPLY_REQUEST,
  NTP_APPLY_SUCCESS,
  NTP_APPLY_FAIL,

  

} from "../constants/networkConstants";




export const wifiCredNetworkReducer = (state = {}, action) => {
  switch (action.type) {
    case WIFICRED_NETWORK_REQUEST:
      return { ...state, loading: true };

    case WIFICRED_NETWORK_SUCCESS:
      return {
        loading: false,
        success: true,
        wifiCredNetworkInfo: action.payload,
      };

    case WIFICRED_NETWORK_FAIL:
      return { loading: false, error: action.payload };

      
      case CLEAR_ERRORS_CRED :
        return {
          ...state,
          error: null,
        };

        case CLEAR_SUCCESS_CRED :
          return {
            ...state,
            success: false,
          };

    default:
      return state;
  }
};

export const wifiNetworkReducer = (state = {}, action) => {
  switch (action.type) {
    case WIFI_NETWORK_REQUEST:
      return { ...state, loading: true };

    case WIFI_NETWORK_SUCCESS:
      return { loading: false, success: true, wifiNetworkInfo: action.payload };

    case WIFI_NETWORK_FAIL:
      return { loading: false, error: action.payload };

      case  CLEAR_ERRORS_CRED_WIFI_NET:
        return {
          ...state,
          error: null,
        };

        case  CLEAR_SUCCESS_CRED_WIFI_NET :
          return {
            ...state,
            success: false,
          };

    default:
      return state;
  }
};



export const ntpNetworkReducer = (state = {}, action) => {
  switch (action.type) {
    case NTP_NETWORK_REQUEST:
      return { ...state, loading: true };

    case NTP_NETWORK_SUCCESS:

      return { loading: false, success: true, ntpNetworkInfo: action.payload };

    case NTP_NETWORK_FAIL:
      return { loading: false, error: action.payload };

      case  CLEAR_ERRORS_NTP:
        return {
          ...state,
          error: null,
        };

        case  CLEAR_SUCCESS_NTP:
          return {
            ...state,
            success: false,
          };


    default:
      return state;
  }
};




export const getNetworkInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_NETWORK_INFO_REQUEST:
      return { ...state, loading: true };

    case GET_NETWORK_INFO_SUCCESS:
      return { loading: false, success: true, getAllNetworkInfo: action.payload };

    case GET_NETWORK_INFO_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};




//APPLY
export const applyWifiCredReducer = (state = {}, action) => {
  switch (action.type) {
    case WIFICRED_APPLY_REQUEST :
      return { loading: true };

    case WIFICRED_APPLY_SUCCESS:
      return { loading: false, success: true, applyWifiCredInfo: action.payload };

    case WIFICRED_APPLY_FAIL:
      return { loading: false, error: action.payload };

      case   CLEAR_ERRORS_CRED_WIFI_APPLY:
        return {
          ...state,
          error: null,
        };

        case   CLEAR_SUCCESS_CRED_WIFI_APPLY:
          return {
            ...state,
            success: false,
          };


    default:
      return state;
  }
};

export const applyStaticIpReducer = (state = {}, action) => {
  switch (action.type) {
    case STATICIP_APPLY_REQUEST  :
      return { loading: true };

    case STATICIP_APPLY_SUCCESS:
      return { loading: false, success: true, applyStaticIpInfo: action.payload };

    case STATICIP_APPLY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const applyNtpReducer = (state = {}, action) => {
  switch (action.type) {
    case NTP_APPLY_REQUEST  :
      return { loading: true };

    case NTP_APPLY_SUCCESS:
      return { loading: false, success: true, applyNtpInfo: action.payload };

    case NTP_APPLY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};






