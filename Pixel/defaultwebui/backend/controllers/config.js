/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  config.js

Brief:  It contains all controllers related to config route. 

Project: Pixel Sensor

Release version: version 1.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: Everything.
 ..........................*/



const { StatusCodes } = require("http-status-codes");

const { validationResult, cookie } = require("express-validator");
const fs = require("fs");
const path = require("path");
//*********** Added by Lokesh CJ*****//
const multer = require("multer");
const { exec } = require("child_process");
const { upload3} = require("../middelware/upload");







exports.getMqtt = (req, res, next) => {
  const config = JSON.parse(fs.readFileSync("./config.json"));
  res.status(StatusCodes.OK).json(config.mqtt);
};

exports.getMqttTwo = (req, res, next) => {
  const config = JSON.parse(fs.readFileSync("./config.json"));
  res.status(StatusCodes.OK).json(config.mqtt_two);
};

exports.getVariant = (req, res, next) => {
  const config = JSON.parse(fs.readFileSync("./config.json"));
  res.status(StatusCodes.OK).json(config.admin.variant);
};

exports.certMqtt = (req, res, next) => {
  const config = JSON.parse(fs.readFileSync("./config.json"));
  res.status(StatusCodes.OK).json(config.mqtt.ca);
};

exports.certMqttTwo = (req, res, next) => {
  const config = JSON.parse(fs.readFileSync("./config.json"));
  res.status(StatusCodes.OK).json(config.mqtt_two.ca);
};


exports.getSensor = (req, res, next) => {
  const config = JSON.parse(fs.readFileSync("./config.json"));
  res.status(StatusCodes.OK).json(config.inference);
};




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "mqtt_certs");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

module.exports.upload = multer({ storage: storage });



module.exports.fileUploadHandler = (req, res, next) => {

 

  const file = req.file;

    if (!file) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: "No File Choosen",
      });
    } else {

      try {

        res.status(200).json({
          message: "File upload success",
          filename: file.originalname,
        });
      } catch (err) {
        console.error('Multer error:', err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          message: "Failed to upload file",
        });
      }
    }
};

module.exports.fileUploadHandlerTwo = (req, res, next) => {



  const file = req.file;

    if (!file) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: "No File Choosen",
      });
    } else {

      try {

        res.status(200).json({
          message: "File upload success",
          filename: file.originalname,
        });
      } catch (err) {
        console.error('Multer error:', err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          message: "Failed to upload file",
        });
      }
    }
};




module.exports.otaUploadFileHandler = async (req, res, next) => {
  const file = req.file;

  if (!file) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "No File Choosen",
    });
  } else {

    try {

      res.status(200).json({
        message: "File upload success",
        filename: file.originalname,
      });
    } catch (err) {
      console.error('Multer error:', err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Failed to upload file",
      });
    }
  }
};



//*********** Added by Lokesh CJ*****//

exports.saveMqtt = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "Server side validation failed",
      errors: errors.array(),
    });
  }


  const { broker, port,   
     mqttstatus, clientid, 
     topic, health_topic, 
     mqtt_user_name, 
     mqtt_password, 
     response_topic, qos} = req.body;


  const config = JSON.parse(fs.readFileSync("./config.json"));

  config.mqtt.broker = "" + broker;
  config.mqtt.port = parseInt(port);
  config.mqtt.mqttstatus = mqttstatus;
  config.mqtt.clientid = clientid;
  config.mqtt.topic = topic;
  config.mqtt.health_topic = health_topic;
  config.mqtt.mqtt_user_name = mqtt_user_name;
  config.mqtt.mqtt_password = mqtt_password;
  config.mqtt.response_topic= response_topic;
  config.mqtt.qos= qos

  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
  res.status(StatusCodes.OK).json({ message: "Mqtt params saved" });
};




exports.saveSensor = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "Server side validation failed",
      errors: errors.array(),
    });
  }

  const {
    overlap_threshold,
    confidence_threshold,
    resolution,
    people_count_degree,
    model_input_resolution,
    iou_threshold,
    sleep_time,
    periodic_interval,
    iteration_count
  } = req.body;



  const config = JSON.parse(fs.readFileSync("./config.json"));
  
  config.inference.overlap_threshold = parseInt(overlap_threshold);
  config.inference.confidence_threshold = parseFloat(confidence_threshold);
  config.inference.resolution.width = parseInt(resolution.width);
  config.inference.resolution.height = parseInt(resolution.height);
  config.inference.people_count_degree = parseInt(people_count_degree);
  config.inference.model_input_resolution = parseInt(model_input_resolution);
  config.inference.iou_threshold = parseFloat(iou_threshold);
  config.inference.sleep_time = parseFloat(sleep_time);
  config.inference.periodic_interval = parseFloat(periodic_interval);
  config.inference.iteration_count = parseFloat(iteration_count);

  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
  res.status(StatusCodes.OK).json({ message: "Inference(sensor) params saved" });
};

