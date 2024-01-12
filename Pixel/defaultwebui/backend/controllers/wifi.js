/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  wifi.js

Brief:  It contains all controllers related to WIFI route. 

Project: Pixel Sensor

Release version: version 2.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: whatever inside "ADDED BY MT" are the addition.
 ..........................*/

const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const { exec } = require("child_process");

const fs = require("fs");
const path = require("path");



exports.connectWifi = (req, res, next) => {
  console.log("connectWifi");

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "Server side validation failed",
      errors: errors.array(),
    });
  }
  const { ssid, psk } = req.body;
  console.log(
    "/home/Db50Gw/stop_ap.sh " +
    "'\"" +
    ssid +
    "\"'" +
    " " +
    "'\"" +
    psk +
    "\"'"
  );
  exec(
    "/home/Db50Gw/stop_ap.sh " +
    "'\"" +
    ssid +
    "\"'" +
    " " +
    "'\"" +
    psk +
    "\"'",
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      } else if (stderr) {
        console.log(`stderr: ${stderr}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: stderr });
      } else {
        console.log(`stdout: ${stdout}`);
        /**** Added by Lokesh CJ ****/
        const config = JSON.parse(fs.readFileSync("./config.json"));
        config.network_info.ssid = ssid;
        fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
        /**** Added by Lokesh CJ ****/
        res.status(StatusCodes.OK).json({ message: "connecting" });
      }
    }
  );
};

exports.startAp = (req, res, next) => {
  exec("/home/Db50Gw/start_ap.sh", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    } else if (stderr) {
      console.log(`stderr: ${stderr}`);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: stderr });
    } else {
      console.log(`stdout: ${stdout}`);
      res.status(StatusCodes.OK).json({ message: "started AP" });
    }
  });
};

/****  Added by Lokesh CJ ****/

exports.staticNwkParameters = (req, res, next) => {



  if (req.body.static_ip === "" || req.body.gateway_ip === "") {
    exec(
      "/home/Db50Gw/defaultwebui/ip_config.sh",
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: error.message });
        } else if (stderr) {
          console.log(`stderr: ${stderr}`);
          res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: stderr });
        } else {
          console.log(`stdout: ${stdout}`);
          const config = JSON.parse(fs.readFileSync("./config.json"));
          config.network_info.static_ip = req.body.static_ip;
          config.network_info.gateway_ip = req.body.gateway_ip;
          config.network_info.nwk_interface = req.body.nwk_interface;
          fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
          return res
            .status(StatusCodes.OK)
            .json({ message: "Static parameters unset " });
        }
      }
    );
    return;
  }

  exec(
    "/home/Db50Gw/defaultwebui/ip_config.sh " +
    req.body.nwk_interface +
    " " +
    req.body.static_ip +
    " " +
    req.body.gateway_ip,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      } else if (stderr) {
        console.log(`stderr: ${stderr}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: stderr });
      } else {
        console.log(`stdout: ${stdout}`);
        const config = JSON.parse(fs.readFileSync("./config.json"));
        config.network_info.static_ip = req.body.static_ip;
        config.network_info.gateway_ip = req.body.gateway_ip;
        config.network_info.nwk_interface = req.body.nwk_interface;
        fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
        res.status(StatusCodes.OK).json({ message: "Static parameters set " });
      }
    }
  );
};

  /******************  Added by MOHAK T*************/

exports.getNetworkInfo = (req, res, next) => {
  const config = JSON.parse(fs.readFileSync("./config.json"));
  res.status(StatusCodes.OK).json(config.network_information);
};


exports.wifiCredentials = (req, res, next) => {

  const {
    SSID,
    password
  } = req.body;



  const config = JSON.parse(fs.readFileSync("./config.json"));

  config.network_information.wifi_cred_ssid = SSID;
  config.network_information.wifi_cred_pass = password;

  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
  res.status(StatusCodes.OK).json({ message: "wifi credentials saved" });
};
  /******************  Added by MOHAK T*************/

    /******************  Added by MOHAK T*************/

exports.staticIpWifi = (req, res, next) => {

  const {
    static_ip,
    gateway_ip,
    netmask
  } = req.body;


  const config = JSON.parse(fs.readFileSync("./config.json"));

  config.network_information.static_ip = static_ip;
  config.network_information.static_ip_gateway = gateway_ip;
  config.network_information.netmask = netmask 

  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
  res.status(StatusCodes.OK).json({ message: "static ip wifi is saved" });
};



exports.wifiCredentialsApply = (req, res, next) => {
  exec(
    "/home/Db50Gw/WebUIServices/wificred_bridge.sh",
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      } else if (stderr) {
        console.log(`stderr: ${stderr}`);
        res.status(StatusCodes.OK).json({ message: stderr });
      } else {      
        res.status(StatusCodes.OK).json({ message: "wifi credentials apply params saved"  });
      }
    }
  );

};


exports.staticIpWifiApply = (req, res, next) => {

  exec(
    "/home/Db50Gw/WebUIServices/staticip.sh",
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      } else if (stderr) {
        console.log(`stderr: ${stderr}`);
        res.status(StatusCodes.OK).json({ message: stderr });
      } else {      
        res.status(StatusCodes.OK).json({ message: "static ip-apply set" });
      }
    }
  );
};


