/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  wifi.js (routes folder)

Brief:  It contains all routes logic related to wifi including authentication and authorization. 
Project: Pixel Sensor

Release version: version 2.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: whatever inside "ADDED BY MT" are the addition.
 ..........................*/

const { body } = require("express-validator");

const {

  startAp,
  staticNwkParameters,
  getNetworkInfo,
  wifiCredentials,
  staticIpWifi,
  wifiCredentialsApply,
  staticIpWifiApply
} = require("../controllers/wifi");

const { authorizeRoles, authentication } = require("../middelware/is-auth.js"); 

/**** Edited By Lokesh CJ****/
const { Router } = require("express");

// const { get } = require("./config");
const { getNtpServer } = require("../controllers/config");

const router = Router();

router.use(authentication );

router.get("/start_ap", startAp);



 /******************  Added by MOHAK T*************/
router.post(
  "/cred",
  authorizeRoles("Production", "Support"), 
  wifiCredentials
);

//Done -current
router.post(
  "/staticipwifi",
  authorizeRoles("Production", "Support"), 
  staticIpWifi
);



/**** Commented by Mohak T => NOT USED****/
router.post(
  "/static",
  // [body("nwk_interface", "invalid ssid").isString().isLength({ min: 1 })],
  staticNwkParameters
);



router.get("/nwk", authorizeRoles("Production", "Support"), getNetworkInfo);



//apply
router.get(
  "/cred_apply",
  authorizeRoles("Production", "Support"), 
  wifiCredentialsApply
);

router.get(
  "/staticipwifi_apply",
  authorizeRoles("Production", "Support"), 
  staticIpWifiApply
);


 /******************  Added by MOHAK T*************/
module.exports = router;
