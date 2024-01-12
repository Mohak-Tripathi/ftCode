/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  adminActions.js

Brief:  It contain all action creator related to admin page.

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
  CLEAR_ERRORS_APMODE_APPLY_STATUS,
  CLEAR_SUCCESS_APMODE_APPLY_STATUS,
  CLEAR_ERRORS_APMODEPASS_APPLY_STATUS,
  CLEAR_SUCCESS_APMODEPASS_APPLY_STATUS,
  CLEAR_ERRORS_VARIANT_APPLY_STATUS,
  CLEAR_SUCCESS_VARIANT_APPLY_STATUS,
  CLEAR_ERRORS_WIFI_APPLY_STATUS,
  CLEAR_SUCCESS_WIFI_APPLY_STATUS,
  GET_SSH_STATUS_APPLY_REQUEST,
  GET_SSH_STATUS_APPLY_SUCCESS,
  GET_SSH_STATUS_APPLY_FAIL,
  CLEAR_ERRORS_SSH_APPLY_STATUS,
  CLEAR_SUCCESS_SSH_APPLY_STATUS,
  ADMIN_VNC_REQUEST,
  ADMIN_VNC_SUCCESS,
  ADMIN_VNC_FAIL,
  CLEAR_ERRORS_VNC_STATUS,
  CLEAR_SUCCESS_VNC_STATUS,
  GET_VNC_STATUS_APPLY_FAIL,
  GET_VNC_STATUS_APPLY_REQUEST,
  GET_VNC_STATUS_APPLY_SUCCESS,
  CLEAR_ERRORS_VNC_APPLY_STATUS,
  CLEAR_SUCCESS_VNC_APPLY_STATUS,
  OTA_REQUEST,
  OTA_SUCCESS,
  OTA_FAIL,
  CLEAR_ERRORS_OTA,
  CLEAR_SUCCESS_OTA,
  GET_OTA_APPLY_REQUEST,
  GET_OTA_APPLY_SUCCESS,
  GET_OTA_APPLY_FAIL,
  CLEAR_ERRORS_OTA_APPLY,
  CLEAR_SUCCESS_OTA_APPLY

} from "../constants/adminConstants";

import axios from "axios";
import { apiPrefix } from "../constants/apiPrefix";



export const variantAction = (variant, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: VARIANT_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };

    const response = await axios.post(
      `${apiPrefix}/api/config/variant`,
      { variantData: variant }, config,
      { withCredentials: true }
    );


    if (response.status === 200) {
      dispatch({ type: VARIANT_SUCCESS, payload: response.data });

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
        type: VARIANT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }

  }
};