//*********** Added by Lokesh CJ*****//
exports.changePassword = (req, res) => {
  const { newpassword } = req.body;


  const config = JSON.parse(fs.readFileSync("./config.json"));
  config.credentials.app_password = newpassword;
  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
  res.status(200).json({
    message: "password changed succesfully",
  });
};


//*********** Added by Mohak Tripathi*****//
exports.setVariant = (req, res) => {
  const { variantData } = req.body;


  const config = JSON.parse(fs.readFileSync("./config.json"));
  config.admin.variant = variantData;
  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
  res.status(200).json({
    message: "variant set succesfully",
  });
};

exports.resetMqtt = (req, res) => {
  // *validate password as per requiremnt
  const config = JSON.parse(fs.readFileSync("./config.json"));
  config.mqtt.ca = "";
  config.mqtt.mqtt_user_name = "";
  config.mqtt.mqtt_password = "";

  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));

  res.status(200).json({
    message: "MQTT SSL Certificate is cleared",
  });
};


exports.resetMqttTwo = (req, res) => {
  // *validate password as per requiremnt
  const config = JSON.parse(fs.readFileSync("./config.json"));
  config.mqtt_two.ca = "";
  config.mqtt_two.mqtt_user_name = "";
  config.mqtt_two.mqtt_password = "";

  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));

  res.status(200).json({
    message: "MQTT SSL Certificate is cleared",
  });
};


exports.changeNtpServer = (req, res) => {

  

  const config = JSON.parse(fs.readFileSync("./config.json"));
  config.network_information.ntp_server= req.body.ntp_server;

  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));

  res.status(200).json({
    message: "NTP Server is set",
  });
}


/****  AP Mode ****/
/******************  Edited by Lokesh CJ*************/
exports.changeApModeSsid = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "Server side validation failed",
      errors: errors.array(),
    });
  }

  exec(
    "sudo sed -i -s '3s/ssid=.*/ssid=" +
    req.body.apmodeSsidValue +
    "/' /etc/hostapd/hostapd.conf",
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      } else if (stderr) {

        res.status(StatusCodes.OK).json({ message: stderr });
      } else {
        const config = JSON.parse(
          fs.readFileSync("/home/Db50Gw/defaultwebui/config.json")
        );

        const { ap_mode_ssid } = req.body;


        config.admin.ap_mode_ssid = ap_mode_ssid;
        fs.writeFileSync(
          "/home/Db50Gw/defaultwebui/config.json",
          JSON.stringify(config, null, "\t")
        );

        res.status(StatusCodes.OK).json({ message: "ap mode ssid set" });
      }
    }
  );
};


exports.logout = async (req, res, next) => {
  res.cookie('jwt', null, {
    // expires: new Date(Date.now()),
    httpOnly: true
  })

  res.status(200).json({
    success: true,
    message: 'Logged out'
  })
}



exports.changeApModePassword = (req, res, next) => {

  let { ap_mode_ssid_pas } = req.body;

  if (ap_mode_ssid_pas) {

    const config = JSON.parse(fs.readFileSync("./config.json"));

    config.admin.ap_mode_ssid_pass = ap_mode_ssid_pas;

    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));

    res.status(200).json({
      message: "apMode SSID password is set",
    });
  }
  else {
    res.status(200).json({
      message: "apMode SSID password configration failed",
    });
  }

};




exports.changeWifiStatus = (req, res) => {
  const { wifiStatusData } = req.body;

  const config = JSON.parse(fs.readFileSync("./config.json"));
  config.admin.wifi_status= wifiStatusData;
  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
  res.status(200).json({
    message: "wifi status set succesfully",
  });
};

exports.changeSshStatus = (req, res) => {
  const { sshStatusData } = req.body;

  const config = JSON.parse(fs.readFileSync("./config.json"));
  config.admin.ssh_status= sshStatusData;
  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
  res.status(200).json({
    message: "ssh status set succesfully",
  });
};

exports.changeVncStatus = (req, res) => {
  const { vncStatusData } = req.body;

  const config = JSON.parse(fs.readFileSync("./config.json"));
  config.admin.vnc_status= vncStatusData;
  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
  res.status(200).json({
    message: "ssh status set succesfully",
  });
};




