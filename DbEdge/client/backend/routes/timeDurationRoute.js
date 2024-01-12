const express = require("express");

const router = express.Router();

const {
    timeDuration,
    getTimeDuration,
    getRefershTimeStamp
} = require("../controllers/timeDurationController");

const { isAuthenticatedUser } = require("../middlewares/auth");


router.route("/time-duration").post(isAuthenticatedUser,   timeDuration);

router.route("/time-duration").get(isAuthenticatedUser,   getTimeDuration );
router.route("/time-stamp").get(isAuthenticatedUser,   getRefershTimeStamp );


module.exports = router;