export const otaUploadAction = (ota, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: OTA_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null);

    const formData = new FormData();
    formData.append("otaPixel", ota);

    const headers = new Headers({
      Authorization: `Bearer ${BearerCheck}`,
    });

    const options = {
      method: "POST",
      headers,
      body: formData,
      credentials: "include", // Equivalent to withCredentials: true in Axios
    };

    const response = await fetch(`${apiPrefix}/api/config/ota`, options);

    if (response.ok) {
      const data = await response.json();
      dispatch({ type: OTA_SUCCESS, payload: data });
    } else if (response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      alert.error("Session Timed Out. Please login Again");
      navigate("/");
    } else {
      const errorData = await response.json();
      dispatch({
        type: OTA_FAIL,
        payload: errorData.message || "Failed to upload OTA.",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    dispatch({
      type: OTA_FAIL,
      payload: error.message || "Failed to upload OTA.",
    });
  }
};


export const apModeSsidPassAction = (passwordObject, navigate, alert) => async (dispatch) => {
  dispatch({
    type: AP_MODE_SSID_PASS_REQUEST,
  });

  const { ap_mode_ssid_pas } = passwordObject;

  let BearerCheck = JSON.parse(localStorage.getItem("token") || null)


  var data = JSON.stringify({
    ap_mode_ssid_pas: ap_mode_ssid_pas,
  });

  var config = {
    method: "post",
    url: `${apiPrefix}/api/config/apmodessidpass`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BearerCheck}`,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {

      if (response.status === 200) {
        dispatch({ type: AP_MODE_SSID_PASS_SUCCESS, payload: response.data });
      }


    })
    .catch(function (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user")
        alert.error("Session Timed Out. Please login Again")
        navigate("/")
      }
      else {

        dispatch({
          type: AP_MODE_SSID_PASS_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }

    });
};

export const clearErrorsVariant = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_VARIANT,
  });
};



export const clearSuccessVariant = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_VARIANT,
  });
};


export const clearErrorsOTA = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_OTA,
  });
};



export const clearSuccessOTA = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_OTA,
  });
};





export const clearErrorsSSID = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_SSID_PASS,
  });
};

export const clearSuccessSSID = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_SSID_PASS,
  });
};



//Done
export const adminAction = (adminvalue, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: AP_MODE_REQUEST,
    });


    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };



    const response = await axios.post(
      `${apiPrefix}/api/config/apModeSsid`,
      adminvalue, config,
      { withCredentials: true }

    );


    if (response.status === 200) {
      dispatch({ type: AP_MODE_SUCCESS, payload: response.data });
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
        type: AP_MODE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }

  }
};

export const clearErrorsAPMODE = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_APMODE,
  });
};

export const clearSuccessAPMODE = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_APMODE,
  });
};







export const wifiStatusAction = (status, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_WIFI_REQUEST
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const response = await axios.post(
      `${apiPrefix}/api/config/wifi_status`,
      { wifiStatusData: status }, config,
      { withCredentials: true },

    );
    if (response.status === 200) {
      dispatch({ type: ADMIN_WIFI_SUCCESS, payload: response.data });
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
        type: ADMIN_WIFI_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }

  }
};

export const sshStatusAction = (status, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_SSH_REQUEST
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const response = await axios.post(
      `${apiPrefix}/api/config/ssh_status`,
      { sshStatusData: status }, config,
      { withCredentials: true },

    );

    if (response.status === 200) {
      dispatch({ type: ADMIN_SSH_SUCCESS, payload: response.data });
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
        type: ADMIN_SSH_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }

  }
};

export const vncStatusAction = (status, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_VNC_REQUEST
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const response = await axios.post(
      `${apiPrefix}/api/config/vnc_status`,
      { vncStatusData: status }, config,
      { withCredentials: true },

    );

    if (response.status === 200) {
      dispatch({ type: ADMIN_VNC_SUCCESS, payload: response.data });
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
        type: ADMIN_VNC_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }

  }
};


export const clearErrorsWifiStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_WIFI_STATUS,
  });
};

export const clearSuccessWifiStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_WIFI_STATUS,
  });
};

export const clearErrorsSshStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_SSH_STATUS,
  });
};

export const clearSuccessSshStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_SSH_STATUS,
  });
};

export const clearErrorsVncStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_VNC_STATUS,
  });
};

export const clearSuccessVncStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_VNC_STATUS,
  });
};


export const getAdminInfoAction = (navigate) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ADMIN_INFO_REQUEST,
    });
    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const response = await axios.get(`${apiPrefix}/api/config/admin_info`, config, {
      withCredentials: true,
    });

    if (response.status === 200) {
      dispatch({ type: GET_ADMIN_INFO_SUCCESS, payload: response.data });
    }


  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      navigate("/")
    }
    else {

      dispatch({
        type: GET_ADMIN_INFO_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }

  }
};



export const applyApModeSsid = (navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: GET_APMODE_APPLY_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`,
      },
    };

    const response = await axios.get(`${apiPrefix}/api/config/apmode_ssid_apply`, config, {
      withCredentials: true,
    });

    if (response.status === 200) {

      dispatch({ type: GET_APMODE_APPLY_SUCCESS, payload: response.data });
    }




  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      alert.error("Session Timed Out. Please login Again");
      navigate("/")
    }
    else {

      dispatch({
        type: GET_APMODE_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }

  }
};

export const clearErrorsApModeApplyStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_APMODE_APPLY_STATUS,
  });
};

export const clearSuccessApModeApplyStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_APMODE_APPLY_STATUS,
  });
};



