
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  ServiceScreen.jsx

Brief:  It contains ui of service page.

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/


import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Paper, Button, Box, Typography, Grid, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrorsOccupancyCount, clearSuccessOccupancyCount, rebootVariant } from "../actions/serviceActions"
import Loader from "../components/Loader"
import { useAlert } from 'react-alert'
import { NavLink } from "react-router-dom";


import {
  serviceConfigAction,
  serviceOccupancyAction,
  servicePeopleCountAction,
  servicePeopleCountOnBootAction,
  serviceOccupancyCountingAction,
  setServiceStatusAction,
  clearErrorsConfig,
  clearSuccessConfig,
  clearErrorsOccupancy,
  clearSuccessOccupancy,
  clearErrorsPeopleCount,
  clearSuccessPeopleCount,
  clearErrorsPeopleCountOnBoot,
  clearSuccessPeopleCountOnBoot,
  serviceAnalyzerAction,
  clearErrorsAnalyzer,
  clearSuccessAnalyzer

} from "../actions/serviceActions";

const ServicesScreen = () => {

  const [reboot, setReboot] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();



  const userLogin = useSelector((state) => {
    return state.userLogin;
  });

  const { userInfo } = userLogin;


  const setConfigService = (value) => {
    dispatch(serviceConfigAction(value, navigate, alert));
  };

  const setOccupancyService = (value) => {
    dispatch(serviceOccupancyAction(value, navigate, alert));
  };

  const setOccupancyCountingService = (value) => {
    dispatch(serviceOccupancyCountingAction(value, navigate, alert));
  };

  const setPeopleCountService = (value) => {
    dispatch(servicePeopleCountAction(value, navigate, alert));
  };

  const setPeopleCountServiceOnBoot = (value) => {
    dispatch(servicePeopleCountOnBootAction(value, navigate, alert));
  };


  const setAnalyzerService = (value) => {

    dispatch(serviceAnalyzerAction(value, navigate, alert));
  };


  const rebootButtonClick = (e) => {
    setReboot(e.target.value);
  };

  const rebootServerButton = () => {
    dispatch(rebootVariant("data", navigate, alert))


  }


  const setServiceStatus = useSelector((state) => {
    return state.setServiceStatus;
  });



  const { success: serviceSuccess, setServiceStatusInfo } = setServiceStatus;


  let serviceStarted = false;
  let servicesConfig1
  let servicesConfig2
  let servicesConfig3


  if (serviceSuccess) {

    serviceStarted = setServiceStatusInfo[1].isActive || setServiceStatusInfo[2].isActive || setServiceStatusInfo[0].isActive || setServiceStatusInfo[3].isActive || setServiceStatusInfo[4].isActive
    servicesConfig1 = !setServiceStatusInfo[1].isActive && !setServiceStatusInfo[1].isDisabled
    servicesConfig2 = !setServiceStatusInfo[2].isActive && !setServiceStatusInfo[2].isDisabled
    servicesConfig3 = !setServiceStatusInfo[4].isActive && !setServiceStatusInfo[4].isDisabled

  }

  const setConfig = useSelector((state) => {
    return state.setConfig;
  });


  const { error: setConfigError, success: setConfigSuccess, setConfigInfo } = setConfig;

  const setOccupancy = useSelector((state) => {
    return state.setOccupancy;
  });
  const { error: setOccupancyError, success: setOccupancySuccess, setOccupancyInfo } = setOccupancy;

  const setOccupancyCount = useSelector((state) => {
    return state.setOccupancyCount;
  });
  const { error: setOccupancyCountError, success: setOccupancyCountSuccess, setOccupancyCountInfo } = setOccupancyCount;



  const setPeopleCount = useSelector((state) => {
    return state.setPeopleCount;
  });

  const { error: setPeopleCountError, success: setPeopleCountSuccess, setPeopleCountInfo } = setPeopleCount;


  const setPeopleCountOnBoot = useSelector((state) => {
    return state.setPeopleCountOnBoot;
  });

  const { error: setPeopleCountOnBootError, success: setPeopleCountOnBootSuccess, setPeopleCountOnBootInfo } = setPeopleCountOnBoot;

  const setAnalyzer = useSelector((state) => {
    return state.setAnalyzer;
  });

  const { error: AnalyzerError, success: AnalyzerSuccess,
    setAnalyzerInfo } = setAnalyzer;



  useEffect(() => {

    let userData = JSON.parse(localStorage.getItem("user") || null)
    if (!userData) {
      navigate("/");
    }

    if (setConfigError) {
      alert.error("Configuration service failed")
      dispatch(clearErrorsConfig())
    }

    if (setConfigSuccess && setConfigInfo === "start") {
      alert.success("Configuration service started")
      dispatch(clearSuccessConfig())
    } else if (setConfigSuccess && setConfigInfo === "stop") {
      alert.success("Configuration service stopped")
      dispatch(clearSuccessConfig())
    }


    if (setOccupancyError) {
      alert.error("Desk Occupancy service failed")
      dispatch(clearErrorsOccupancy())
    }

    if (setOccupancySuccess && setOccupancyInfo === "start") {
      alert.success("Desk Occupancy service started")
      dispatch(clearSuccessOccupancy())
    }
    else if (setOccupancySuccess && setOccupancyInfo === "stop") {
      alert.success("Desk Occupancy service stopped")
      dispatch(clearSuccessOccupancy())
    }
    else if (setOccupancySuccess && setOccupancyInfo === "enable") {
      alert.success("Desk Occupancy service enabled")
      dispatch(clearSuccessOccupancy())
    }
    else if (setOccupancySuccess && setOccupancyInfo === "disable") {
      alert.success("Desk Occupancy service disabled")
      dispatch(clearSuccessOccupancy())
    }


    if (setOccupancyCountError) {
      alert.error("Occupancy count service failed")
      dispatch(clearErrorsOccupancyCount())
    }

    if (setOccupancyCountSuccess && setOccupancyCountInfo === "start") {
      alert.success("Occupancy count service started")
      dispatch(clearSuccessOccupancyCount())
    }
    else if (setOccupancyCountSuccess && setOccupancyCountInfo === "stop") {
      alert.success("Occupancy count service stopped")
      dispatch(clearSuccessOccupancyCount())
    }
    else if (setOccupancyCountSuccess && setOccupancyCountInfo === "enable") {
      alert.success("Occupancy count service enabled")
      dispatch(clearSuccessOccupancyCount())
    }
    else if (setOccupancyCountSuccess && setOccupancyCountInfo === "disable") {
      alert.success("Occupancy count service disabled")
      dispatch(clearSuccessOccupancyCount())
    }

    if (setPeopleCountError) {
      alert.error("People Count service disabled")
      dispatch(clearErrorsPeopleCount())
    }

    if (setPeopleCountSuccess && setPeopleCountInfo === "start") {
      alert.success("People Count service started")
      dispatch(clearSuccessPeopleCount())
    } else if (setPeopleCountSuccess && setPeopleCountInfo === "stop") {
      alert.success("People Count service stopped")
      dispatch(clearSuccessPeopleCount())
    }

    if (setPeopleCountOnBootError) {
      alert.error("People Count service on boot service failed")
      dispatch(clearErrorsPeopleCountOnBoot())
    }

    if (setPeopleCountOnBootSuccess && setPeopleCountOnBootInfo === "enable") {
      alert.success("PeopleCount service on boot enabled")
      dispatch(clearSuccessPeopleCountOnBoot())
    } else if (setPeopleCountOnBootSuccess && setPeopleCountOnBootInfo === "disable") {
      alert.success("PeopleCount service on boot disabled")
      dispatch(clearSuccessPeopleCountOnBoot())
    }

    if (AnalyzerError) {
      alert.error("Analyzer service failed")
      dispatch(clearErrorsAnalyzer())
    }
    if (AnalyzerSuccess && setAnalyzerInfo === "start") {
      alert.success("Analyzer service started")
      dispatch(clearSuccessAnalyzer())
    } else if (AnalyzerSuccess && setAnalyzerInfo === "stop") {
      alert.success("Analyzer service stopped")
      dispatch(clearSuccessAnalyzer())
    }



    else {
      dispatch(setServiceStatusAction(navigate))
    }


  }, [setOccupancyInfo,
    setPeopleCountInfo,
    AnalyzerError,
    AnalyzerSuccess,
    setAnalyzerInfo, setConfigInfo, setPeopleCountOnBootInfo,
    userInfo, dispatch, navigate, serviceSuccess, setConfigError,
    setConfigSuccess, alert, setOccupancyError, setOccupancySuccess,
    setPeopleCountError, setPeopleCountSuccess, setPeopleCountOnBootError, setPeopleCountOnBootSuccess,
    setOccupancyCountError,
    setOccupancyCountSuccess,
    setOccupancyCountInfo


  ])




  return (
    <>

      <Helmet>
        <title>Pixel Sensor: Services</title>
        <meta name="description" content="Quick buttons to start/stop service, service enable/disable on reboot, and reboot the device." />
      </Helmet>
      {serviceSuccess !== true ? <Loader /> : (

        <Paper
          style={{
            maxWidth: 950,
            minHeight: 450,
            padding: "30px 33px",
            margin: "25px auto",
          }}
          elevation={20}
        >


          <Typography
            className='sectionHeading'
      
            component='p'
            gutterBottom
          >
            Quick buttons to start/stop service, service enable/disable on reboot, and reboot the device.
          </Typography>

          <TableContainer component={Paper}>
            <Table aria-label='simple table'>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <strong>Configuration</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      style={{ backgroundColor: "#39a339" }}
                      variant='contained'

                      size='small'
                      onClick={() => setConfigService("start")}
                      disabled={serviceStarted || servicesConfig1 || servicesConfig2 || servicesConfig3}

                    >
                      Start
                    </Button>
                  </TableCell>
                  <TableCell align='left'>
                    <Button
                      style={{ backgroundColor: "red" }}
                      variant='contained'
                      size='small'
                      onClick={() => setConfigService("stop")}
                      disabled={((serviceStarted && !setServiceStatusInfo[0].isActive) || servicesConfig1 || servicesConfig2 || servicesConfig3)}
                   
                    >
                      Stop
                    </Button>
              
                  </TableCell>

                  <TableCell align='right'>
                    <Button
                      variant='outlined'
                      size='small'
                      sx={{ minWidth: "75px" }}
                      disabled={(serviceStarted && !setServiceStatusInfo[0].isActive) || setServiceStatusInfo[2].isDisabled === false || setServiceStatusInfo[4].isDisabled === false || setServiceStatusInfo[1].isDisabled === false}
      
                    >
                      {/* #3f51b5 */}
                      <a

                        style={{
                          textDecoration: "none",
                          color:
                            (serviceStarted && !setServiceStatusInfo[0].isActive) ||
                              setServiceStatusInfo[2].isDisabled === false ||
                              setServiceStatusInfo[4].isDisabled === false ||
                              setServiceStatusInfo[1].isDisabled === false
                              ? "grey"
                              : "#3f51b5",
                        }}



                        target="_blank" rel="noreferrer" href={`${window.location.protocol}//${window.location.hostname}:5000`}>       OPEN CONFIG TOOL  </a>
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <strong>Desk Occupancy</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      style={{ backgroundColor: "#39a339" }}
                      variant='contained'
       
                      size='small'
                      onClick={() => setOccupancyService("start")}
                      disabled={setServiceStatusInfo[1].isDisabled || serviceStarted}
                    >
                      Start
                    </Button>
                  </TableCell>
                  <TableCell align='left'>
                    <Button
                      style={{ backgroundColor: "red" }}
                      variant='contained'
                      size='small'
                      onClick={() => setOccupancyService("stop")}
                      disabled={setServiceStatusInfo[1].isDisabled || (serviceStarted && !setServiceStatusInfo[1].isActive)}
                    >
                      Stop
                    </Button>
                  </TableCell>

                  <TableCell align='right'>
                    <Button
                      variant='outlined'
                      sx={{ minWidth: "143px" }}
                      size='small'
                      onClick={() => setOccupancyService("enable")}
                      disabled={!setServiceStatusInfo[1].isDisabled || !setServiceStatusInfo[2].isDisabled || !setServiceStatusInfo[4].isDisabled || setServiceStatusInfo[3].isActive || setServiceStatusInfo[0].isActive}

      
                    >
                      ENABLE ON BOOT
                    </Button>
                  </TableCell>

                  <TableCell align='left'>
                    <Button
                      variant='outlined'
                  
                      sx={{ minWidth: "143px" }}
                      size='small'
                      onClick={() => setOccupancyService("disable")}
                      disabled={(setServiceStatusInfo[1].isDisabled)}
            
                    >
                      DISABLE ON BOOT
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <strong>People Count</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      style={{ backgroundColor: "#39a339" }}
                      variant='contained'
             
                      size='small'
                      onClick={() => setPeopleCountService("start")}
                      disabled={setServiceStatusInfo[2].isDisabled || serviceStarted}

                    >
                      Start
                    </Button>
                  </TableCell>
                  <TableCell align='left'>
                    <Button
                      style={{ backgroundColor: "red" }}
                      variant='contained'
    
                      size='small'
                      onClick={() => setPeopleCountService("stop")}
                      disabled={setServiceStatusInfo[2].isDisabled || (serviceStarted && !setServiceStatusInfo[2].isActive)}
                  
                    >
                      Stop
                    </Button>
                  </TableCell>

                  <TableCell align='right'>
                    <Button
                      variant='outlined'
              
                      sx={{ minWidth: "143px" }}
                      size='small'
                      onClick={() => setPeopleCountServiceOnBoot("enable")}
                      disabled={!setServiceStatusInfo[2].isDisabled || !setServiceStatusInfo[1].isDisabled || !setServiceStatusInfo[4].isDisabled || setServiceStatusInfo[3].isActive || setServiceStatusInfo[0].isActive}

                   
                    >
                      ENABLE ON BOOT
                    </Button>
                  </TableCell>

                  <TableCell align='left'>
                    <Button
                      variant="outlined"
              
                      sx={{ minWidth: "143px" }}
                      size='small'
                      onClick={() => setPeopleCountServiceOnBoot("disable")}
                      disabled={setServiceStatusInfo[2].isDisabled}
                
                    >
                      DISABLE ON BOOT
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <strong>Occupancy & Counting</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      style={{ backgroundColor: "#39a339" }}
                      variant='contained'
                 
                      size='small'
                      onClick={() => setOccupancyCountingService("start")}
                      disabled={setServiceStatusInfo[4].isDisabled || serviceStarted}
                   
                    >
                      Start
                    </Button>
                  </TableCell>
                  <TableCell align='left'>
                    <Button
                      style={{ backgroundColor: "red" }}
                      variant='contained'

                      size='small'
                      onClick={() => setOccupancyCountingService("stop")}
                      disabled={(setServiceStatusInfo[4].isDisabled || (serviceStarted && !setServiceStatusInfo[4].isActive))}
                    
                    >
                      Stop
                    </Button>
                  </TableCell>

                  <TableCell align='right'>
                    <Button
                      variant='outlined'
                      sx={{ minWidth: "143px" }}
                      size='small'
                      onClick={() => setOccupancyCountingService("enable")}
                      disabled={!setServiceStatusInfo[4].isDisabled || !setServiceStatusInfo[1].isDisabled || !setServiceStatusInfo[2].isDisabled || setServiceStatusInfo[3].isActive || setServiceStatusInfo[0].isActive}

                    >
                      ENABLE ON BOOT
                    </Button>
                  </TableCell>

                  <TableCell align='left'>
                    <Button
                      variant='outlined'
                    
                      sx={{ minWidth: "143px" }}
                      size='small'
                      onClick={() => setOccupancyCountingService("disable")}

                      disabled={(setServiceStatusInfo[4].isDisabled)}
                   
                    >
                      DISABLE ON BOOT
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <strong>Analyzer </strong>
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      style={{ backgroundColor: "#39a339" }}
                      variant='contained'
                 
                      size='small'
                      onClick={() => setAnalyzerService("start")}
                      disabled={serviceStarted || servicesConfig1 || servicesConfig2 || servicesConfig3}
                
                    >
                      Start
                    </Button>
                  </TableCell>
                  <TableCell align='left'>
                    <Button
                      style={{ backgroundColor: "red" }}
                      variant='contained'

                      size='small'
                      onClick={() => setAnalyzerService("stop")}
                      disabled={(serviceStarted && !setServiceStatusInfo[3].isActive) || servicesConfig1 || servicesConfig2 || servicesConfig3}

                    >
                      Stop
                    </Button>
                  </TableCell>

                </TableRow>




              </TableBody>
            </Table>
          </TableContainer>



          <Box>


            <form >
              <Grid container spacing={1} sx={{ mt: 2 }}>
                <Grid xs={12} item>
                  <Typography
                    variant='body2'
                    color='purple'
                    component='p'
                    gutterBottom
                  >
                    Reboot Device
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid xs={3} item>

                      <TextField
                        placeholder='Type REBOOT if reboot is needed'
                        label='Type REBOOT'
                        variant='standard'
                        fullWidth
                        size='small'
                        required
                        onChange={rebootButtonClick}
                      />
                    </Grid>
                  </Grid>


                  <Box textAlign='right'>
                    <Button
                      variant='outlined'
                      type='submit'
                      sx={{ mt: 1.5, mb: 2.5, minWidth: "170px" }}
                      size='small'
                      disabled={reboot !== "REBOOT"}
                      onClick={rebootServerButton}
                    >
                      REBOOT
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>







        </Paper>
      )}

    </>
  );
};

export default ServicesScreen;
