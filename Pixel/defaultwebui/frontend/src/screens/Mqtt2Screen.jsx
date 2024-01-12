
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  MqttScreen.jsx

Brief:  It contains ui of Mqtt page.

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/

import React, { useState, useEffect } from "react";

import { Helmet } from "react-helmet";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Box,
  Typography
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import Loader from "../components/Loader"

import {
  mqttTwoSaveDataAction,
  mqttTwoRegisterAction,
  getTwoMqttCert,
  mqttTwoProtocolCertAction,
  clearErrorsMQTTTwo,
  clearSuccessMQTTTwo,
  clearErrorsMQTTCertTwo,
  clearSuccessMQTTCertTwo,
  clearErrorsMQTTCert,
  applyMqttTwoCheck,
  clearMqttTwoApplySuccess,
  clearMqttTwoApplyErrors
} from "../actions/mqtt2Actions"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useAlert } from 'react-alert'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const MqttScreenTwo = () => {

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

  const [fileData, setFileData] = useState()

  const [protocol, setProtocol] = useState("");


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();


  const userLogin = useSelector((state) => {
    return state.userLogin;
  });


  const { userInfo } = userLogin;


  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("user") || null)
    if (!userData) {
      navigate("/")
    }
    dispatch(mqttTwoSaveDataAction(navigate))
    dispatch(getTwoMqttCert(navigate))

  }, [userInfo, dispatch, navigate])


  const mqttTwoSaveData = useSelector((state) => {
    return state.mqttTwoSaveData;
  });


  const { mqttTwoDefaultInfo, loading } = mqttTwoSaveData;


  const getMqttTwoCert = useSelector((state) => {
    return state.getMqttTwoCert;
  });

  const { getMqttTwoProtocolInfo,
    loading: mqttTwoCertLoading,
    error: mqttTwoCertificateError } = getMqttTwoCert;


  const mqttTwoRegister = useSelector((state) => {
    return state.mqttTwoRegister;
  });


  const { error: errorTwoMQTT, success: successTwoMQTT } = mqttTwoRegister

  const applyMqttTwo = useSelector((state) => {
    return state.applyMqttTwo;
  });


  const { error: errorapplyMqttTwo,
    success: successapplyMqttTwo } = applyMqttTwo;

  const mqttTwoProtocolCert = useSelector((state) => {
    return state.mqttTwoProtocolCert;
  });


  const { error: errorMQTTTwoCert, success: successMQTTTwoCert } = mqttTwoProtocolCert;



  let initialValues;

  if (mqttTwoDefaultInfo) {
    initialValues = {

      broker: mqttTwoDefaultInfo.broker,
      port: mqttTwoDefaultInfo.port,
      mqttstatus: mqttTwoDefaultInfo.mqttstatus,
      clientid: mqttTwoDefaultInfo.clientid,
      topic: mqttTwoDefaultInfo.topic,
      health_topic: mqttTwoDefaultInfo.health_topic,
      mqtt_user_name: mqttTwoDefaultInfo.mqtt_user_name,
      mqtt_password: mqttTwoDefaultInfo.mqtt_password,
      response_topic: mqttTwoDefaultInfo.response_topic,
      qos: mqttTwoDefaultInfo.qos

    };
  }
  else {
    initialValues = {
      broker: "",
      port: "",
      mqttstatus: "",
      clientid: "",
      topic: "",
      health_topic: "",
      mqtt_user_name: "",
      mqtt_password: "",
      response_topic: "",
      qos: ""
    };
  }



  const validationSchema = Yup.object().shape({

    port: Yup.number().typeError("port should be number"),
    topic: Yup.string(),
    health_topic: Yup.string()
  });


  const onSubmit = (values, props) => {

    dispatch(mqttTwoRegisterAction(values, navigate, alert))

  };


  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();



    

    if (fileData.size === 0) {
      alert.error('Uploaded file is empty');
      return;
    }

    if (!fileData) {
      alert.error("Please Upload a file")
      return;
    }



    dispatch(mqttTwoProtocolCertAction(fileData, navigate, alert))


  };


  const handleChangeProtocol = (e) => {
    setProtocol(e.target.value);
  };



  let initialValuesMqttCert

  if (getMqttTwoProtocolInfo) {
    initialValuesMqttCert = {

      ca: getMqttTwoProtocolInfo
    };
  }
  else {
    initialValuesMqttCert = {

      ca: ""
    };
  }

  useEffect(() => {

    if (errorTwoMQTT) {
      alert.error("MQTT Configurartion failed")
      dispatch(clearErrorsMQTTTwo())
    }

    if (successTwoMQTT) {
      alert.success("MQTT Configurartion saved")
      dispatch(clearSuccessMQTTTwo())
    }
    if (errorMQTTTwoCert) {
      alert.error("MQTT SSL file upload failed")
      dispatch(clearErrorsMQTTCertTwo())
    }

    if (successMQTTTwoCert) {
      alert.success("MQTT SSL file upload successful")
      dispatch(getTwoMqttCert(navigate))
      dispatch(clearSuccessMQTTCertTwo())
    }


    if (mqttTwoCertificateError) {
      alert.error("MQTT SSL file Name unable to fetch")
      dispatch(clearErrorsMQTTCert())
    }

    if (successapplyMqttTwo) {
      alert.success("MQTT-2 Params has set successfully")
      dispatch(clearMqttTwoApplySuccess())
    }
    if (errorapplyMqttTwo) {
      alert.error("MQTT-2 Params selection failed")
      dispatch(clearMqttTwoApplyErrors())
    }


  }, [errorapplyMqttTwo, navigate, successapplyMqttTwo, errorTwoMQTT, successTwoMQTT, errorMQTTTwoCert, successMQTTTwoCert, dispatch, alert, mqttTwoCertificateError])

  const handleChangeMqttTwoApply = () => {
    dispatch(applyMqttTwoCheck(navigate, alert))
  }


  return (
    <>
      <Helmet>
        <title>Pixel Sensor: MQTT</title>
        <meta name="description" content="MQTT connection parameters, should be configured by the commissioning team once the product is deployed." />
      </Helmet>

      {loading && mqttTwoCertLoading ? (<Loader />) : (

        <Grid>


          <Paper
            style={{ maxWidth: 950, padding: "30px 33px", margin: "30px auto" }}
            elevation={20}
          >


            <Box>

              <Typography
                className='sectionHeading'
    
                component='p'
                gutterBottom
              >
                MQTT connection parameters, should be configured by the commissioning team once the product is deployed.
              </Typography>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(props) => (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid xs={12} item>
                        <Typography
                          variant='body2'
                          color='grey'
                          component='p'
                          gutterBottom
                        >
                          Configure MQTT broker and port
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Broker
                            </Typography>
                            <LightTooltip title="Sets the broker to which MQTT data is published." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter Broker'
                                name='broker'
                                variant='standard'
                                fullWidth
                                size='small'
                 
                                error={
                                  props.errors.broker && props.touched.broker
                                }
                                helperText={<ErrorMessage name='broker' />}
                              />
                            </LightTooltip>

                          </Grid>

                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Port
                            </Typography>
                            <LightTooltip title="Sets the port of the broker to which MQTT data is published." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter Port'
                                name='port'

                                variant='standard'
                                type='number'
                                size='small'
                                fullWidth
                      
                                error={props.errors.port && props.touched.port}
                                helperText={<ErrorMessage name='port' />}
                              />
                            </LightTooltip>
                          </Grid>
                        </Grid>
                      </Grid>

                      {/* ------- */}

                      <Grid xs={12} item>

                        <Grid container spacing={1}>
                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Mqtt Status
                            </Typography>

                            <Field
                              as={TextField}
                              placeholder='Mqtt Status'
                              name='mqttstatus'
                              variant='standard'
                              fullWidth
                              size='small'
                        
                              error={
                                props.errors.mqttstatus && props.touched.mqttstatus
                              }
                              helperText={<ErrorMessage name='mqttstatus' />}
                            />

                          </Grid>

                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Client Id
                            </Typography>
                            <LightTooltip title="Sets the port of the broker to which MQTT data is published." placement="top-end">
                              <Field
                                as={TextField}

                                placeholder='Enter Client Id'
                                name='clientid'
                         
                                variant='standard'

                                size='small'
                                fullWidth

                                error={props.errors.clientid && props.touched.clientid}
                                helperText={<ErrorMessage name='clientid' />}
                              />
                            </LightTooltip>
                          </Grid>
                        </Grid>
                      </Grid>


                      {/* 
                 --------- */}
                      <Grid xs={12} item>
                        <Typography
                          variant='body2'
                          color='grey'
                          component='p'
                          gutterBottom
                        >
                          Configure the User name and password
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Mqtt User Name
                            </Typography>
                            <LightTooltip title="Set the user name for mqtt communication." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter mqtt_user_name'
                                name='mqtt_user_name'

                                variant='standard'
                                fullWidth
                                size='small'
                    
                                error={
                                  props.errors.mqtt_user_name && props.touched.mqtt_user_name
                                }
                                helperText={<ErrorMessage name='mqtt_user_name' />}
                              />
                            </LightTooltip>
                          </Grid>

                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Password
                            </Typography>
                            <LightTooltip title="Set the password for mqtt." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter Password'
                                name='mqtt_password'
                           
                                variant='standard'
                                fullWidth
                                size='small'
                           
                                error={
                                  props.errors.mqtt_password && props.touched.mqtt_password
                                }
                                helperText={<ErrorMessage name='mqtt_password ' />}
                              />
                            </LightTooltip>
                          </Grid>
                        </Grid>
                      </Grid>


       

                      <Grid xs={12} item>
                        <Typography
                          variant='body2'
                          color='grey'
                          component='p'
                          gutterBottom
                        >
                          Configure the topics to publish the data
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              {/* Occupancy/People Count Topic */}
                              Telemetry Topic
                            </Typography>
                            <LightTooltip title="Set the topic where the Occupancy & People count data is published." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter people count'
                                name='topic'
                  
                                variant='standard'
                                fullWidth
                                size='small'
                       
                                error={
                                  props.errors.topic &&
                                  props.touched.topic
                                }
                                helperText={<ErrorMessage name='topic' />}
                              />
                            </LightTooltip>
                          </Grid>

                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Device Health Topic
                            </Typography>
                            <LightTooltip title="Set the topic where the device health packet is published." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter device health'
                                name='health_topic'
                  
                                variant='standard'
                                size='small'
                                fullWidth
                 
                                error={
                                  props.errors.health_topic &&
                                  props.touched.health_topic
                                }
                                helperText={<ErrorMessage name='health_topic' />}
                              />
                            </LightTooltip>
                          </Grid>
                        </Grid>
                      </Grid>



                      <Grid xs={12} item>
                        <Typography
                          variant='body2'
                          color='grey'
                          component='p'
                          gutterBottom
                        >
                          Configure the topics to subscribe the data
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Response Topic
                            </Typography>
                            <LightTooltip title="--------------------------." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter response topic'
                                name='response_topic'
                                variant='standard'
                                fullWidth
                                size='small'
                            
                                error={
                                  props.errors.response_topic &&
                                  props.touched.response_topic
                                }
                                helperText={<ErrorMessage name='response_topic' />}
                              />
                            </LightTooltip>
                          </Grid>


                        </Grid>
                      </Grid>


                      <Grid xs={12} item>
                        <Typography
                          variant='body2'
                          color='grey'
                          component='p'
                          gutterBottom
                        >
                          Configure QOS level
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid xs={7} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              QOS Level
                            </Typography>
          
                            <Field
                              as={TextField}
                              placeholder='Enter response topic'
                              name='qos'
                              variant='standard'
                              fullWidth
                              size='small'
             
                              error={
                                props.errors.qos &&
                                props.touched.qos
                              }
                              helperText={<ErrorMessage name='qos' />}
                            />
              
                          </Grid>


                        </Grid>
                      </Grid>



                      {/* ---------- */}



                    </Grid>


                    <  Grid xs={8} md={12} item>
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
                          onClick={() => handleChangeMqttTwoApply()}
                          variant='outlined'
                          type='button'
                          sx={{ mt: 0.5, mb: 0.5, minWidth: "75px" }}
                          size='small'
                        >

                          Apply
                        </Button>



                      </Box>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>


            {/* New Addition here */}

            <Box>


              <Grid xs={12} item>
                <Typography
                  variant='body2'
                  color='grey'
                  component='p'
                  gutterBottom
                  sx={{ mb: 3 }}
                >
                  Configure Mqtt Certificate (Select MQTT Protocol)
                </Typography>
                <Grid container spacing={1}>
                  <Grid xs={12} md={6} item>

                    <Box>
                      <form >
                        <FormControl variant='standard' sx={{ minWidth: 150 }}>
                          <InputLabel id='demo-simple-select-standard-label'>
                            Select Protocol
                          </InputLabel>
                          <Select
                    
                            value={protocol}
                            onChange={handleChangeProtocol}
                            label='Select MQTT Protocol'
                          >
                            <MenuItem value=''>
                            </MenuItem>
                            <MenuItem value={"TCP"}> MQTT/TCP</MenuItem>
                            <MenuItem value={"TLS"}>     MQTT/TLS </MenuItem>

                          </Select>
                        </FormControl>

                      </form>
                    </Box>

                  </Grid>

                  <Grid xs={12} md={6} item>
                    <Formik
                      initialValues={initialValuesMqttCert}
       
                      enableReinitialize
                    >
                      {(props) => (
                        <Form noValidate>
                          <Grid container spacing={1}>


                            {/* <Grid xs={12} item> */}

                            <Grid container spacing={1} sx={{ m: 0.4 }}>
                              <Grid item>
                                <Typography
                                  variant='caption'
                                  color='blue'
                                  component='p'
                                >
                                  Mqtt Certification File
                                </Typography>

                                <Field
                                  as={TextField}
                         
                                  name='ca'
                                  variant='standard'
                                  fullWidth
                                  onChange={props.handleChange}

                                />
                              </Grid>


                            </Grid>
                        

                     
                          </Grid>
                        </Form>
                      )}
                    </Formik>

                  </Grid>
                  {protocol === "TLS" && (
                    <Grid xs={6} item>
                      <Typography
                        variant='caption'
                        color='blue'
                        component='p'
                        sx={{ mt: 1 }}
                      >
                        MQTT Certificate
                      </Typography>
                      <form onSubmit={onSubmitHandler} encType='multipart/form-data'>
                        <input type="file" onChange={fileChangeHandler} name="fileData" required />
                        <Grid xs={12} item>

                          <Box textAlign='right'>
                            <Button
                              variant='outlined'
                              type='submit'
                              sx={{ mt: 3, mb: 3, minWidth: "75px" }}

                              size='small'
                            >

                              Submit File
                            </Button>
                          </Box>
                        </Grid>
                      </form>
                    </Grid>

                  )}


                </Grid>
              </Grid>

            </Box>


         
          </Paper>
        </Grid>
      )}

    </>
  );



};



export default MqttScreenTwo;


