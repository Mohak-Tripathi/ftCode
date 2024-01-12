
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  AdminScreen.jsx

Brief:  It contains ui of admin page. 

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Grid, Paper, TextField, Button, Box, Typography, Input } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { variantAction } from "../actions/adminActions"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {

  adminAction,
  clearErrorsAPMODE,
  clearSuccessAPMODE,
  apModeSsidPassAction,
  clearErrorsVariant,
  clearSuccessVariant,
  clearErrorsSSID,
  clearSuccessSSID,
  wifiStatusAction,
  sshStatusAction,
  clearErrorsWifiStatus,
  clearSuccessWifiStatus,
  clearErrorsSshStatus,
  clearSuccessSshStatus,
  getAdminInfoAction,
  applyApModeSsid,
  applyApModeSsidPass,
  applyWifiStatusCheck,
  applyVariantStatusCheck,
  clearErrorsApModeApplyStatus,
  clearSuccessApModeApplyStatus,
  clearErrorsApModePassApplyStatus,
  clearSuccessApModePassApplyStatus,
  clearErrorsVariantApplyStatus,
  clearSuccessVariantApplyStatus,
  clearErrorsWifiStatusApplyStatus,
  clearSuccessWifiStatusApplyStatus,
  clearErrorsSshStatusApplyStatus,
  clearSuccessSshStatusApplyStatus,
  applySshStatusCheck,
  vncStatusAction,
  clearErrorsVncStatus,
  clearSuccessVncStatus,
  applyVncStatusCheck,
  clearErrorsVNCApplyStatus,
  clearSuccessVNCApplyStatus,

  otaUploadAction,
  clearErrorsOTA,
  clearSuccessOTA,
  applyOTAData,
  clearErrorsOTAapply,
  clearSuccessOTAapply

} from "../actions/adminActions"

import { useAlert } from 'react-alert'

import Loader from "../components/Loader"



const AdminScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const [ota, setOta] = useState("")


  const getAdminInfo = useSelector((state) => {
    return state.getAdminInfo;
  });

  const { getAdminInfoData, loading: getAdminInfoLoading } = getAdminInfo;



  const [variant, setVariant] = useState("");
  const [wifiStatus, setWifiStatus] = useState("");
  const [sshStatus, setSshStatus] = useState("");
  const [vncStatus, setVncStatus] = useState("");

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });

  const { userInfo } = userLogin;

  //variant
  const variantData = useSelector((state) => {
    return state.variant;
  });

  const { success: variantSuccess, error: variantFail } = variantData;



  const admin = useSelector((state) => {
    return state.admin;
  });

  const { error: errorAdmin, success: successAdmin } = admin;



  //APMODE post
  const apModessidPass = useSelector((state) => {
    return state.apModessidPass;
  });

  const { success: apModessidPassSuccess, error: apModessidPassFail } = apModessidPass;



  //wifi
  const adminWifiStatus = useSelector((state) => state.adminWifiStatus)

  const { error: wifiStatusError, success: wifiStatusSuccess } = adminWifiStatus

  const adminSshStatus = useSelector((state) => state.adminSshStatus)

  const { error: sshStatusError, success: sshStatusSuccess } = adminSshStatus

  const adminVncStatus = useSelector((state) => state.adminVncStatus)

  const { error: vncStatusError, success: vncStatusSuccess } = adminVncStatus

  const otaData = useSelector((state) => state.ota)

  const { error: otaError, success: otaSuccess } = otaData


  const applyVariantStatus = useSelector((state) => {
    return state.applyVariantStatus;
  });

  const { error: applyVariantError, success: applyVariantSuccess } = applyVariantStatus


  const applyOTA = useSelector((state) => {
    return state.applyOTA;
  });

  const { error: applyOTAError, success: applyOTASuccess } = applyOTA



  const applyAdminSSID = useSelector((state) => {
    return state.applyAdminSSID;
  });

  const { error: applyAdminSSIDError, success: applyAdminSSIDSuccess } = applyAdminSSID

  const applyAdminSSIDPass = useSelector((state) => {
    return state.applyAdminSSIDPass;
  });

  const { error: applyAdminSSIDPassError, success: applyAdminSSIDPassSuccess } = applyAdminSSIDPass

  const applyWifiStatus = useSelector((state) => {
    return state.applyWifiStatus;
  });

  const { error: applyWifiStatusError, success: applyWifiStatusSuccess } = applyWifiStatus

  const applySshStatus = useSelector((state) => {
    return state.applySshStatus;
  });

  const { error: applySshStatusError, success: applySshStatusSuccess } = applySshStatus

  const applyVncStatus = useSelector((state) => {
    return state.applyVncStatus;
  });

  const { error: applyVncStatusError, success: applyVncStatusSuccess } = applyVncStatus




  useEffect(() => {

    const fetchData = async () => {
      await dispatch(getAdminInfoAction(navigate));

    };

    fetchData();



    if (variantSuccess) {
      alert.success("variant configuration saved")
      dispatch(clearSuccessVariant())
    }

    if (variantFail) {
      alert.error("variant configuration failed")
      dispatch(clearErrorsVariant())
    }


    //ap mode
    if (errorAdmin) {
      alert.error("Apmode SSID failed")
      dispatch(clearErrorsAPMODE())
    }
    if (successAdmin) {
      alert.success("Apmode SSID Saved")
      dispatch(clearSuccessAPMODE())
    }
    ////ap mode pass
    if (apModessidPassSuccess) {
      alert.success("ap mode ssid password saved")
      dispatch(clearSuccessSSID())
    }


    if (apModessidPassFail) {
      alert.error("ap mode ssid password failed")
      dispatch(clearErrorsSSID())
    }

    if (wifiStatusError) {
      alert.error("Wifi Status failed to save")
      dispatch(clearErrorsWifiStatus())
    }
    if (wifiStatusSuccess) {
      alert.success(" Wifi Status saved")
      dispatch(clearSuccessWifiStatus())
    }

    if (sshStatusError) {
      alert.error("SSH Status failed to save")
      dispatch(clearErrorsSshStatus())
    }
    if (sshStatusSuccess) {
      alert.success("SSH Status saved")
      dispatch(clearSuccessSshStatus())
    }

    if (vncStatusError) {
      alert.error("SSH Status failed to save")
      dispatch(clearErrorsVncStatus())
    }
    if (vncStatusSuccess) {
      alert.success("SSH Status saved")
      dispatch(clearSuccessVncStatus())
    }

    if (otaError) {
      alert.error("OTA failed to save")
      dispatch(clearErrorsOTA())
    }
    if (otaSuccess) {
      alert.success("OTA saved")
      dispatch(clearSuccessOTA())
    }


  }, [dispatch,
    navigate,
    sshStatusSuccess,
    sshStatusError, errorAdmin, successAdmin, apModessidPassSuccess,
    apModessidPassFail, wifiStatusError, wifiStatusSuccess,
    variantSuccess, variantFail, alert,
    vncStatusError,
    vncStatusSuccess,
    otaError,
    otaSuccess
  ])

  useEffect(() => {

    if (getAdminInfoData) {
      console.log("reach")
      setVariant(getAdminInfoData.variant)
      setWifiStatus(getAdminInfoData.wifi_status)
      setSshStatus(getAdminInfoData.ssh_status)
      setVncStatus(getAdminInfoData.vnc_status)

    }


  }, [getAdminInfoData])

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("user") || null)

    if (!userData) {

      navigate("/")
    }


    if (getAdminInfoData) {
      console.log("reached234")
      setVariant(getAdminInfoData.variant)
      setWifiStatus(getAdminInfoData.wifi_status)
      setSshStatus(getAdminInfoData.ssh_status)
      setVncStatus(getAdminInfoData.vnc_status)
    }



    if (applyVariantError) {
      alert.error("AP Mode SSID Selection failed")
      dispatch(clearErrorsVariantApplyStatus())
    }
    if (applyVariantSuccess) {
      alert.success("Variant Selected")
      dispatch(clearSuccessVariantApplyStatus())
    }

    if (applyAdminSSIDError) {
      alert.error("Variant Selection failed")
      dispatch(clearErrorsApModeApplyStatus())
    }
    if (applyAdminSSIDSuccess) {
      alert.success("AP Mode SSID Selected")
      dispatch(clearSuccessApModeApplyStatus())
    }

    if (applyAdminSSIDPassError) {
      alert.error("AP Mode SSID Password Selection failed")
      dispatch(clearErrorsApModePassApplyStatus())
    }
    if (applyAdminSSIDPassSuccess) {
      alert.success("AP Mode SSID Password Selected")
      dispatch(clearSuccessApModePassApplyStatus())
    }

    if (applyWifiStatusError) {
      alert.error("Wifi-Status Selection failed")
      dispatch(clearErrorsWifiStatusApplyStatus())
    }
    if (applyWifiStatusSuccess) {
      alert.success("Wifi-Status Set")
      dispatch(clearSuccessWifiStatusApplyStatus())
    }

    if (applySshStatusError) {
      alert.error("SSH-Status Selection failed")
      dispatch(clearErrorsSshStatusApplyStatus())
    }
    if (applySshStatusSuccess) {
      alert.success("SSH-Status Set")
      dispatch(clearSuccessSshStatusApplyStatus())
    }

    if (applyVncStatusError) {
      alert.error("VNC-Status Selection failed")
      dispatch(clearErrorsVNCApplyStatus())
    }


    if (applyVncStatusSuccess) {
      alert.success("VNC-Status Set")
      dispatch(clearSuccessVNCApplyStatus())
    }

    if (applyOTAError) {
      alert.error("OTA failed")
      dispatch(clearErrorsOTAapply())
    }


    if (applyOTASuccess) {
      alert.success("OTA Set")
      dispatch(clearSuccessOTAapply())
    }

  }, [dispatch, applySshStatusError, applySshStatusSuccess,
    applyVncStatusError, applyVncStatusSuccess,
    getAdminInfoLoading, getAdminInfoData, applyWifiStatusError, applyWifiStatusSuccess,
    applyAdminSSIDPassSuccess, applyAdminSSIDPassError,
    navigate, userInfo, alert, applyVariantError, applyVariantSuccess,
    applyAdminSSIDError, applyAdminSSIDSuccess, applyOTASuccess, applyOTAError

  ]);


  const initialValues = {
    ap_mode_ssid_pas: ""
  }


  const validationSchema = Yup.object().shape({

    ap_mode_ssid_pas: Yup.string()
      .min(4, "Minimum characters should be 4")

      .required("Required"),
  });


  const onSubmit = (values) => {
    dispatch(apModeSsidPassAction(values, navigate, alert))
  };

  const handleChange = (e) => {
    setVariant(e.target.value);
  };

  //submit variant value
  const chooseVariant = (e) => {
    e.preventDefault()
    dispatch(variantAction(variant, navigate, alert))
  }


  let initialValuesZero = {
    admin_version: getAdminInfoData ? getAdminInfoData.version : ""

  }
  const validationSchemaZero = Yup.object().shape({
    admin_version: Yup.string()
  });


  let initialValuesFive = {
    ap_mode_ssid: getAdminInfoData ? getAdminInfoData.ap_mode_ssid : ""

  }


  const validationSchemaFive = Yup.object().shape({
    ap_mode_ssid: Yup.string()
  });


  const onSubmitFive = (values) => {
    dispatch(adminAction(values, navigate, alert));
  };


  const handleStatus = (e) => {
    setWifiStatus(e.target.value);
  };


  const chooseWifiStatus = (e) => {
    e.preventDefault()
    dispatch(wifiStatusAction(wifiStatus, navigate, alert))
  }

  const handleSshStatus = (e) => {
    setSshStatus(e.target.value);
  };

  const handleVncStatus = (e) => {
    setVncStatus(e.target.value);
  };


  const chooseSshStatus = (e) => {
    e.preventDefault()
    dispatch(sshStatusAction(sshStatus, navigate, alert))
  }

  const chooseVncStatus = (e) => {
    e.preventDefault()
    dispatch(vncStatusAction(vncStatus, navigate, alert))
  }



  const chooseOTAUpdate = (e) => {
    setOta(e.target.files[0]);

  };



  const handleOTAUpdate = (e) => {

    e.preventDefault();

    if (ota.size === 0) {
      alert.error('Uploaded file is empty');
      return;
    }

    if (!ota) {
      alert.error("Please Upload a file")
      return;
    }

    // Trim any leading or trailing whitespaces and make the comparison case-insensitive
    const fileName = ota.name.trim()

    if (fileName !== "ota.zip") {
      alert.error('Name of the file has to be - ota.zip');
      return;
    }

    console.log(ota, "ota")

    dispatch(otaUploadAction(ota, navigate, alert))


  };

  const handleChangeOTAUpdate = () => {
    dispatch(applyOTAData(navigate, alert))
  }






  const handleChangeAPModessid = () => {
    dispatch(applyApModeSsid(navigate, alert))
  }

  const handleChangeAPModessidPass = () => {
    dispatch(applyApModeSsidPass(navigate, alert))
  }

  const handleChangeWifiStatus = () => {
    dispatch(applyWifiStatusCheck(navigate, alert))
  }
  const handleChangeVariantStatus = () => {
    dispatch(applyVariantStatusCheck(navigate, alert))
  }

  const handleChangeSshStatus = () => {
    dispatch(applySshStatusCheck(navigate, alert))
  }

  const handleChangeVncStatus = () => {
    dispatch(applyVncStatusCheck(navigate, alert))
  }


  return (
    <>
      <Helmet>
        <title>Pixel Sensor: Admin</title>
        <meta name="description" content="One time settings for the device, should be configured by the production team before the product is shipped from factory." />
      </Helmet>

      {getAdminInfoLoading && !getAdminInfoData ? <Loader /> : (

        <Grid>
          <Paper
            style={{
              maxWidth: 975,
              minHeight: 400,
              padding: "30px 33px",
              margin: "25px auto",
            }}
            elevation={20}
          >
            <Box>
              <Typography
                className='sectionHeading'
                component='p'
                gutterBottom
              >
                One time settings for the device, should be configured by the production team before the product is shipped from factory.
              </Typography>
            </Box>

            <Box>

              <Box sx={{ mb: 5, mt: 2 }}>


                <Formik
                  initialValues={initialValuesZero}
                  validationSchema={validationSchemaZero}
   
                  enableReinitialize
                >
                  {(props) => (
                    <Form>
                      <Grid container spacing={2}>
                        {/* ------- */}

                        <Grid xs={12} item>
                          <Typography
                            variant='body2'
                            color='blue'
                            component='p'
                            gutterBottom
                          >
                            PIXEL SENSOR VERSION
                          </Typography>
                          <Grid container spacing={1}>
                            <Grid xs={3} item>


                              <Field
                                as={TextField}

                                placeholder='Version'
                                name='admin_version'
                                variant='standard'
                                fullWidth
                                required
                                error={
                                  props.errors.admin_version &&
                                  props.touched.admin_version
                                }
                                helperText={<ErrorMessage name='admin_version' />}
                                inputProps={{
                                  readOnly: true,
                                }}
                              />
                              {/* </LightTooltip> */}

                            </Grid>
                          </Grid>
                        </Grid>

                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Box>

            <Box>
              <hr style={{ margin: '1.5rem 0', borderTop: '1px solid #ccc' }} />

            </Box>


            <Box>

              <Box>

                <Typography
                  variant='body2'
                  color='blue'
                  component='p'
                  gutterBottom
                >
                  Choose Variant
                </Typography>
              </Box>

              <Box>
                <form onSubmit={chooseVariant}>
                  <FormControl variant="standard" sx={{ m: 0.5, minWidth: 175 }} size="small">
                    {/* <InputLabel id='demo-simple-select-standard-label'>
                      Variant
                    </InputLabel> */}
                    <Select

                      value={variant}
                      onChange={handleChange}
                      label='variant'
                    >
                      <MenuItem value=''>
                      </MenuItem>
                      <MenuItem value={"MQTT"}>IP Variant (MQTT variant)</MenuItem>
                      <MenuItem value={"ZIGBEE"}> Non IP variant  (Zigbee Variant ){" "}
                      </MenuItem>
                      {/* <MenuItem value={"STANDALONE"}>
                      Standalone variant{" "}
                    </MenuItem> */}
                    </Select>
                  </FormControl>



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
                        onClick={() => handleChangeVariantStatus()}
                        variant='outlined'
                        type='button'
                        sx={{ mt: 0.5, mb: 0.5, minWidth: "75px" }}
                        size='small'
                      >

                        Apply
                      </Button>


                    </Box>
                  </Grid>


                </form>
              </Box>
            </Box>


            <Box>
              <hr style={{ margin: '1.5rem 0', borderTop: '1px solid #ccc' }} />

            </Box>


            <Box>


              <Formik
                initialValues={initialValuesFive}
                validationSchema={validationSchemaFive}
                onSubmit={onSubmitFive}
                enableReinitialize
              >
                {(props) => (
                  <Form>
                    <Grid container spacing={2}>
                      {/* ------- */}

                      <Grid xs={12} item>
                        <Typography
                          variant='body2'
                          color='blue'
                          component='p'
                          gutterBottom
                        >
                          AP Mode SSID
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid xs={3} item>

              
                            <Field
                              as={TextField}
                    
                              placeholder='Enter SSID'
                              name='ap_mode_ssid'
                              variant='standard'
                              fullWidth
                              required
                              error={
                                props.errors.ap_mode_ssid &&
                                props.touched.ap_mode_ssid
                              }
                              helperText={<ErrorMessage name='ap_mode_ssid' />}
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
                            onClick={() => handleChangeAPModessid()}
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

            <Box>
              <hr style={{ margin: '1.5rem 0', borderTop: '1px solid #ccc' }} />

            </Box>


            <Box>


              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
              >
                {(props) => (
                  <Form>
                    <Grid container spacing={2}>
                      {/* ------- */}

                      <Grid xs={12} item>

                        <Typography
                          variant='body2'
                          color='blue'
                          component='p'
                          gutterBottom
                        >
                          AP Mode SSID Password
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid xs={3} item>

                      

                            <Field
        
                              as={TextField}
                              placeholder='Enter SSID Password'
                        
                              name='ap_mode_ssid_pas'
                              variant='standard'
                              fullWidth
                              required
                       
                              error={
                                props.errors.ap_mode_ssid_pas &&
                                props.touched.ap_mode_ssid_pas
                              }
                              helperText={<ErrorMessage name='ap_mode_ssid_pas' />}
                            />
                            {/* </LightTooltip> */}
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
                            onClick={() => handleChangeAPModessidPass()}
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


            <Box>
              <hr style={{ margin: '1.5rem 0', borderTop: '1px solid #ccc' }} />

            </Box>

            <Box>

              <Box>

                <Typography
                  variant='body2'
                  color='blue'
                  component='p'
                  gutterBottom
                >
                  Wifi Status
                </Typography>
              </Box>

              <Box>
                <form onSubmit={chooseWifiStatus}>
                  <FormControl variant="standard" sx={{ m: 0.5, minWidth: 175 }} size="small">
                    <Select

                      value={wifiStatus}
                      onChange={handleStatus}
                      label="Wifi Status"
                    >
                      <MenuItem value=''>
                      </MenuItem>
                      <MenuItem value={"enabled"}>Enabled</MenuItem>
                      <MenuItem value={"disabled"}>Disabled</MenuItem>
                    </Select>
                  </FormControl>



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
                        onClick={() => handleChangeWifiStatus()}
                        variant='outlined'
                        type='button'
                        sx={{ mt: 0.5, mb: 0.5, minWidth: "75px" }}
                        size='small'
                      >

                        Apply
                      </Button>


                    </Box>
                  </Grid>

                </form>
              </Box>
            </Box>

            <Box>


              <Box>
                <hr style={{ margin: '1.5rem 0', borderTop: '1px solid #ccc' }} />

              </Box>

              <Box>

                <Typography
                  variant='body2'
                  color='blue'
                  component='p'
                  gutterBottom
                >
                  SSH Status
                </Typography>
              </Box>

              <Box>
                <form onSubmit={chooseSshStatus}>
                  <FormControl variant="standard" sx={{ m: 0.5, minWidth: 175 }} size="small">
                    <Select

                      value={sshStatus}
                      onChange={handleSshStatus}
                      label="SSH Status"
                    >
                      <MenuItem value=''>
                      </MenuItem>
                      <MenuItem value={"enabled"}>Enabled</MenuItem>
                      <MenuItem value={"disabled"}>Disabled</MenuItem>
                    </Select>
                  </FormControl>



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
                        onClick={() => handleChangeSshStatus()}
                        variant='outlined'
                        type='button'
                        sx={{ mt: 0.5, mb: 0.5, minWidth: "75px" }}
                        size='small'
                      >

                        Apply
                      </Button>


                    </Box>
                  </Grid>

                </form>
              </Box>
            </Box>


            <Box>
              <hr style={{ margin: '1.5rem 0', borderTop: '1px solid #ccc' }} />

            </Box>

            <Box>

              <Box>

                <Typography
                  variant='body2'
                  color='blue'
                  component='p'
                  gutterBottom
                >
                  VNC Status
                </Typography>
              </Box>

              <Box>
                <form onSubmit={chooseVncStatus}>
                  <FormControl variant="standard" sx={{ m: 0.5, minWidth: 175 }} size="small">
                    <Select

                      value={vncStatus}
                      onChange={handleVncStatus}
                      label="VNC Status"
                    >
                      <MenuItem value=''>
                      </MenuItem>
                      <MenuItem value={"enabled"}>Enabled</MenuItem>
                      <MenuItem value={"disabled"}>Disabled</MenuItem>
                    </Select>
                  </FormControl>



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
                        onClick={() => handleChangeVncStatus()}
                        variant='outlined'
                        type='button'
                        sx={{ mt: 0.5, mb: 0.5, minWidth: "75px" }}
                        size='small'
                      >

                        Apply
                      </Button>


                    </Box>
                  </Grid>

                </form>
              </Box>
            </Box>


            <Box>

              <Box>

                <Typography
                  variant='body2'
                  color='blue'
                  component='p'
                  gutterBottom
                >
                  OTA Update (upload ota.zip file)
                </Typography>
              </Box>

              <Box>

                <form onSubmit={handleOTAUpdate} >
                  <FormControl variant="standard" sx={{ m: 0.5, minWidth: 175 }} size="small">


                    <Input
                      type="file"
                      onChange={chooseOTAUpdate}

                    />

                  </FormControl>

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
                        onClick={() => handleChangeOTAUpdate()}
                        variant='outlined'
                        type='button'
                        sx={{ mt: 0.5, mb: 0.5, minWidth: "75px" }}
                        size='small'
                      >

                        Apply
                      </Button>
                    </Box>
                  </Grid>

                </form>
              </Box>
            </Box>



          </Paper>
        </Grid>

      )}
    </>
  );
};

export default AdminScreen;
