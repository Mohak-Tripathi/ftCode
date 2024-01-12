/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  userActions.js 

Brief:  It contain all action creator related to user page.

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/

import {
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_FAIL,
} from "../constants/userConstants";
import axios from "axios";
import CryptoJS from "crypto-js";
import { apiPrefix } from "../constants/apiPrefix";



export const login = (name, password) => async (dispatch) => {

  dispatch({
    type: USER_LOGIN_REQUEST,
  });

  const hashedPwd = CryptoJS.MD5(name + password).toString();
// alert(hashedPwd)

  var data = {
    username: name,
    password: hashedPwd,
  };

console.log(apiPrefix,   "apiLol", `${apiPrefix}/login` )
  var config = {
    method: "post",
    url: `${apiPrefix}/login`,
    headers: {

      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
    },
    data: data
  };

  axios.defaults.withCredentials = true;

  axios(config)
    .then(function (response) {

      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user.role));
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: USER_LOGIN_FAIL, payload: error });
    });


};

// Load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`
      },
    };

    const response = await axios.get(`${apiPrefix}/me`, config, {
      withCredentials: true,
    }); //give details of current logged in user.


      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: response.data,
      });
 


  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
    }
    else{
      dispatch({
        type: LOAD_USER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }

  }
};

export const logout = (navigate) => async (dispatch) => {
  try {


    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`,
      },
    };

   const response=  await axios.get(`${apiPrefix}/api/config/logout`, config, {
      // await axios.get("/api/config/logout", {
      withCredentials: true,
      keepalive: true,
    });


    localStorage.removeItem("token");
    localStorage.removeItem("user")

    if(response.status===200){
      dispatch({
        type: USER_LOGOUT,
      });
    }
 
  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
  
      navigate("/")
    }
    else{
      dispatch({
        type: USER_LOGOUT_FAIL,
        payload: error.response.data.message,
      });
    }
   
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
