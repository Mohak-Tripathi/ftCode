
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  adminReducer.js

Brief:  It contains reducers related to admin page. 

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.



 ..........................*/


import {
    VARIANT_REQUEST,
    VARIANT_SUCCESS,
    VARIANT_FAIL,
    ADMIN_WIFI_REQUEST,
    ADMIN_WIFI_FAIL,
    ADMIN_WIFI_SUCCESS,
    CLEAR_ERRORS_WIFI_STATUS,
    CLEAR_SUCCESS_WIFI_STATUS,
    ADMIN_SSH_REQUEST,
    ADMIN_SSH_FAIL,
    ADMIN_SSH_SUCCESS,
    CLEAR_ERRORS_SSH_STATUS,
    CLEAR_SUCCESS_SSH_STATUS,
    ADMIN_VNC_REQUEST,
    ADMIN_VNC_FAIL,
    ADMIN_VNC_SUCCESS,
    CLEAR_ERRORS_VNC_STATUS,
    CLEAR_SUCCESS_VNC_STATUS,
    AP_MODE_SSID_PASS_REQUEST,
    AP_MODE_SSID_PASS_SUCCESS,
    AP_MODE_SSID_PASS_FAIL,
    CLEAR_ERRORS_VARIANT,
    CLEAR_SUCCESS_VARIANT,
    CLEAR_ERRORS_SSID_PASS,
    CLEAR_SUCCESS_SSID_PASS,

    AP_MODE_REQUEST,
    AP_MODE_SUCCESS,
    AP_MODE_FAIL,
    CLEAR_ERRORS_APMODE,
    CLEAR_SUCCESS_APMODE,
    GET_ADMIN_INFO_REQUEST,
    GET_ADMIN_INFO_SUCCESS,
    GET_ADMIN_INFO_FAIL,
    GET_APMODE_APPLY_REQUEST,
    GET_APMODE_APPLY_SUCCESS,
    GET_APMODE_APPLY_FAIL,
    GET_APMODEPASS_APPLY_REQUEST,
    GET_APMODEPASS_APPLY_SUCCESS,
    GET_APMODEPASS_APPLY_FAIL,
    GET_WIFI_STATUS_APPLY_REQUEST,
    GET_WIFI_STATUS_APPLY_SUCCESS,
    GET_WIFI_STATUS_APPLY_FAIL,
    GET_VARIANT_STATUS_APPLY_REQUEST,
    GET_VARIANT_STATUS_APPLY_SUCCESS,
    GET_VARIANT_STATUS_APPLY_FAIL,
    GET_SSH_STATUS_APPLY_REQUEST,
    GET_SSH_STATUS_APPLY_SUCCESS,
    GET_SSH_STATUS_APPLY_FAIL,
    CLEAR_ERRORS_APMODE_APPLY_STATUS,
    CLEAR_SUCCESS_APMODE_APPLY_STATUS,
    CLEAR_ERRORS_APMODEPASS_APPLY_STATUS,
    CLEAR_SUCCESS_APMODEPASS_APPLY_STATUS,
    CLEAR_ERRORS_VARIANT_APPLY_STATUS,
    CLEAR_SUCCESS_VARIANT_APPLY_STATUS,
    CLEAR_ERRORS_SSH_APPLY_STATUS,
    CLEAR_SUCCESS_SSH_APPLY_STATUS,
    CLEAR_ERRORS_WIFI_APPLY_STATUS,
    CLEAR_SUCCESS_WIFI_APPLY_STATUS,
    GET_VNC_STATUS_APPLY_REQUEST,
    GET_VNC_STATUS_APPLY_SUCCESS,
    GET_VNC_STATUS_APPLY_FAIL,
    CLEAR_ERRORS_VNC_APPLY_STATUS,
    CLEAR_SUCCESS_VNC_APPLY_STATUS,
    OTA_REQUEST,
    CLEAR_ERRORS_OTA,
    CLEAR_SUCCESS_OTA,
    OTA_FAIL,
    OTA_SUCCESS,
    GET_OTA_APPLY_REQUEST,
    GET_OTA_APPLY_SUCCESS,
    GET_OTA_APPLY_FAIL,
    CLEAR_ERRORS_OTA_APPLY,
    CLEAR_SUCCESS_OTA_APPLY,

   } from "../constants/adminConstants";
  
  export const variantReducer = (state = {}, action) => {
    switch (action.type) {
      case VARIANT_REQUEST:
        return { ...state, loading: true };
  
      case VARIANT_SUCCESS:
        return { loading: false, success: true, variantInfo: action.payload };
  
      case VARIANT_FAIL:
        return { loading: false, error: action.payload };

        case CLEAR_ERRORS_VARIANT:
          return {
            ...state,
            error: null,
          };
    
        case CLEAR_SUCCESS_VARIANT:
          return {
            ...state,
            success: false,
          };
  
      default:
        return state;
    }
  };


  export const otaReducer = (state = {}, action) => {
    switch (action.type) {
      case OTA_REQUEST:
        return { ...state, loading: true };
  
      case OTA_SUCCESS:
        return { loading: false, success: true, OTAInfo: action.payload };
  
      case OTA_FAIL:
        return { loading: false, error: action.payload };

        case CLEAR_ERRORS_OTA:
          return {
            ...state,
            error: null,
          };
    
        case CLEAR_SUCCESS_OTA:
          return {
            ...state,
            success: false,
          };
  
      default:
        return state;
    }
  };
  



