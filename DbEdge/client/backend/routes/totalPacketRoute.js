
const express = require("express");

const router = express.Router();

const {
  totalPacketPerBucket
} = require("../controllers/totalPacketController");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/total-packet-per-bucket").get(isAuthenticatedUser, totalPacketPerBucket);


module.exports = router;