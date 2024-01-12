

 import { apiPrefix } from "../constants/apiPrefix";
import {
  SERVICE_CONFIG_REQUEST,
  SERVICE_CONFIG_SUCCESS,
  SERVICE_CONFIG_FAIL,
  SERVICE_OCCUPANCY_REQUEST,
  SERVICE_OCCUPANCY_SUCCESS,
  SERVICE_OCCUPANCY_FAIL,
  SERVICE_PEOPLECOUNT_REQUEST,
  SERVICE_PEOPLECOUNT_SUCCESS,
  SERVICE_PEOPLECOUNT_FAIL,
  SERVICE_ANALYZER_REQUEST,
  SERVICE_ANALYZER_SUCCESS,
  SERVICE_ANALYZER_FAIL,
  REBOOT_VARIANT_REQUEST,
  REBOOT_VARIANT_SUCCESS,
  REBOOT_VARIANT_FAIL,
  SERVICE_PEOPLECOUNT_SERVICE_ONBOOT_REQUEST,
  SERVICE_PEOPLECOUNT_SERVICE_ONBOOT_SUCCESS,
  SERVICE_PEOPLECOUNT_SERVICE_ONBOOT_FAIL,
  GET_SERVICE_STATUS_REQUEST,
  GET_SERVICE_STATUS_SUCCESS,
  GET_SERVICE_STATUS_FAIL,
  CLEAR_ERRORS_CONFIG,
  CLEAR_SUCCESS_CONFIG,
  CLEAR_ERRORS_OCCUPANCY,
  CLEAR_SUCCESS_OCCUPANCY,
  CLEAR_ERRORS_PEOPLECOUNT,
  CLEAR_SUCCESS_PEOPLECOUNT,
  CLEAR_ERRORS_PEOPLEBOOT,
  CLEAR_SUCCESS_PEOPLEBOOT,
  CLEAR_ERRORS_ANALYZER,
  CLEAR_SUCCESS_ANALYZER,
  SERVICE_OCCUPANCYCOUNT_FAIL,
  SERVICE_OCCUPANCYCOUNT_SUCCESS,
  SERVICE_OCCUPANCYCOUNT_REQUEST,
  CLEAR_ERRORS_OCCUPANCYCOUNT,
  CLEAR_SUCCESS_OCCUPANCYCOUNT,
} from "../constants/serviceConstants";
import axios from "axios";