exports.updateSystemInfo = (req, res) => {
  


  const { systemInfoData } = req.body;

  const config = JSON.parse(fs.readFileSync("./config.json"));
  config.command = systemInfoData;
  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));


  exec(
    "/home/Db50Gw/WebUIServices/updateSystem.sh",
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
      } else if (stderr) {
        console.log(`stderr: ${stderr}`);
        res.status(StatusCodes.OK).json({ message: stderr });
      } else {
        console.log(`stdout: ${stdout}`);
        res.status(StatusCodes.OK).json({ message: "Info set successfully" });
      }
    }
  );

  




};





exports.getAdminInfo = (req, res, next) => {
  const config = JSON.parse(fs.readFileSync("./config.json"));
  res.status(StatusCodes.OK).json(config.admin);
};




exports.saveMqttTwo = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "Server side validation failed",
      errors: errors.array(),
    });
  }


  const { broker, port, mqttstatus, clientid, topic, health_topic, mqtt_user_name, mqtt_password, response_topic, qos} = req.body;

  const config = JSON.parse(fs.readFileSync("./config.json"));

  config.mqtt_two.broker = "" + broker;
  config.mqtt_two.port = parseInt(port);
  config.mqtt_two.mqttstatus = mqttstatus;
  config.mqtt_two.clientid = clientid;
  config.mqtt_two.topic = topic;
  config.mqtt_two.health_topic = health_topic;
  config.mqtt_two.mqtt_user_name = mqtt_user_name;
  config.mqtt_two.mqtt_password = mqtt_password;
  config.mqtt_two.response_topic= response_topic;
  config.mqtt_two.qos= qos;

  fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
  res.status(StatusCodes.OK).json({ message: "Mqtt params saved" });
};



//apply

exports.setApplyVariant = (req, res) => {
  exec(
    "/home/Db50Gw/WebUIServices/variant_bridge.sh",
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
        res.status(StatusCodes.OK).json({ message: "variant-apply set" });
      }
    }
  );

};



exports.changeApModeSsidApply = (req, res, next) => {
  exec(

    "/home/Db50Gw/WebUIServices/ssidname_bridge.sh",
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
        res.status(StatusCodes.OK).json({ message: "ap mode ssid apply set" });
      }
    }
  );
      }
 



exports.changeApModePasswordApply = (req, res, next) => {

  exec(

    "/home/Db50Gw/WebUIServices/ssidpassword_bridge.sh",
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
        res.status(StatusCodes.OK).json({ message: "ap mode ssid password apply set" });
      }
    }
  );

  }





exports.changeWifiStatusApply = (req, res) => {
 
  exec(
    "/home/Db50Gw/WebUIServices/wifistatus_bridge.sh",
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
        res.status(StatusCodes.OK).json({ message: "wifi status apply set" });
      }
    }
  );

};



exports.changeSshStatusApply = (req, res) => {
 
  exec(
    "/home/Db50Gw/WebUIServices/ssh_services.sh",
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
        res.status(StatusCodes.OK).json({ message: "ssh status apply set" });
      }
    }
  );

};


exports.changeVncStatusApply = (req, res) => {
 
  exec(
    "/home/Db50Gw/WebUIServices/vnc_services.sh",
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
        res.status(StatusCodes.OK).json({ message: "vnc status apply set" });
      }
    }
  );

};


exports.saveSensorApply = (req, res, next) => {

  exec(
    "/home/Db50Gw/WebUIServices/inference_bridge.sh",
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
        res.status(StatusCodes.OK).json({ message: "Inference(sensor) apply params saved"  });
      }
    }
  );



};



exports.otaUploadFileSshHandler = (req, res, next) => {

  exec(
    "/home/Db50Gw/WebUIServices/ota.sh",
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
        res.status(StatusCodes.OK).json({ message: "Inference(sensor) apply params saved"  });
      }
    }
  );

};



exports.saveMqttApply = (req, res) => {
 
  exec(
    "/home/Db50Gw/WebUIServices/mqtt1_bridge.sh",
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
        res.status(StatusCodes.OK).json({ message: "Mqtt-1 apply params saved"  });
      }
    }
  );


};




exports.saveMqttTwoApply = (req, res) => {

  exec(
    "/home/Db50Gw/WebUIServices/mqtt2_bridge.sh",
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
        res.status(StatusCodes.OK).json({ message: "Mqtt-2 apply params saved"  });
      }
    }
  );

};




exports.changeNtpServerApply = (req, res) => {


  exec(
    "/home/Db50Gw/WebUIServices/ntp.sh",
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
        res.status(StatusCodes.OK).json({ message: "ntp server apply params saved"  });
      }
    }
  );

     
      }
 

