/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  service.js (routes folder)

Brief:  It contains all routes logic related to service including authentication and authorization. 
Project: Pixel Sensor

Release version: version 2.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: whatever inside "ADDED BY MT" are the addition.
 ..........................*/

const { body } = require("express-validator");
const {
  powerOff,
  getSerivceStatus,
  configServer,
  occupancyAlgo,
  peopleCountAlgo,
  peopleCountAlgoOnBoot,
 dashboardInfo ,
   analyzerAlgo,
   occupancyCountAlgo
} = require("../controllers/service");

const { authorizeRoles, authentication } = require("../middelware/is-auth.js");

const { Router } = require("express");
const router = Router();
 /******************  Added by MOHAK T*************/
 router.use(authentication);
router.get("/status", authorizeRoles("Production", "Support"), getSerivceStatus);

router.post("/power_off", authorizeRoles("Production", "Support"), powerOff);

router.post(
  "/config_service",
  authorizeRoles("Production", "Support"),
  [
    body("status", "invalid status")
      .isString()
      .custom((status) => {
        if (status === "stop" || status === "start") {
          return true;
        }
        return false;
      }),
  ],
  configServer
);

router.post(
  "/occupancy_service",
  authorizeRoles("Production", "Support"),
  [
    body("status", "invalid status")
      .isString()
      .custom((status) => {
        if (
          status === "stop" ||
          status === "start" ||
          status === "enable" ||
          status === "disable"
        ) {
          return true;
        }
        return false;
      }),
  ],
  occupancyAlgo
);

router.post(
  "/occupancy_count_service",
  authorizeRoles("Production", "Support"),
  [
    body("status", "invalid status")
      .isString()
      .custom((status) => {
        if (
          status === "stop" ||
          status === "start" ||
          status === "enable" ||
          status === "disable"
        ) {
          return true;
        }
        return false;
      }),
  ],
  occupancyCountAlgo
);



router.post(
  "/analyzer_service",
  authorizeRoles("Production", "Support"),
  [
    body("status", "invalid status")
      .isString()
      .custom((status) => {
        if (
          status === "stop" ||
          status === "start" 
        ) {
          return true;
        }
        return false;
      }),
  ],
  analyzerAlgo
);

router.get("/dashboard_info", dashboardInfo)




router.post(
  "/people_count_service",
  authorizeRoles("Production", "Support"),
  [
    body("status", "invalid status")
      .isString()
      .custom((status) => {
        if (
          status === "stop" ||
          status === "start" ||
          status === "enable" ||
          status === "disable"
        ) {
          return true;
        }
        return false;
      }),
  ],
  peopleCountAlgo
);

router.post(
  "/people_count_service_on_boot",
  authorizeRoles("Production", "Support"),
  [
    body("status", "invalid status")
      .isString()
      .custom((status) => {
        if (status === "enable" || status === "disable") {
          return true;
        }
        return false;
      }),
  ],
  peopleCountAlgoOnBoot
);

 /******************  Added by MOHAK T*************/
module.exports = router;
