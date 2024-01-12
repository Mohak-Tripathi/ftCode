/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  dashboardAction.js

Brief:  It contain all action creator related to DashBoard page.

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/

import {
  DASHBOARD_INFO_FAIL, 
  DASHBOARD_INFO_REQUEST, 
  DASHBOARD_INFO_SUCCESS
} from "../constants/dashboardConstants";

import {apiPrefix} from "../constants/apiPrefix"

import axios from "axios";


export const DashInfoAction = (navigate) => async (dispatch) => {
  try {
    dispatch({
      type: DASHBOARD_INFO_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const response = await axios.get(`${apiPrefix}/api/service/dashboard_info`, config, {
      withCredentials: true,
    });


    if(response.status===200){

      dispatch({ type: DASHBOARD_INFO_SUCCESS, payload: response.data});
    }

  } catch (error) {

    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      navigate("/")
    }
    else{
      dispatch({
        type: DASHBOARD_INFO_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
   
  }
};

