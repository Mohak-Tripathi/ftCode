
/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  Store.js

Brief:  configure redux store, also contain rootreducer and initial State. 
Note=> Not used "REDUX-TOOLKIT" => Intended to use in next version. 

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import thunk from "redux-thunk";

import { userLoginReducer } from "./reducers/userReducer";


import {
  mqttRegisterReducer,
  mqttSavedataReducer,
  mqttProtocolCertReducer ,
  getMqttCertReducer,
  applyMqttReducer
} from "./reducers/mqttReducer";

import {
  mqttTwoSaveDataReducer,
  mqttTwoRegisterReducer,
  getMqttTwoCertReducer,
  mqttTwoProtocolCertReducer,
  applyMqttTwoReducer

} from "./reducers/mqtt2Reducer";


import {
  setConfigReducer,
  setOccupancyReducer,
  setPeopleCountReducer,
  setAnalyzerReducer,
  setPeopleCountServiceOnBootReducer,
  rebootReducer,
  setServiceStatusReducer,
  setOccupancyCountReducer 
} from "./reducers/serviceReducer";


import {
   sensorReducer, 
  getSensorReducer,
  applySensorReducer} from "./reducers/sensorReducer";

import { variantReducer , 
  apModessidPassReducer,  
   adminReducer,
   otaReducer,
   adminWifiStatusReducer,
  getAdminInfoReducer, 
   applyAdminSSIDReducer,
   applyAdminSSIDPassReducer,
   applyWifiStatusReducer,
   applyVariantStatusReducer,
   adminSshStatusReducer,
   applySshStatusReducer, 
   applyVncStatusReducer,
   adminVncStatusReducer,
   applyOTAReducer 
  } from "./reducers/adminReducer";

import {
  ntpNetworkReducer,
  wifiNetworkReducer,
  wifiCredNetworkReducer,
  getNetworkInfoReducer,
  applyWifiCredReducer,
  applyStaticIpReducer,
  applyNtpReducer
} from "./reducers/networkReducer";

import {
  DashboardInfoDataReducer
  } from "./reducers/dashboardReducer"

  import {
    systemInfoDataReducer
    } from "./reducers/systemInfoReducer"
  

const rootreducer = combineReducers({
  userLogin: userLoginReducer,
  mqttRegister: mqttRegisterReducer,
  mqttSavedata: mqttSavedataReducer,
  getMqttCert: getMqttCertReducer,
  setConfig: setConfigReducer,
  setOccupancy: setOccupancyReducer,
  setPeopleCount: setPeopleCountReducer,
  setPeopleCountOnBoot: setPeopleCountServiceOnBootReducer,
  setAnalyzer: setAnalyzerReducer,
  setOccupancyCount:   setOccupancyCountReducer,
  reboot: rebootReducer,
  sensor: sensorReducer,
  getSensor: getSensorReducer,
  variant: variantReducer,
  ota: otaReducer,
  ntpNetwork: ntpNetworkReducer,
  wifiNetwork: wifiNetworkReducer,
  wifiCredNetwork: wifiCredNetworkReducer,
  admin: adminReducer,
  adminWifiStatus: adminWifiStatusReducer,
  getAdminInfo : getAdminInfoReducer,
  adminSshStatus: adminSshStatusReducer,
  adminVncStatus: adminVncStatusReducer,
  getNetworkInfo: getNetworkInfoReducer,
  setServiceStatus: setServiceStatusReducer,
  apModessidPass: apModessidPassReducer,
  mqttProtocolCert: mqttProtocolCertReducer,
  DashboardInfo:  DashboardInfoDataReducer,
  mqttTwoSaveData: mqttTwoSaveDataReducer,
  mqttTwoRegister: mqttTwoRegisterReducer,
  mqttTwoProtocolCert: mqttTwoProtocolCertReducer,
  getMqttTwoCert:getMqttTwoCertReducer,
  systemInfoData:  systemInfoDataReducer,
  applyAdminSSID:applyAdminSSIDReducer,
  applyAdminSSIDPass:applyAdminSSIDPassReducer,
  applyWifiStatus:applyWifiStatusReducer,
  applyVariantStatus:applyVariantStatusReducer,
  applySensor:  applySensorReducer,
  applyMqtt: applyMqttReducer,
  applyMqttTwo:applyMqttTwoReducer,
  applyWifiCred:applyWifiCredReducer,
  applyStaticIp:applyStaticIpReducer,
  applyNtp:applyNtpReducer,
  applySshStatus:applySshStatusReducer,
  applyVncStatus: applyVncStatusReducer,
  applyOTA: applyOTAReducer 
});


const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;


  
const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
  rootreducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
