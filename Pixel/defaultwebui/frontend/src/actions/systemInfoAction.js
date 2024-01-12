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
    SYSTEM_INFO_FAIL,
    SYSTEM_INFO_REQUEST,
    SYSTEM_INFO_SUCCESS
} from "../constants/systeminfoConstants";

import { apiPrefix } from "../constants/apiPrefix"

import axios from "axios";

export const SystemInfoAction = (systemInfo, navigate, alert) => async (dispatch) => {
    try {
        dispatch({
            type: SYSTEM_INFO_REQUEST,
        });

        let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${BearerCheck}`,
            },
        };



        const response = await axios.post(`${apiPrefix}/api/config/system_info`, { systemInfoData: systemInfo }, config, {
            withCredentials: true,
        });


        if (response.status === 200) {

            dispatch({ type: SYSTEM_INFO_SUCCESS, payload: response.data });
        }

    } catch (error) {

        if (error.response.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user")
            alert.error("Session Timed Out. Please login Again")
            navigate("/")
          
        }
        else {
            dispatch({
                type: SYSTEM_INFO_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }

    }
};
