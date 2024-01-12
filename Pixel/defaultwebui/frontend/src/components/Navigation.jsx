
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  Navigation.jsx

Brief:  It contains navigation bar.

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/


import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button
} from "@mui/material";

import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import SensorsIcon from '@mui/icons-material/Sensors';
import CellTowerIcon from '@mui/icons-material/CellTower';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';

import PieChartIcon from '@mui/icons-material/PieChart';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from "react-router-dom";
import { logout } from "../actions/userActions"

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAdminInfoAction } from "../actions/adminActions";


const Navigation = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const logoutHandler = () => {

    dispatch(logout(navigate));
    navigate("/")

  }


  const variantData = useSelector((state) => {
    return state.variant;
  });

  const { variantInfo } = variantData;

  const getAdminInfo = useSelector((state) => {
    return state.getAdminInfo;
  });

  const { getAdminInfoData } = getAdminInfo;


  const userLogin = useSelector((state) => {
    return state.userLogin;
  });


  const { userInfo } = userLogin;

  const NavLinkStyles = ({ isActive }) => {
    return {
      color: "white",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none"
    }
  }

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("user") || null)

    if (!userData) {
      navigate("/")
    }
    else {


      dispatch(getAdminInfoAction(navigate))


    }
  }, [dispatch, navigate, variantInfo])


  return (
    <AppBar position='static' >

      <Toolbar className='navbarHeading'>
     
        <div>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>

            FLAMENCOTECH{" "}
          </Typography>
        </div>

        <div>
          <Stack direction='row' spacing={0.5}>


            {(userInfo && userInfo.user.role === "Production") && (
              <NavLink style={NavLinkStyles} to='/admin'>

                <Button color='inherit' startIcon={< AdminPanelSettingsIcon />} >
                  Admin
                </Button>{" "}
              </NavLink>

            )}


            {userInfo && (userInfo.user.role === "Production" || userInfo.user.role === "Support") ? (

              <NavLink style={NavLinkStyles} to='/service'>

                <Button color='inherit' startIcon={<MiscellaneousServicesIcon />}>
                  Services
                </Button>
              </NavLink>
            ) : null}




            {userInfo && userInfo.user.role === "Production" && (

              <NavLink style={NavLinkStyles} to='/inference'>

                <Button color='inherit' startIcon={<SensorsIcon />}> Inference </Button>{" "}
              </NavLink>
            )}


            {(getAdminInfoData && getAdminInfoData.variant === "MQTT") && (userInfo && (userInfo.user.role === "Production" || userInfo.user.role === "Support")) ? (
              <NavLink style={NavLinkStyles} to='/mqtt'>

                <Button color='inherit' startIcon={< SettingsEthernetIcon />}> MQTT-1 </Button>{" "}
              </NavLink>

            ) : null}

            {userInfo && (userInfo.user.role === "Production" || userInfo.user.role === "Support") && (getAdminInfoData && getAdminInfoData.variant === "MQTT") ? (
              <NavLink style={NavLinkStyles} to='/mqtt_two'>

                <Button color='inherit' startIcon={< SettingsEthernetIcon />}> MQTT-2</Button>{" "}
              </NavLink>

            ) : null}


            {userInfo && (userInfo.user.role === "Production" || userInfo.user.role === "Support") && (getAdminInfoData && getAdminInfoData.variant === "MQTT") ? (

              <NavLink style={NavLinkStyles} to='/network'>
                <Button color='inherit' startIcon={< CellTowerIcon />} > Network </Button>{" "}
              </NavLink>

            ) : null}



            <NavLink style={NavLinkStyles} to='/dashboard'>
              {" "}
              <Button color='inherit' startIcon={< PieChartIcon />}>
                Dashboard
              </Button>{" "}
            </NavLink>




            {userInfo && userInfo.user.role === "Production" && (

              <NavLink style={NavLinkStyles} to='/system-info'>

                <Button color='inherit' startIcon={<SensorsIcon />}> System-Info </Button>{" "}
              </NavLink>
            )}


          
            <Button color='inherit' startIcon={< LogoutIcon />} onClick={logoutHandler}> Logout </Button>
         


          </Stack>

        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
