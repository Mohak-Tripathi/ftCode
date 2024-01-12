/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  service.js

Brief:  It contains all controllers related to service route. 

Project: Pixel Sensor

Release version: version 2.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: whatever inside "ADDED BY MT" are the addition.
 ..........................*/

const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");
const { exec } = require("child_process");
const fs = require("fs");
const systemdStatus = require("systemd-status");
const path = require("path");





exports.occupancyAlgo = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "Server side validation failed",
      errors: errors.array(),
    });
  }

  console.log("reached?")
  const config = JSON.parse(
    fs.readFileSync("/home/Db50Gw/defaultwebui/config.json")
  );

console.log(req.body.status , "req.body.status")

  if(req.body.status === "start"){
    config.sensor.mode = 2;
    config.services.desk_occupancy.label=  req.body.status
    fs.writeFileSync("/home/Db50Gw/defaultwebui/config.json", JSON.stringify(config, null, "\t"));

  }
  else if(req.body.status === "stop"){
    config.sensor.mode = 0;
    config.services.desk_occupancy.label=  req.body.status
    fs.writeFileSync("/home/Db50Gw/defaultwebui/config.json", JSON.stringify(config, null, "\t"));
  
  }
  else if(req.body.status === "enable"){
    config.services.desk_occupancy.label=  req.body.status
    fs.writeFileSync("/home/Db50Gw/defaultwebui/config.json", JSON.stringify(config, null, "\t"));

  }
  else {
    config.services.desk_occupancy.label=  req.body.status
    fs.writeFileSync("/home/Db50Gw/defaultwebui/config.json", JSON.stringify(config, null, "\t"));
    
  }
    /******************  Added by MOHAK T*************/
  

  exec(
    "/home/Db50Gw/WebUIServices/occupancy_services.sh",
    async (error, stdout, stderr) => {
      if (error) {
 
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      } 
  
       else {      
         
            /******************  Added by MOHAK T*************/

          if(req.body.status === "start"){

            res.status(StatusCodes.OK).json("start");
          }
          else if(req.body.status === "stop"){
   
            res.status(StatusCodes.OK).json("stop");
          }
          else if(req.body.status === "enable"){
       
            res.status(StatusCodes.OK).json("enable");
          }
          else {
        
            res.status(StatusCodes.OK).json("disable");
          }
            /******************  Added by MOHAK T*************/
            
     
      }
    }

  );

};


exports.occupancyCountAlgo= (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "Server side validation failed",
      errors: errors.array(),
    });
  }


   
  const config = JSON.parse(
    fs.readFileSync("/home/Db50Gw/defaultwebui/config.json")
  );
 

  if(req.body.status === "start"){
    config.sensor.mode = 4;
    config.services.occupancy_count.label=  req.body.status
    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
   
  }
  else if(req.body.status === "stop"){
    config.sensor.mode = 0;
    config.services.occupancy_count.label=  req.body.status
    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));

  }
  else if(req.body.status === "enable"){
    config.services.occupancy_count.label=  req.body.status
    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
   
  }
  else {
    config.services.occupancy_count.label=  req.body.status
    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
 
  }


  exec(
    "/home/Db50Gw/WebUIServices/occupancy_count_services.sh",
     (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      } 
  
       else {      
      

          if(req.body.status === "start"){
   
            res.status(StatusCodes.OK).json("start");
          }
          else if(req.body.status === "stop"){
        
            res.status(StatusCodes.OK).json("stop");
          }
          else if(req.body.status === "enable"){
      
            res.status(StatusCodes.OK).json("enable");
          }
          else {
            res.status(StatusCodes.OK).json("disable");
          }
            /******************  Added by MOHAK T*************/
          
          
        

     
      }
    }

  );


};

exports.peopleCountAlgo = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "Server side validation failed",
      errors: errors.array(),
    });
  }


  const config = JSON.parse(
    fs.readFileSync("/home/Db50Gw/defaultwebui/config.json")
  );



  if(req.body.status === "start"){
    config.sensor.mode = 3;
    config.services.people_count.label=  req.body.status
    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
  
  }
  else if(req.body.status === "stop"){
    config.sensor.mode = 0;
    config.services.people_count.label=  req.body.status
    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
    
  }


  exec(
    "/home/Db50Gw/WebUIServices/people_count_services.sh",
    async (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      }

       else {      
      

          if(req.body.status === "start"){
     
            res.status(StatusCodes.OK).json("start");
          }
          else if(req.body.status === "stop"){
       
            res.status(StatusCodes.OK).json("stop");
          }
   
            /******************  Added by MOHAK T*************/
          
          
        
     
      }
    }

  );

  

};

