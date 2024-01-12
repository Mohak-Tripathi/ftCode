
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  dashboardReducer.js

Brief:  It contains reducers related to dashboard page. 

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 17, 2023

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/


 import { 
    SYSTEM_INFO_FAIL, 
    SYSTEM_INFO_REQUEST, 
    SYSTEM_INFO_SUCCESS,
  
    } from "../constants/systeminfoConstants"
  
  
export const systemInfoDataReducer = (state = {}, action) => {
    switch (action.type) {
      case  SYSTEM_INFO_REQUEST:
        return { ...state, loading: true };
  
      case  SYSTEM_INFO_SUCCESS:
        return { loading: false, success: true, systemInfo: action.payload };
  
      case  SYSTEM_INFO_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  