export const applyApModeSsidPass = (navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: GET_APMODEPASS_APPLY_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`
      },
    };

    const response = await axios.get(`${apiPrefix}/api/config/apmode_ssid_pass_apply`, config, {
      withCredentials: true,
    });

    if (response.status === 200) {
      dispatch({ type: GET_APMODEPASS_APPLY_SUCCESS, payload: response.data });
    }




  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      alert.error("Session Timed Out. Please login Again");
      navigate("/")
    }
    else {

      dispatch({
        type: GET_APMODEPASS_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }


  }
};


export const clearErrorsApModePassApplyStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_APMODEPASS_APPLY_STATUS,
  });
};

export const clearSuccessApModePassApplyStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_APMODEPASS_APPLY_STATUS,
  });
};



export const applyWifiStatusCheck = (navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: GET_WIFI_STATUS_APPLY_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`,
      },
    };

    const response = await axios.get(`${apiPrefix}/api/config/wifi_status_apply`, config, {
      withCredentials: true,
    });

    if (response.status === 200) {
      dispatch({ type: GET_WIFI_STATUS_APPLY_SUCCESS, payload: response.data });
    }



  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      alert.error("Session Timed Out. Please login Again");
      navigate("/")
    }
    else {

      dispatch({
        type: GET_WIFI_STATUS_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }


  }
};


export const applySshStatusCheck = (navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SSH_STATUS_APPLY_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`,
      },
    };

    const response = await axios.get(`${apiPrefix}/api/config/ssh_status_apply`, config, {
      withCredentials: true,
    });

    if (response.status === 200) {
      dispatch({ type: GET_SSH_STATUS_APPLY_SUCCESS, payload: response.data });
    }



  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      alert.error("Session Timed Out. Please login Again");
      navigate("/")
    }
    else {

      dispatch({
        type: GET_SSH_STATUS_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }


  }
};



export const applyVncStatusCheck = (navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: GET_VNC_STATUS_APPLY_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`,
      },
    };

    const response = await axios.get(`${apiPrefix}/api/config/vnc_status_apply`, config, {
      withCredentials: true,
    });

    if (response.status === 200) {
      dispatch({ type: GET_VNC_STATUS_APPLY_SUCCESS, payload: response.data });
    }



  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      alert.error("Session Timed Out. Please login Again");
      navigate("/")
    }
    else {

      dispatch({
        type: GET_VNC_STATUS_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }

  }
};

export const clearErrorsWifiStatusApplyStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_WIFI_APPLY_STATUS,
  });
};

export const clearSuccessWifiStatusApplyStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_WIFI_APPLY_STATUS,
  });
};

export const clearErrorsSshStatusApplyStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_SSH_APPLY_STATUS,
  });
};

export const clearSuccessSshStatusApplyStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_SSH_APPLY_STATUS,
  });
};


export const clearErrorsVNCApplyStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_VNC_APPLY_STATUS,
  });
};

export const clearSuccessVNCApplyStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_VNC_APPLY_STATUS,
  });
};



export const applyVariantStatusCheck = (navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: GET_VARIANT_STATUS_APPLY_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`
      },
    };


    const response = await axios.get(`${apiPrefix}/api/config/variant_apply`, config, {
      withCredentials: true,
    });

    if (response.status === 200) {

      dispatch({ type: GET_VARIANT_STATUS_APPLY_SUCCESS, payload: response.data });
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
        type: GET_VARIANT_STATUS_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }


  }
};





export const clearErrorsVariantApplyStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_VARIANT_APPLY_STATUS,
  });
};

export const clearSuccessVariantApplyStatus = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_VARIANT_APPLY_STATUS,
  });
};




export const applyOTAData = (navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: GET_OTA_APPLY_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`
      },
    };

    const response = await axios.get(`${apiPrefix}/api/config/ota`, config, {
      withCredentials: true,
    });

    if (response.status === 200) {

      dispatch({ type: GET_OTA_APPLY_SUCCESS, payload: response.data });
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
        type: GET_OTA_APPLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }


  }
};


export const clearErrorsOTAapply = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_OTA_APPLY,
  });
};

export const clearSuccessOTAapply = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_OTA_APPLY,
  });
};