/******************  Edited by Lokesh CJ*************/
exports.peopleCountAlgoOnBoot = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "Server side validation failed",
      errors: errors.array(),
    });
  }

 
  const config = JSON.parse(
    fs.readFileSync("/home/Db50Gw/defaultwebui/config.json")
  );
  

  if(req.body.status === "enable"){
    config.services.people_count.label=  req.body.status
    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
   
  }
  else if(req.body.status === "disable"){
    config.services.people_count.label=  req.body.status
    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));

  }

  
  


  exec(
    "/home/Db50Gw/WebUIServices/people_count_services.sh",
    async (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      } 

      
      else {      
      

  
         
     
            /******************  Added by MOHAK T*************/

          if(req.body.status === "enable"){
       
            res.status(StatusCodes.OK).json("enable");
          }
          else if(req.body.status === "disable"){
     
            res.status(StatusCodes.OK).json("disable");
          }
   
            /******************  Added by MOHAK T*************/
          
          
        
     
      }
    }

  );



};


exports.getSerivceStatus = (req, res, next) => {
  const status = systemdStatus([
    "occupancy_config",
    "occupancy_detection",
    "people_count",
    "analyzer",
    "occupancy_count"
  ]);
  res.status(StatusCodes.OK).json(status);
};

exports.powerOff = (req, res, next) => {

  exec(req.body.command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    } else if (stderr) {
      console.log(`stderr: ${stderr}`);
      res.status(StatusCodes.OK).json({ message: stderr });
    } else {
      console.log(`stdout: ${stdout}`);
      res.status(StatusCodes.OK).json({ message: "power off success" });
    }
  });
};

        /******************  Added by MOHAK T*************/
exports.dashboardInfo= (req, res, next) => {

  const config = JSON.parse(fs.readFileSync("./config.json"));
  res.status(StatusCodes.OK).json(config.dashboard);
};



exports.analyzerAlgo = (req, res, next) => {


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "Server side validation failed",
      errors: errors.array(),
    });
  }


  
  const config = JSON.parse(
    fs.readFileSync("/home/Db50Gw/defaultwebui/config.json")
  );


  if(req.body.status === "start"){
    config.sensor.mode = 5;
    config.services.analyzer.label=  req.body.status
    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
    
  }
  else {
    config.sensor.mode = 0;
    config.services.analyzer.label=  req.body.status
    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
   
  }

    /******************  Added by MOHAK T*************/

  exec(
    "/home/Db50Gw/WebUIServices/analyzer_services.sh",
    async (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      } 
      else {      
      

   
     

          if(req.body.status === "start"){
     
            res.status(StatusCodes.OK).json("start");
          }
          else {
     
            res.status(StatusCodes.OK).json("stop");
          }
   
            /******************  Added by MOHAK T*************/
          
          
        
     
      }
    }

  );


};

exports.configServer = (req, res, next) => {
  const errors = validationResult(req);


  if (!errors.isEmpty()) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: "Server side validation failed",
      errors: errors.array(),
    });
  }

  
  const config = JSON.parse(
    fs.readFileSync("/home/Db50Gw/defaultwebui/config.json")
  );


  if(req.body.status === "start"){
    config.sensor.mode = 1;
    config.services.config.label=  req.body.status
    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
  
  }
  else {
    config.sensor.mode = 0;
    config.services.config.label=  req.body.status
    fs.writeFileSync("./config.json", JSON.stringify(config, null, "\t"));
   
  }


  exec(
    "/home/Db50Gw/WebUIServices/config_services.sh",
    async (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      }

      else {      
    
          if(req.body.status === "start"){
         
            res.status(StatusCodes.OK).json("start");
          }
          else {
        
            res.status(StatusCodes.OK).json("stop");
          }
   
            
     
      }
    }

  );


};


