
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  NetworkScreen.jsc

Brief:  It contains ui of network page.

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/


import React, { useLayoutEffect } from "react";
import {Helmet} from "react-helmet";
import { Grid, Paper, TextField, Button, Box, Typography } from "@mui/material";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ntpNetworkAction,
  wifiCredNetworkAction,
  wifiNetworkAction,
  getNetworkInfoAction,
  clearErrorsCred,
  clearSuccessCred,
  clearErrorsStaticIpWifi,
  clearSuccessStaticIpWifi,
  clearErrorsNTP,
  clearSuccessNTP,
  applyWifiCredAction,
  applyStaticIpAction,
  applyNtpAction,
  clearErrorsWifiCredApply,
  clearSuccessWifiCredApply,
  clearErrorsStaticIpApply,
  clearSuccessStaticIpApply,
  clearErrorsNtpApply,
  clearSuccessNtpApply

} from "../actions/networkAction"

import Loader from "../components/Loader"
import { useEffect } from "react";
import { useAlert } from 'react-alert';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const NetworkScreen = () => {


  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));



  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();


  const userLogin = useSelector((state) => {
    return state.userLogin;
  });

  const { userInfo } = userLogin;



  useLayoutEffect(() => {
    let userData = JSON.parse(localStorage.getItem("user") || null)
    if (!userData) {
      navigate("/")
    }

    dispatch(getNetworkInfoAction(navigate))



  }, [dispatch, navigate, userInfo])



  const getNetworkInfo = useSelector((state) => {
    return state.getNetworkInfo
  })

  const { loading: getNetworkInfoLoader, getAllNetworkInfo } = getNetworkInfo;



  let initialValuesOne;

  if (getAllNetworkInfo) {
    initialValuesOne = {
      SSID: getAllNetworkInfo.wifi_cred_ssid,
      password: getAllNetworkInfo.wifi_cred_pass
    }
  } else {

    initialValuesOne = {
      SSID: ".",
      password: "."
    }

  }


  const validationSchemaOne = Yup.object().shape({
    SSID: Yup.string()
  });


  const onSubmitOne = (values) => {
    dispatch(wifiCredNetworkAction(values, navigate, alert))

  };


  let initialValuesTwo;

  if (getAllNetworkInfo) {

    initialValuesTwo = {
      static_ip: getAllNetworkInfo.static_ip,
      gateway_ip: getAllNetworkInfo.static_ip_gateway,
      netmask: getAllNetworkInfo.netmask,
    };
  } else {

    initialValuesTwo = {
      static_ip: ".",
      gateway_ip: ".",
      netmask:"."
    };

  }



  const validationSchemaTwo = Yup.object().shape({
    static_ip: Yup.string(),
    gateway_ip: Yup.string(),
  
  });

  const onSubmitTwo = (values, props) => {
    dispatch(wifiNetworkAction(values, navigate, alert))
  };


  const initialValuesFour = {
    ntp_server: getAllNetworkInfo ? getAllNetworkInfo.ntp_server : "."
  };

  const validationSchemaFour = Yup.object().shape({
    ntp_server: Yup.string(),
  });

  const onSubmitFour = (value) => {
    dispatch(ntpNetworkAction(value, navigate, alert))
  };






  const wifiCredNetwork = useSelector((state) => {
    return state.wifiCredNetwork;
  });


  const { error: errorWifiCred, success: successWifiCred } = wifiCredNetwork;

  const wifiNetwork = useSelector((state) => {
    return state.wifiNetwork;
  });


  const { error: errorWifiStaticIpWifi, success: successWifiStaticIpWifi } = wifiNetwork;




  const ntpNetwork = useSelector((state) => {
    return state.ntpNetwork;
  });


  const { error: errorNtp, success: successNtp } = ntpNetwork;


  const  applyWifiCred = useSelector((state) => {
    return state.applyWifiCred;
  });


  const { error: errorApplyWifiCred, success: successApplyWifiCred } =   applyWifiCred;

  const  applyStaticIp = useSelector((state) => {
    return state.applyStaticIp;
  });


  const { error: errorApplyStaticIp, success: successApplyStaticIp } =   applyStaticIp;
  
  const  applyNtp = useSelector((state) => {
    return state.applyNtp;
  });


  const { error: errorApplyNtp, success: successApplyNtp } =   applyNtp;


  useEffect(() => {

    if (errorWifiCred) {
      alert.error("WIFI credentials failed to save")
      dispatch(clearErrorsCred())
    }
    if (successWifiCred) {
      alert.success("WIFI credentials saved")
      dispatch(clearSuccessCred())

    }
    if (errorWifiStaticIpWifi) {
      alert.error("Static IP  configuration has failed")
      dispatch(clearErrorsStaticIpWifi())
    }
    if (successWifiStaticIpWifi) {
      alert.success("Static IP configuration has saved succeessful")
      dispatch(clearSuccessStaticIpWifi())

    }




    if (errorNtp) {
      alert.error("NTP configuration failed")
      dispatch(clearErrorsNTP())
    }

    if (successNtp) {
      alert.success("NTP configuration successful")
      dispatch(clearSuccessNTP())
    }
    
    if (errorApplyWifiCred) {
      alert.error("WIFI credentials failed to set")
      dispatch( clearErrorsWifiCredApply())
    }

    if (successApplyWifiCred) {
      alert.success("WIFI credentials has set")
      dispatch( clearSuccessWifiCredApply())
    }

    if (errorApplyStaticIp) {
      alert.error("Static Ip credentials has failed to set")
      dispatch( clearErrorsStaticIpApply())
    }

    if (successApplyStaticIp) {
      alert.success("Static Ip credentials has set")
      dispatch( clearSuccessStaticIpApply())
    }

    if (errorApplyNtp) {
      alert.error("NTP configurartion failed to set")
      dispatch( clearErrorsNtpApply())
    }

    if (successApplyNtp) {
      alert.success("NTP configurartion has set")
      dispatch( clearSuccessNtpApply())
    }
    

  }, [dispatch, errorNtp, successNtp, alert, errorWifiCred, successWifiCred, errorWifiStaticIpWifi, successWifiStaticIpWifi, errorApplyWifiCred, successApplyWifiCred, errorApplyStaticIp, successApplyStaticIp, errorApplyNtp, successApplyNtp ])

  const handleChangeCredApply = () =>{
 
    dispatch(applyWifiCredAction(navigate, alert))
  }

  const handleChangeStaticIpApply = () =>{
 
    dispatch(  applyStaticIpAction(navigate, alert))
  }


  const handleChangeNtpApply = () =>{
 
    dispatch(  applyNtpAction(navigate, alert))
  }



  return (

    <>
      <Helmet>
          <title>Pixel Sensor: Network</title>
          <meta name="description" content="Network connection parameters(Wi-Fi STA mode, Ethernet, AP Mode, NTP Sync ), should be configured by the commissioning team once the product is deployed." />
      </Helmet>
      
      {getNetworkInfoLoader ? <Loader /> : (

        <Grid>
          <Paper
            style={{ maxWidth: 950, padding: "30px 33px", margin: "25px auto" }}
            elevation={20}
          >

            <Box>
              <Typography
                className='sectionHeading'

                component='p'
                gutterBottom
              >
                Network connection parameters(Wi-Fi STA mode, Ethernet, AP Mode, NTP Sync ), should be configured by the commissioning team once the product is deployed.
              </Typography>

              <Formik
                initialValues={initialValuesOne}
                validationSchema={validationSchemaOne}
                onSubmit={onSubmitOne}
                enableReinitialize
              >
                {(props) => (
                  <Form noValidate>
                    <Grid container spacing={2}>
                      {/* ------- */}

                      <Grid xs={12} item>
                        <Typography
                          variant='body2'
                          color='grey'
                          component='p'
                          gutterBottom
                        >
                          Configure the WIFI credentials of your wifi router
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              SSID
                            </Typography>
                      

                            <Field
                              as={TextField}
                              placeholder='Enter SSID'
                              name='SSID'
                              variant='standard'
                              fullWidth
                              onChange={props.handleChange}
                              values={props.initialValues.SSID}
                              error={props.errors.SSID && props.touched.SSID}
                              helperText={<ErrorMessage name='SSID' />}
                            />
                             
                          </Grid>

                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Password
                            </Typography>
          
                            <Field
                              as={TextField}
                              placeholder='Enter Password'
                              name='password'
                  
                              variant='standard'
                              fullWidth
                  
                              helperText={<ErrorMessage name='password' />}
                            />

                          </Grid>
                        </Grid>
                      </Grid>


                               
                               <Grid xs={12} item>
                        <Box textAlign='right' >
                          <Button
                            variant='outlined'
                            type='submit'
                            sx={{ mt: 0.5, mb: 0.5, minWidth: "75px" }}
                            size='small'
                          >
                        
                            Save
                          </Button>
          
                          <Button
                          onClick={()=> handleChangeCredApply()}
                            variant='outlined'
                            type='button'
                            sx={{ mt: 0.5, mb: 0.5, minWidth: "75px" }}
                            size='small'
                          >
                        
                            Apply
                          </Button>


                        
                        </Box>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>

              {/* ---------------------------------------        */}

              <Formik
                initialValues={initialValuesTwo}
                validationSchema={validationSchemaTwo}
                onSubmit={onSubmitTwo}
                enableReinitialize
              >
                {(props) => (
                  <Form>
                    <Grid container spacing={2}>
                      {/* ------- */}

                      <Grid xs={12} item>
                        <Typography
                          variant='body2'
                          color='grey'
                          component='p'
                          gutterBottom
                        >
                          Configure the Static IP  (CIDR Format)
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Static IP
                            </Typography>
                         
                            <Field
                              as={TextField}
                              placeholder='Enter static_ip'
                              name='static_ip'
                              variant='standard'
                              fullWidth
                       
                              error={
                                props.errors.static_ip && props.touched.static_ip
                              }
                              helperText={<ErrorMessage name='static_ip' />}
                            />
         
                          </Grid>

                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Gateway IP
                            </Typography>
                          
                            <Field
                              as={TextField}
                              placeholder='Enter Gateway IP'
                              name='gateway_ip'
                        
                              variant='standard'
                              fullWidth
                           
                              error={
                                props.errors.gateway_ip &&
                                props.touched.gateway_ip
                              }
                              helperText={<ErrorMessage name='gateway_ip' />}
                            />
             
                          </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Netmask
                            </Typography>
                         
                            <Field
                              as={TextField}
                              placeholder='Enter netmask'
                              name='netmask'
                              variant='standard'
                              fullWidth
                     
                              error={
                                props.errors.netmask && props.touched.netmask
                              }
                              helperText={<ErrorMessage name='netmask' />}
                            />
         
                          </Grid>

             
                        </Grid>
                      </Grid>

                      {/* ---------- */}

              

                      <Grid xs={12} item>
                        <Box textAlign='right' >
                          <Button
                            variant='outlined'
                            type='submit'
                            sx={{ mt: 0.5, mb: 0.5, minWidth: "75px" }}
                            size='small'
                          >
                        
                            Save
                          </Button>
          
                          <Button
                          onClick={()=> handleChangeStaticIpApply()}
                            variant='outlined'
                            type='button'
                            sx={{ mt: 0.5, mb: 0.5, minWidth: "75px" }}
                            size='small'
                          >
                        
                            Apply
                          </Button>


                        
                        </Box>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>

              {/* ------------------- */}

         

              <Formik
                initialValues={initialValuesFour}
                validationSchema={validationSchemaFour}
                onSubmit={onSubmitFour}
                enableReinitialize
              >
                {(props) => (
                  <Form>
                    <Grid container spacing={2}>
                      {/* ------- */}
                      <Grid xs={12} item>
                        <Typography
                          variant='body2'
                          color='grey'
                          component='p'
                          gutterBottom
                        >
                          Configure the NTP Server
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid xs={6} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              NTP Server Address
                            </Typography>
                            <LightTooltip title="Sets the NTP server for system." placement="top-end">
                            <Field
                              as={TextField}
                              placeholder='Enter NTP Server'
                              name='ntp_server'
                              variant='standard'
                              fullWidth
                      
                              error={
                                props.errors.ntp_server &&
                                props.touched.ntp_server
                              }
                              helperText={<ErrorMessage name='ntp_server' />}
                            />
                        </LightTooltip>
                          </Grid>
                        </Grid>
                      </Grid>

              

                      
                    <Grid xs={12} item>
                        <Box textAlign='right' >
                          <Button
                            variant='outlined'
                            type='submit'
                            sx={{ mt: 0.5, mb: 0.5, minWidth: "75px" }}
                            size='small'
                          >
                        
                            Save
                          </Button>
          
                          <Button
                          onClick={()=>handleChangeNtpApply()}
                            variant='outlined'
                            type='button'
                            sx={{ mt: 0.5, mb: 0.5, minWidth: "75px" }}
                            size='small'
                          >
                        
                            Apply
                          </Button>


                        
                        </Box>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>

          </Paper>
        </Grid>
      )}

    </>
  );
};

export default NetworkScreen;
