const express = require("express");

const router = express.Router();
const {upload, upload1, upload2} = require('../multer/upload');
const {
   fileUpload,
   configData,
   triggerPatch,
   macFileUpload,
   telegrafFileUpload,
   telegrafConfSubmit,
   macConfSubmit,
   staticParamsConfig,
   staticParamsConfigTrigger,
   macConfDownload,
   telegrafConfDownload
} = require("../controllers/configController.js");

const { isAuthenticatedUser} = require("../middlewares/auth");

router.route("/config-data").get(isAuthenticatedUser, configData);
router.route("/trigger-patch").get(isAuthenticatedUser,    triggerPatch);

router.post('/upload', isAuthenticatedUser, upload.single('file'), fileUpload);


// ==========================================telegraf routes===============
router.post('/telegraf-conf', isAuthenticatedUser, upload1.single('telegraf'), telegrafFileUpload);
router.route("/telegraf-submit").get(isAuthenticatedUser,  telegrafConfSubmit);
router.route("/download/telegraf").get(isAuthenticatedUser,  telegrafConfDownload);
// ==========================================telegraf routes===============

router.post('/static-params', isAuthenticatedUser, staticParamsConfig);
router.get('/static-params-trigger', isAuthenticatedUser, staticParamsConfigTrigger);


router.post('/mac-conf', isAuthenticatedUser, upload2.single('mac'), macFileUpload);
router.route("/mac-submit").get(isAuthenticatedUser,  macConfSubmit);
router.route("/download/mac").get(isAuthenticatedUser,  macConfDownload);


  
module.exports = router;