export const apModessidPassReducer = (state = {}, action) => {
    switch (action.type) {
      case  AP_MODE_SSID_PASS_REQUEST:
        return { ...state, loading: true };
  
      case  AP_MODE_SSID_PASS_SUCCESS:
        return { loading: false, success: true, apModeSSIDPassInfo: action.payload };
  
      case  AP_MODE_SSID_PASS_FAIL:
        return { loading: false, error: action.payload };


        case CLEAR_ERRORS_SSID_PASS :
          return {
            ...state,
            error: null,
          };
    
        case CLEAR_SUCCESS_SSID_PASS :
          return {
            ...state,
            success: false,
          };
  
  
      default:
        return state;
    }
  };
  
  


  //APPLY

  export const applyAdminSSIDReducer = (state = {}, action) => {
    switch (action.type) {
      case   GET_APMODE_APPLY_REQUEST:
        return {  loading: true };
  
      case GET_APMODE_APPLY_SUCCESS:
        return { loading: false, success: true, applyAdminSSIDInfo: action.payload };
  
      case GET_APMODE_APPLY_FAIL:
        return { loading: false, error: action.payload };

        case  CLEAR_ERRORS_APMODE_APPLY_STATUS:
          return {
            ...state,
            error: null,
          };
    
        case   CLEAR_SUCCESS_APMODE_APPLY_STATUS:
          return {
            ...state,
            success: false,
          };
  
  
      default:
        return state;
    }
  };


  
export const adminReducer = (state = {}, action) => {
  switch (action.type) {
    case AP_MODE_REQUEST:
      return { ...state, loading: true };

    case AP_MODE_SUCCESS:
      return { loading: false, success: true, adminInfo: action.payload };

    case AP_MODE_FAIL:
      return { loading: false, error: action.payload };

      case CLEAR_ERRORS_APMODE :
        return {
          ...state,
          error: null,
        };

        case CLEAR_SUCCESS_APMODE :
          return {
            ...state,
            success: false,
          };

    default:
      return state;
  }
};


export const adminWifiStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case  ADMIN_WIFI_REQUEST:
      return { ...state, loading: true };

    case ADMIN_WIFI_SUCCESS:
      return { loading: false, success: true, adminWifiInfo: action.payload };

    case ADMIN_WIFI_FAIL:
      return { loading: false, error: action.payload };

      case CLEAR_ERRORS_WIFI_STATUS:
        return {
          ...state,
          error: null,
        };
  
      case CLEAR_SUCCESS_WIFI_STATUS:
        return {
          ...state,
          success: false,
        };

    default:
      return state;
  }
};

export const adminSshStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case  ADMIN_SSH_REQUEST:
      return { ...state, loading: true };

    case ADMIN_SSH_SUCCESS:
      return { loading: false, success: true, adminSshInfo: action.payload };

    case ADMIN_SSH_FAIL:
      return { loading: false, error: action.payload };

      case CLEAR_ERRORS_SSH_STATUS:
        return {
          ...state,
          error: null,
        };
  
      case CLEAR_SUCCESS_SSH_STATUS:
        return {
          ...state,
          success: false,
        };

    default:
      return state;
  }
};


export const adminVncStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case  ADMIN_VNC_REQUEST:
      return { ...state, loading: true };

    case ADMIN_VNC_SUCCESS:
      return { loading: false, success: true, adminVncInfo: action.payload };

    case ADMIN_VNC_FAIL:
      return { loading: false, error: action.payload };

      case CLEAR_ERRORS_VNC_STATUS:
        return {
          ...state,
          error: null,
        };
  
      case CLEAR_SUCCESS_VNC_STATUS:
        return {
          ...state,
          success: false,
        };

    default:
      return state;
  }
};

