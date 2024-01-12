const express = require("express");

const router = express.Router();

const {
  loginDefinition

} = require("../controllers/loginController");


router.route("/login").post(loginDefinition);


module.exports = router;