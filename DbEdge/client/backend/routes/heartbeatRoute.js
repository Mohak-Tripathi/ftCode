const express = require("express");

const router = express.Router();

const {
  heartBeatData

} = require("../controllers/heartbeatController");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/heart-beat").get( isAuthenticatedUser, heartBeatData);



module.exports = router;
