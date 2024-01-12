
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  dashboardReducer.js

Brief:  It contains reducers related to dashboard page. 

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/


import { 

  DASHBOARD_INFO_FAIL, 
  DASHBOARD_INFO_REQUEST, 
  DASHBOARD_INFO_SUCCESS,

  } from "../constants/dashboardConstants"


  export const DashboardInfoDataReducer = (state = {DashboardInfor: ""}, action) => {
  switch (action.type) {
    case  DASHBOARD_INFO_REQUEST:
      return { ...state, loading: true };

    case  DASHBOARD_INFO_SUCCESS:
      return { loading: false, success: true, DashboardInfor: action.payload };

    case  DASHBOARD_INFO_FAIL:
      return { loading: false, error: action.payload };


    default:
      return state;
  }
};


