
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  SensorScreen.jsx

Brief:  It contains ui of sensor page.

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/


import React from "react";
import { Helmet } from "react-helmet";
import { Grid, Paper, TextField, Button, Box, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { sensorRegister, sensorGetInfo, clearSuccess, clearErrors, applySensorInfo, clearSensorApplyErrors, clearSensorApplySuccess } from "../actions/sensorActions";

import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import Loader from "../components/Loader"
import { useAlert } from 'react-alert'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';



const SensorScreen = () => {

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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const sensor = useSelector((state) => {
    return state.sensor;
  });

  const { success: sensorSuccess, error: sensorFail } = sensor;

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });

  const { userInfo } = userLogin;


  const applySensor = useSelector((state) => {
    return state.applySensor;
  });

  const { success: applySensorSuccess, error: applySensorFail } = applySensor;



  const getSensor = useSelector((state) => {
    return state.getSensor;
  });

  const { loading, getSensorInfo } = getSensor;

  useLayoutEffect(() => {
    let userData = JSON.parse(localStorage.getItem("user") || null)
    if (!userData) {
      navigate("/");
    }


    if (sensorSuccess) {
      alert.success("sensor configuration saved")
      dispatch(clearSuccess())
    }

    if (sensorFail) {
      alert.error("sensor configuration failed")
      dispatch(clearErrors())
    }


    if (applySensorSuccess) {
      alert.success("sensor configuration selected")
      dispatch(clearSensorApplySuccess())
    }

    if (applySensorFail) {
      alert.error("sensor configuration selection failed")
      dispatch(clearSensorApplyErrors())
    }


    dispatch(sensorGetInfo(navigate));

  }, [dispatch, navigate, userInfo, sensorSuccess, alert, sensorFail, applySensorFail, applySensorSuccess]);




  let initialValues;

  if (getSensorInfo) {
    initialValues = {
      confidence_threshold: getSensorInfo.confidence_threshold,
      occupancy_sensitivity: getSensorInfo.overlap_threshold,
      width: getSensorInfo.resolution.width,
      height: getSensorInfo.resolution.height,
      degree: getSensorInfo.people_count_degree,
      model_input_threshold: getSensorInfo.model_input_resolution,
      iou_threshold: getSensorInfo.iou_threshold,
      sleep_time: getSensorInfo.sleep_time,
      periodic_interval: getSensorInfo.periodic_interval,
      iteration_count: getSensorInfo.iteration_count,


    }
  } else {
    initialValues = {
      confidence_threshold: "",
      occupancy_sensitivity: "",
      width: "",
      height: "",
      degree: "",
      model_input_threshold: "",
      iou_threshold: "",
      sleep_time: "",
      periodic_interval: "",
      iteration_count: ""
    }
  }

  const validationSchema = Yup.object().shape({
    confidence_threshold: Yup.number()
      .typeError("Confidence Threshold should be number")
      .required("Required"),
    occupancy_sensitivity: Yup.number()
      .typeError("Occupancy Sensitivity should be number")
      .required("Required"),
    width: Yup.number()
      .typeError("Width should be number")
      .required("Required"),
    height: Yup.number()
      .typeError("Height should be number")
      .required("Required"),
    degree: Yup.number()
      .typeError("Degree should be number")
      .required("Required"),
    model_input_threshold: Yup.number()
      .typeError("Model Input Threshold should be number")
      .required("Required"),
    iou_threshold: Yup.number()
      .typeError("IOU threshold should be number")
      .required("Required"),
    sleep_time: Yup.number()
      .typeError("Sleep Time should be number")
      .required("Required"),
    periodic_interval: Yup.number()
      .typeError("periodic interval should be number")
      .required("Required"),
    iteration_count: Yup.number()
      .typeError("iteration count should be number")
      .required("Required"),
  });



  const onSubmit = (values, props) => {
    dispatch(sensorRegister(values, navigate, alert));
  };

  const handleChangeApplySensor = () => {
    dispatch(applySensorInfo(navigate, alert))
  }


  return (
    <>
      <Helmet>
        <title>Pixel Sensor: Inference</title>
        <meta name="description" content="Model input parameters for optimal performance during inference, should be configured by the production team before the product is shipped from the factory." />
      </Helmet>
      {loading ? <Loader /> : (

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
                Model input parameters for optimal performance during inference, should be configured by the production team before the product is shipped from the factory.
              </Typography>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
              >
                {(props) => (
                  <Form noValidate>

                    <Grid container spacing={2}>

                      <Typography variant="h6" sx={{ pt: 2 }} >
                        Model Input Parameter
                      </Typography>;
                      <Grid xs={12} item>
                  
                        <Grid container spacing={1}>
                          <Grid xs={8} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Confidence Threshold
                            </Typography>
                            <LightTooltip title="The confidence threshold is set on a scale from 0 - 1. The detection of people with low confidence can be filtered by setting this threshold." placement="top-end">
                              <Field
                                as={TextField}

                                placeholder='Enter confidence threshold'
                                name='confidence_threshold'
                        
                                variant='standard'
                                fullWidth
                                size='small'
                                type='number'
                                required
                                error={
                                  props.errors.confidence_threshold &&
                                  props.touched.confidence_threshold
                                }
                                helperText={
                                  <ErrorMessage name='confidence_threshold' />
                                }
                              />
                            </LightTooltip>
                          </Grid>

                          <Grid xs={8} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Occupancy Sensitivity
                            </Typography>
                            <LightTooltip title="Occupancy sensitivity is set on scale from 1 - 100. This sets the sensitivity of detecing people when they enter the table bounding area." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter occupancy sensitivity'
                                name='occupancy_sensitivity'
                       
                                variant='standard'
                                size='small'
                                fullWidth
                                type='number'
                                required
                                error={
                                  props.errors.occupancy_sensitivity &&
                                  props.touched.occupancy_sensitivity
                                }
                                helperText={
                                  <ErrorMessage name='occupancy_sensitivity' />
                                }
                              />
                            </LightTooltip >
                          </Grid>
                        </Grid>
                      </Grid>

                      {/* ------- */}

                      <Grid xs={12} item>

                        <Grid container spacing={1}>
                          <Grid xs={8} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Width
                            </Typography>
                            <LightTooltip title="Set the width of the sensor resolution." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter width'
                                name='width'
                                // label='Width'
                                variant='standard'
                                fullWidth
                                size='small'
                                type='number'
                                required
                                error={props.errors.width && props.touched.width}
                                helperText={<ErrorMessage name='width' />}
                              />
                            </LightTooltip>
                          </Grid>

                          <Grid xs={8} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Height
                            </Typography>
                            <LightTooltip title="Set the height of the sensor resolution." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter height'
                                name='height'
                       
                                variant='standard'
                                size='small'
                                type='number'
                                fullWidth
                                required
                                error={props.errors.height && props.touched.height}
                                helperText={<ErrorMessage name='height' />}
                              />
                            </LightTooltip>
                          </Grid>
                        </Grid>
                      </Grid>

                      {/* 
                  --------- */}

                      <Grid xs={12} item>

                        <Grid container spacing={1}>

                          <Grid xs={8} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              IOU Threshold
                            </Typography>
                            <LightTooltip title="This is overlap threshold for the model to remove occuluded duplicate detections." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter IOU threshold'
                                name='iou_threshold'
                                // label='IOU Threshold'
                                variant='standard'
                                fullWidth
                                size='small'
                                required
                                type='number'
                                error={
                                  props.errors.iou_threshold &&
                                  props.touched.iou_threshold
                                }
                                helperText={<ErrorMessage name='iou_threshold' />}
                              />
                            </LightTooltip>
                          </Grid>

                          <Grid xs={8} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Model Input Resolution
                            </Typography>
                            <LightTooltip title="This is the resolution of the image passed to the model." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter model_input_resolution'
                                name='model_input_threshold'
                                // label='Model Input Resolution'
                                variant='standard'
                                fullWidth
                                size='small'
                                type='number'
                                required
                                error={
                                  props.errors.model_input_threshold &&
                                  props.touched.model_input_threshold
                                }
                                helperText={
                                  <ErrorMessage name='model_input_threshold' />
                                }
                              />
                            </LightTooltip>
                          </Grid>
                        </Grid>
                      </Grid>

                      {/* ---------- */}


                      <Typography variant="h6" sx={{ pt: 2 }} >
                        Algorithm Input Parameter
                      </Typography>;
                      <Grid xs={12} item>

                        <Grid container spacing={1}>

                          <Grid xs={8} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Degree
                            </Typography>
                            <LightTooltip title="This is applicable only for people count. Allows you to select the best angle image from 0, 90, 180, 270." placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter Degree'
                                name='degree'
                                // label='Degree'
                                variant='standard'
                                fullWidth
                                size='small'
                                type='number'
                                required
                                error={props.errors.degree && props.touched.degree}
                                helperText={<ErrorMessage name='degree' />}
                              />
                            </LightTooltip>
                          </Grid>
                          <Grid xs={8} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Sleep Time Frame Capture Interval (sec)
                            </Typography>
                            <LightTooltip title="sleep-time" placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter sleep time'
                                name='sleep_time'
               
                                variant='standard'
                                fullWidth
                                size='small'
                                required
                                type='number'
                                error={
                                  props.errors.sleep_time &&
                                  props.touched.sleep_time
                                }
                                helperText={<ErrorMessage name='sleep_time' />}
                              />
                            </LightTooltip>
                          </Grid>
                        </Grid>



                      </Grid>

                      <Grid xs={12} item>

                        <Grid container spacing={1}>



                          <Grid xs={8} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Periodic Heartbeat Interval (mint)
                            </Typography>
                            <LightTooltip title="" placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter periodic interval'
                                name='periodic_interval'
         
                                variant='standard'
                                fullWidth
                                size='small'
                                required
                                type='number'
                                error={
                                  props.errors.periodic_interval &&
                                  props.touched.periodic_interval
                                }
                                helperText={<ErrorMessage name='periodic_interval' />}
                              />
                            </LightTooltip>
                          </Grid>

                          <Grid xs={8} md={6} item>
                            <Typography
                              variant='caption'
                              color='blue'
                              component='p'
                            >
                              Iteration Count For Passive Mode
                            </Typography>
                            <LightTooltip title="" placement="top-end">
                              <Field
                                as={TextField}
                                placeholder='Enter Iteration Count'
                                name='iteration_count'
                                // label='IOU Threshold'
                                variant='standard'
                                fullWidth
                                size='small'
                                required
                                type='number'
                                error={
                                  props.errors.iteration_count &&
                                  props.touched.iteration_count
                                }
                                helperText={<ErrorMessage name='iteration_count' />}
                              />
                            </LightTooltip>
                          </Grid>


                        </Grid>



                      </Grid>

                      <Grid xs={10} item>
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
                            onClick={() => handleChangeApplySensor()}
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

export default SensorScreen;
