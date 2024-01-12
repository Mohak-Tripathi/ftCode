/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  is-auth.js

Brief:  It contains authentication and authorization logic. 

Project: Pixel Sensor

Release version: version 2.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: whatever inside "ADDED BY MT" are the addition.
 ..........................*/

const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");


const authentication = (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]

      const decrypt = jwt.verify(token, "pixelSensorProject@fTIoTDev");

      const config = JSON.parse(fs.readFileSync("./config.json"));

      let targetObject = config.credentials.filter((elem) => {
        return elem.app_user === decrypt.username;
      });

      req.username = targetObject[0];
      next()
    }
    catch (error) {

      res.status(401)
      console.log("Token failed, bad token ")
      throw new Error("Token failed, bad token ")
    }

  } else {
    if (!token) {
      console.log(token, "token")
      res.status(401)

      throw new Error("Not authorized, no Token ")
    }


  }




};







//***************Added by Mohak****************/

// Handling users roles
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.username.role)) {   //req.username attched in authentication

      return res.status(403).json({ message: "Not Authorized" });

    }


    next()
  }
}
/******************  Added by MOHAK T*************/
module.exports = { authentication, authorizeRoles };

