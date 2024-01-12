/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  config.js (routes folder)

Brief:  It contains all routes logic related to config including authentication and authorization. 
Project: Pixel Sensor

Release version: version 2.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: whatever inside "ADDED BY MT" are the addition.
 ..........................*/

const { body } = require("express-validator");

const {
  saveMqtt,
  getMqtt,
  getSensor,
  saveSensor,
  fileUploadHandler,
  resetMqtt,
  changeNtpServer,
  logout,
  changeApModeSsid,
  changeSshStatus,
  setVariant,
  changeApModePassword,
  certMqtt,
  changeWifiStatus,
  getAdminInfo,
  getMqttTwo,
  saveMqttTwo,
  fileUploadHandlerTwo,
  resetMqttTwo,
  certMqttTwo,
  setApplyVariant,
  changeApModeSsidApply,
  changeApModePasswordApply,
  changeWifiStatusApply,
  saveSensorApply,
  saveMqttApply,
  saveMqttTwoApply,
  changeNtpServerApply,
  changeSshStatusApply,
  changeVncStatus,
  changeVncStatusApply,
  otaUploadFileHandler,
  otaUploadFileSshHandler,
  updateSystemInfo

} = require("../controllers/config");


const { authorizeRoles, authentication } = require("../middelware/is-auth.js");


const {upload, upload2, upload3} = require("../middelware/upload");
const { Router } = require("express");
const router = Router();

router.use(authentication );

router.get("/mqtt", authorizeRoles("Production", "Support"),  getMqtt);

router.get("/mqtt_two", authorizeRoles("Production", "Support"),  getMqttTwo);


router.get("/sensor", authorizeRoles("Production"),  getSensor);


router.post("/mqtt/params", authorizeRoles("Production", "Support"), saveMqtt
);

router.post("/mqtt_two/params", authorizeRoles("Production", "Support"), saveMqttTwo
);

router.post(
  "/mqtt/cert",
  authorizeRoles("Production", "Support"), 
  upload.single("mqtt_cert_file"),
  fileUploadHandler
);

router.post(
  "/mqtt_two/cert",
  authorizeRoles("Production", "Support"), 
  upload2.single("mqtt_two_cert_file"),
  fileUploadHandlerTwo
);


router.post(
  "/ota",
  authorizeRoles("Production"), 
  upload3.single("otaPixel"),
  otaUploadFileHandler
);

router.get(
  "/ota",
  authorizeRoles("Production"), 
  otaUploadFileSshHandler
);

router.get("/mqtt/cert", authorizeRoles("Production", "Support"),  certMqtt);
router.get("/mqtt_two/cert", authorizeRoles("Production", "Support"),  certMqttTwo);

router.post(
  "/sensor",
  authorizeRoles("Production"),  
  [
    body("overlap_threshold", "invalid overlap_threshold").isNumeric(),
    body("confidence_threshold", "invalid confidence_threshold").isNumeric(),
    body("resolution.width", "invalid resolution").isNumeric(),
    body("resolution.height", "invalid resolution").isNumeric(),
    body("people_count_degree", "invalid people_count_degree").isNumeric(),
  ],
  saveSensor
);


router.get("/mqtt/reset", authorizeRoles("Production", "Support"),  resetMqtt);
router.get("/mqtt_two/reset", authorizeRoles("Production", "Support"),  resetMqttTwo);


router.post("/apModeSsid",  authorizeRoles("Production"), changeApModeSsid);

router.post("/apmodessidpass", authorizeRoles("Production"),  changeApModePassword);



 /******************  Added by MOHAK T*************/
router.post("/variant", authorizeRoles("Production"), setVariant);
 /******************  Added by MOHAK T*************/


router.post(
  "/ntp_server",
  authorizeRoles("Production", "Support"),
  changeNtpServer
);



router.post(
  "/wifi_status",
  authorizeRoles("Production"),
  changeWifiStatus
);

router.post(
  "/ssh_status",
  authorizeRoles("Production"),
  changeSshStatus
);
router.post(
  "/vnc_status",
  authorizeRoles("Production"),
  changeVncStatus
);



router.get(
  "/admin_info",
  authorizeRoles("Production", "Support"),
  getAdminInfo
);


router.get("/logout", logout);



router.post(
  "/system_info",
  authorizeRoles("Production", "Support"),
  updateSystemInfo
);


// apply logic



router.get("/variant_apply", authorizeRoles("Production"), setApplyVariant);

router.get("/apmode_ssid_apply",  authorizeRoles("Production"), changeApModeSsidApply);

router.get("/apmode_ssid_pass_apply", authorizeRoles("Production"),  changeApModePasswordApply);


router.get(
  "/wifi_status_apply", authorizeRoles("Production"), changeWifiStatusApply
);

router.get(
  "/ssh_status_apply", authorizeRoles("Production"), changeSshStatusApply
);


router.get(
  "/vnc_status_apply", authorizeRoles("Production"), changeVncStatusApply
);




router.get(
  "/sensor_apply",
  authorizeRoles("Production"),
  saveSensorApply
);



router.get("/mqtt/params_apply", authorizeRoles("Production", "Support"), saveMqttApply
);

router.get("/mqtt_two/params_apply", authorizeRoles("Production", "Support"), saveMqttTwoApply
);


router.get(
  "/ntp_server_apply",
  authorizeRoles("Production", "Support"),
  changeNtpServerApply
);

/*** Admin ****/

module.exports = router;
