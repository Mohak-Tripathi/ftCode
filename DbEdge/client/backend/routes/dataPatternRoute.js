const express = require("express");

const router = express.Router();

const {
   dataPattern,
   dataPatternPostData
} = require("../controllers/dataPatternController.js");

const { isAuthenticatedUser} = require("../middlewares/auth");

router.route("/data-pattern").get(isAuthenticatedUser, dataPattern);
router.route("/data-pattern-post").post(isAuthenticatedUser, dataPatternPostData);

module.exports = router;