export const setServiceStatusAction = (navigate) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SERVICE_STATUS_REQUEST,
    });

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

    const config = {
      headers: {
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const response = await axios.get(`${apiPrefix}/api/service/status`, config, {
      withCredentials: true,
    });

    if(response.status===200){
      dispatch({ type: GET_SERVICE_STATUS_SUCCESS, payload: response.data });
    }


  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      navigate("/")
    }
    else{
      dispatch({
        type: GET_SERVICE_STATUS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
   
  
  }
};

export const serviceConfigAction = (value, navigate, alert) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SERVICE_CONFIG_REQUEST,
    });

    var data1 = {
      status: value,
    };

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };


    const response = await axios.post(
      `${apiPrefix}/api/service/config_service`,
      data1,       config,
      { withCredentials: true }

    );
    if(response.status===200){
      dispatch({ type: SERVICE_CONFIG_SUCCESS, payload: response.data });
    }



  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      alert.error("Session Timed Out. Please login Again")
      navigate("/")
    }
    else{
      dispatch({
        type: SERVICE_CONFIG_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  
  }
};

export const serviceOccupancyAction = (value, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: SERVICE_OCCUPANCY_REQUEST,
    });

    var data1 = {
      status: value,
    };

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };



    const response = await axios.post(
      `${apiPrefix}/api/service/occupancy_service`,
      data1,       config, 
      { withCredentials: true }

    );
    if(response.status===200){
      dispatch({ type: SERVICE_OCCUPANCY_SUCCESS, payload: response.data });
    }

  
  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      alert.error("Session Timed Out. Please login Again")
      navigate("/")
    }
    else{
      dispatch({
        type: SERVICE_OCCUPANCY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
   
  }
};


export const serviceOccupancyCountingAction = (value, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: SERVICE_OCCUPANCYCOUNT_REQUEST,
    });

    var data1 = {
      status: value,
    };

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };

    const response = await axios.post(
      `${apiPrefix}/api/service/occupancy_count_service`,
      data1,       config, 
      { withCredentials: true }
    );

    if(response.status===200){
      dispatch({ type: SERVICE_OCCUPANCYCOUNT_SUCCESS, payload: response.data });
    }

  
  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      alert.error("Session Timed Out. Please login Again")
      navigate("/")
    }
    else{
      dispatch({
        type: SERVICE_OCCUPANCYCOUNT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
   
  }
};



export const servicePeopleCountAction =
  (value, navigate, alert) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SERVICE_PEOPLECOUNT_REQUEST,
      });

      var data1 = {
        status: value,
      };
          
    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };



      const response = await axios.post(
        `${apiPrefix}/api/service/people_count_service`,
        data1,       config, 
        { withCredentials: true }
  
      );

      if(response.status===200){
        dispatch({ type: SERVICE_PEOPLECOUNT_SUCCESS, payload: response.data });
      }
  
 
    } catch (error) {
      if(error.response.status=== 401){
        localStorage.removeItem("token");
        localStorage.removeItem("user")
        alert.error("Session Timed Out. Please login Again")
        navigate("/")
      }
      else{
        dispatch({
          type: SERVICE_PEOPLECOUNT_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    
    }
  };

export const servicePeopleCountOnBootAction = (value, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: SERVICE_PEOPLECOUNT_SERVICE_ONBOOT_REQUEST,
    });

    var data1 = {
      status: value,
    };

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };



    const response = await axios.post(
      `${apiPrefix}/api/service/people_count_service_on_boot`,
      data1,      config, 
      { withCredentials: true }
 
    );

    if(response.status===200){
      dispatch({
        type: SERVICE_PEOPLECOUNT_SERVICE_ONBOOT_SUCCESS,
        payload: response.data,
      });
    }



  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      alert.error("Session Timed Out. Please login Again")
      navigate("/")
    }
    else{
      dispatch({
        type: SERVICE_PEOPLECOUNT_SERVICE_ONBOOT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  

  }
};

export const serviceAnalyzerAction = (value, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: SERVICE_ANALYZER_REQUEST,
    });

    let data1 = {
      status: value,
    };

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };



    const response = await axios.post(
      `${apiPrefix}/api/service/analyzer_service`,
      data1,       config, 
      { withCredentials: true }

    ); 

    if(response.status===200){
      dispatch({ type: SERVICE_ANALYZER_SUCCESS, payload: response.data });
    }

   
  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      alert.error("Session Timed Out. Please login Again")
      navigate("/")
    }
    else{
      dispatch({
        type: SERVICE_ANALYZER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  
  
  }
};

export const rebootVariant = (value, navigate, alert) => async (dispatch) => {
  try {
    dispatch({
      type: REBOOT_VARIANT_REQUEST
    });

    const data1 = {
      command: "sudo reboot",
    };

    let BearerCheck = JSON.parse(localStorage.getItem("token") || null)

  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BearerCheck}`,
      },
    };

   
    localStorage.removeItem("token");
    localStorage.removeItem("user");

 
  
    navigate("/")
  const response = await axios.post(`${apiPrefix}/api/service/power_off`, data1, config,       { withCredentials: true });

  dispatch({ type: REBOOT_VARIANT_SUCCESS, payload: response.data });


  } catch (error) {
    if(error.response.status=== 401){
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      alert.error("Session Timed Out. Please login Again")
      navigate("/")
    }
    else{
      dispatch({
        type: REBOOT_VARIANT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
 
  }
};

// Clear Errors
export const clearErrorsConfig = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_CONFIG,
  });
};

// Clear Success
export const clearSuccessConfig = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_CONFIG,
  });
};

// Clear Errors
export const clearErrorsOccupancy = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_OCCUPANCY,
  });
};

// Clear Success
export const clearSuccessOccupancy = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_OCCUPANCY,
  });
};

export const clearErrorsPeopleCount = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_PEOPLECOUNT,
  });
};

export const clearSuccessPeopleCount = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_PEOPLECOUNT,
  });
};

export const clearErrorsPeopleCountOnBoot = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_PEOPLEBOOT,
  });
};

export const clearSuccessPeopleCountOnBoot = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_PEOPLEBOOT,
  });
};

// Clear Errors
export const clearErrorsAnalyzer = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_ANALYZER,
  });
};

// Clear Success
export const clearSuccessAnalyzer = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_ANALYZER,
  });
};

// Clear Errors
export const clearErrorsOccupancyCount = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS_OCCUPANCYCOUNT,
  });
};

// Clear Success
export const clearSuccessOccupancyCount = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS_OCCUPANCYCOUNT,
  });
};


