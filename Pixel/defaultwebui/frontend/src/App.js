
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  App.js

Brief:  It contains routes of all screens.

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import Footer from "./components/Footer.jsx";
import Navigation from "./components/Navigation";
import SensorScreen from "./screens/SensorScreen";
import MqttScreen from "./screens/MqttScreen";
import MqttScreenTwo from "./screens/Mqtt2Screen";
import NetworkScreen from "./screens/NetworkScreen";
import ServicesScreen from "./screens/ServicesScreen";
import AdminScreen from "./screens/AdminScreen";
import SystemInfo from "./screens/SystemInfo.jsx";

// import DashboardScreen from "./screens/DashboardScreen";
import Icon from "./screens/DashboardScreen"
import store from "./store";
import { loadUser, logout } from "./actions/userActions";



function App() {

  window.addEventListener("unload", (event) => {
    store.dispatch(logout());


  });


  // user always remain present. No need to use use localStorage
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <main className='py-3'>
        <Routes>
          <Route path='/' element={<LoginScreen />} />

          <Route
            path='/admin'
            element={
              <>
                <Navigation />
                <AdminScreen />
              </>
            }
          />

          <Route
            path='/inference'
            element={
              <>
                <Navigation />
                <SensorScreen />
              </>
            }
          />
          <Route
            path='/mqtt'
            element={
              <>
                <Navigation />
                <MqttScreen />
              </>
            }
          />
          <Route
            path='/mqtt_two'
            element={
              <>
                <Navigation />
                <MqttScreenTwo />
              </>
            }
          />

          <Route
            path='/network'
            element={
              <>
                <Navigation />
                <NetworkScreen />
              </>
            }
          />

          <Route
            path='/service'
            element={
              <>
                <Navigation />
                <ServicesScreen />
              </>
            }
          />


          <Route
            path='/dashboard'
            element={
              <>
                <Navigation />
                <Icon />
              </>
            }
          />

          <Route
            path='/system-info'
            element={
              <>
                <Navigation />
                <SystemInfo />
              </>
            }
          />
        </Routes>



      </main>

      <Footer />
    </>
  );
}

export default App;
