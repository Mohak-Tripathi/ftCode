/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  networkAction.js

Brief:  It contain all action creator related to network page.

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/

import { apiPrefix } from "../constants/apiPrefix";
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

  CLEAR_ERRORS_NTP,
  CLEAR_SUCCESS_NTP,
  WIFICRED_APPLY_REQUEST,
  WIFICRED_APPLY_SUCCESS,
  WIFICRED_APPLY_FAIL,
  CLEAR_ERRORS_CRED_WIFI_APPLY,
  CLEAR_SUCCESS_CRED_WIFI_APPLY,
  STATICIP_APPLY_REQUEST,
  STATICIP_APPLY_SUCCESS,
  STATICIP_APPLY_FAIL,
  CLEAR_ERRORS_STATICIP_APPLY,
  CLEAR_SUCCESS_STATICIP_APPLY,
  NTP_APPLY_SUCCESS,
  NTP_APPLY_FAIL,
  NTP_APPLY_REQUEST,
  CLEAR_ERRORS_NTP_APPLY,
  CLEAR_SUCCESS_NTP_APPLY,
} from "../constants/networkConstants";

import axios from "axios";


export const wifiCredNetworkAction = (wificredvalue, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: WIFICRED_NETWORK_REQUEST
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


 
    const response = await axios.post(
      `${apiPrefix}/api/wifi/cred`,   
      wificredvalue,     config, 
      { withCredentials: true }
    );


    if(response.status===200){
      dispatch({ type: WIFICRED_NETWORK_SUCCESS, payload: response.data });
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
        type: WIFICRED_NETWORK_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  
  }
};



export const wifiNetworkAction = (wifivalue, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: WIFI_NETWORK_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const response = await axios.post(
      `${apiPrefix}/api/wifi/staticipwifi`,
      wifivalue,     config, 
      { withCredentials: true },
  
    );

    if(response.status===200){
      dispatch({ type: WIFI_NETWORK_SUCCESS, payload: response.data });
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
        type: WIFI_NETWORK_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
   
  }
};






export const ntpNetworkAction = (ntpvalue, navigate, alert) => async (dispatch) => {
  dispatch({
    type: NTP_NETWORK_REQUEST,
  });



  let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  


  var config = {
    method: "post",
    url: `${apiPrefix}/api/config/ntp_server`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BearerCheck}`,
    },
    data: ntpvalue,
  };

  axios.defaults.withCredentials = true;

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      dispatch({ type: NTP_NETWORK_SUCCESS, payload: response.data });
    })
    .catch(function (error) {
      if(error.response.status=== 401){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        alert.error("Session Timed Out. Please login Again");
        navigate("/")
      }
      else{
        dispatch({
          type: NTP_NETWORK_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }

    });


};


export const getNetworkInfoAction = (navigate) => async (dispatch) => {
  try {
    dispatch({
      type: GET_NETWORK_INFO_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`
      },
    };

    const response = await axios.get(`${apiPrefix}/api/wifi/nwk`, config, {
      withCredentials: true,
    });

    if(response.status===200){

      dispatch({ type: GET_NETWORK_INFO_SUCCESS, payload: response.data });
    }


  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      
      navigate("/")
    }
    else{
      dispatch({
        type: GET_NETWORK_INFO_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  
  }
};

export const clearErrorsCred = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_CRED,
  });
};

export const clearSuccessCred = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_CRED,
  });
};

export const clearErrorsStaticIpWifi = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_CRED_WIFI_NET,
  });
};

export const clearSuccessStaticIpWifi = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_CRED_WIFI_NET,
  });
};



export const clearErrorsNTP = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_NTP,
  });
};

export const clearSuccessNTP = () => async (dispatch) => {


  dispatch({
    type: CLEAR_SUCCESS_NTP,
  });
};



export const applyWifiCredAction = (navigate, alert) => async (dispatch, getState) => {
  try {
    dispatch({
      type:  WIFICRED_APPLY_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`
      },
    };

    const response = await axios.get(`${apiPrefix}/api/wifi/cred_apply`, config,  {
      withCredentials: true,
    });

    if(response.status===200){

      dispatch({ type:  WIFICRED_APPLY_SUCCESS, payload: response.data });
    }

    

  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      alert.error("Session Timed Out. Please login Again");
      navigate("/")
    }
    else{
      dispatch({
        type:  WIFICRED_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  
  }
};

export const clearErrorsWifiCredApply = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_CRED_WIFI_APPLY,
  });
};

export const clearSuccessWifiCredApply= () => async (dispatch) => {

  dispatch({
    type: CLEAR_SUCCESS_CRED_WIFI_APPLY,
  });
};



export const applyStaticIpAction = (navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type:  STATICIP_APPLY_REQUEST
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const response = await axios.get(`${apiPrefix}/api/wifi/staticipwifi_apply`, config, {
      withCredentials: true,
    });

    
    if(response.status===200){

    
      dispatch({ type:  STATICIP_APPLY_SUCCESS, payload: response.data });
    }


  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      alert.error("Session Timed Out. Please login Again");
      navigate("/")
    }
    else{
      dispatch({
        type:  STATICIP_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  
  }
};

export const clearErrorsStaticIpApply = () => async (dispatch) => {
  dispatch({
    type:   CLEAR_ERRORS_STATICIP_APPLY,
  });
};

export const clearSuccessStaticIpApply= () => async (dispatch) => {

  dispatch({
    type:   CLEAR_SUCCESS_STATICIP_APPLY,
  });
};


export const applyNtpAction = (navigate, alert) => async (dispatch, getState) => {
  try {
    dispatch({
      type:  NTP_APPLY_REQUEST
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const response = await axios.get(`${apiPrefix}/api/config/ntp_server_apply`, config,  {
      withCredentials: true,
    });

    if(response.status===200){

    
      dispatch({ type:  NTP_APPLY_SUCCESS, payload: response.data });
    }

 

  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      alert.error("Session Timed Out. Please login Again");
      navigate("/")
    }
    else{
      dispatch({
        type:  NTP_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  
  }
};

export const clearErrorsNtpApply = () => async (dispatch) => {
  dispatch({
    type:   CLEAR_ERRORS_NTP_APPLY,
  });
};

export const clearSuccessNtpApply= () => async (dispatch) => {

  dispatch({
    type:   CLEAR_SUCCESS_NTP_APPLY,
  });
};

