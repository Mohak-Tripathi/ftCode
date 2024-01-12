const express = require("express");

const router = express.Router();

const {
    heartbeatTrafficData,
    heartbeatTrafficPostData
} = require("../controllers/hearbeatTrafficController");

const { isAuthenticatedUser} = require("../middlewares/auth");

router.route("/heartbeat-traffic-data").get(isAuthenticatedUser, heartbeatTrafficData);
router.route("/heartbeat-traffic-data-post").post(isAuthenticatedUser, heartbeatTrafficPostData);

module.exports = router;