export const getAdminInfoReducer = (state = {getAdminInfoData: {}}, action) => {
  switch (action.type) {
    case  GET_ADMIN_INFO_REQUEST:
      return { ...state, loading: true };

    case  GET_ADMIN_INFO_SUCCESS:
      return { loading: false, success: true, getAdminInfoData: action.payload };

    case  GET_ADMIN_INFO_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


//APPLY
export const applyWifiStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case  GET_WIFI_STATUS_APPLY_REQUEST:
      return {  loading: true };

    case GET_WIFI_STATUS_APPLY_SUCCESS:
      return { loading: false, success: true, applyWifiStatusInfo: action.payload };

    case GET_WIFI_STATUS_APPLY_FAIL:
      return { loading: false, error: action.payload };

      case  CLEAR_ERRORS_WIFI_APPLY_STATUS:
        return {
          ...state,
          error: null,
        };
  
      case      CLEAR_SUCCESS_WIFI_APPLY_STATUS:
        return {
          ...state,
          success: false,
        };


    default:
      return state;
  }
};


//APPLY
export const applyVariantStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case   GET_VARIANT_STATUS_APPLY_REQUEST:
      return {  loading: true };

    case   GET_VARIANT_STATUS_APPLY_SUCCESS:
      return { loading: false, success: true, applyVariantStatusInfo: action.payload };

    case   GET_VARIANT_STATUS_APPLY_FAIL:
      return { loading: false, error: action.payload };

      case    CLEAR_ERRORS_VARIANT_APPLY_STATUS:
        return {
          ...state,
          error: null,
        };
  
      case    CLEAR_SUCCESS_VARIANT_APPLY_STATUS:
        return {
          ...state,
          success: false,
        };


    default:
      return state;
  }
};


//APPLY
export const applySshStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case   GET_SSH_STATUS_APPLY_REQUEST:
      return {  loading: true };

    case   GET_SSH_STATUS_APPLY_SUCCESS:
      return { loading: false, success: true, applySshStatusInfo: action.payload };

    case   GET_SSH_STATUS_APPLY_FAIL:
      return { loading: false, error: action.payload };

      case    CLEAR_ERRORS_SSH_APPLY_STATUS:
        return {
          ...state,
          error: null,
        };
  
      case    CLEAR_SUCCESS_SSH_APPLY_STATUS:
        return {
          ...state,
          success: false,
        };


    default:
      return state;
  }
};


//APPLY
export const applyVncStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case   GET_VNC_STATUS_APPLY_REQUEST:
      return {  loading: true };

    case   GET_VNC_STATUS_APPLY_SUCCESS:
      return { loading: false, success: true, applyVncStatusInfo: action.payload };

    case   GET_VNC_STATUS_APPLY_FAIL:
      return { loading: false, error: action.payload };

      case    CLEAR_ERRORS_VNC_APPLY_STATUS:
        return {
          ...state,
          error: null,
        };
  
      case    CLEAR_SUCCESS_VNC_APPLY_STATUS:
        return {
          ...state,
          success: false,
        };


    default:
      return state;
  }
};





export const applyOTAReducer = (state = {}, action) => {
  switch (action.type) {
    case   GET_OTA_APPLY_REQUEST:
      return {  loading: true };

    case   GET_OTA_APPLY_SUCCESS:
      return { loading: false, success: true, applyOTAInfo: action.payload };

    case   GET_OTA_APPLY_FAIL:
      return { loading: false, error: action.payload };

      case    CLEAR_ERRORS_OTA_APPLY:
        return {
          ...state,
          error: null,
        };
  
      case  CLEAR_SUCCESS_OTA_APPLY:
        return {
          ...state,
          success: false,
        };


    default:
      return state;
  }
};

export const applyAdminSSIDPassReducer = (state = {}, action) => {
  switch (action.type) {
    case   GET_APMODEPASS_APPLY_REQUEST:
      return {  loading: true };

    case GET_APMODEPASS_APPLY_SUCCESS:
      return { loading: false, success: true, applyAdminSSIDPassInfo: action.payload };

    case GET_APMODEPASS_APPLY_FAIL:
      return { loading: false, error: action.payload };

      case  CLEAR_ERRORS_APMODEPASS_APPLY_STATUS:
        return {
          ...state,
          error: null,
        };
  
      case   CLEAR_SUCCESS_APMODEPASS_APPLY_STATUS:
        return {
          ...state,
          success: false,
        };

      

    default:
      return state;
  }
};


