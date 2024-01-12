
const fs = require("fs");
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

exports.heartbeatTrafficData = catchAsyncErrors(async (req, res, next) => {
  const config = JSON.parse(
    fs.readFileSync("/home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/config_Mac.json")
  );

  let responseData = [];

  // Check if config is an array of arrays of objects
  if (Array.isArray(config) && Array.isArray(config[0])) {
    responseData = config[0];
  }

  res.status(201).json({
    success: true,
    data: responseData,
  });
});





exports.heartbeatTrafficPostData  = catchAsyncErrors(async (req, res, next) => {
  const data = req.body.data

  const config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/config_Mac.json"));
  const config_Dead_MAC = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/alive_macs/Dead_mac.json"));


let filteredData = []


  if (Array.isArray(config) && config.length > 0) {
    // Find the inner array that contains objects with the specified Device_type
    filteredData = config.filter((obj)=>{
      // return obj.device.toLowerCase() === data.toLowerCase()

         // Check if obj.device is defined before using toLowerCase
         const device = obj.device ? obj.device.toLowerCase() : null;
         const inputData = data ? data.toLowerCase() : null;
   
   
         return device === inputData;
    });

    
    config_Dead_MAC[`${data}`].map((mac)=>{
      let obj = {
        "device": data,
        "mac": mac,
        "total": 0
      }
      filteredData.push(obj)
    })


    // fs.writeFileSync("/home/Db50Gw/DBEDGE/server/last_Page/avgconfig.json", JSON.stringify(config, null, "\t"));
    res.status(201).json({
      success: true,
      data: filteredData,
    });
  } else {
    res.status(400).json({
      success: false,
      error: "Invalid data structure",
    });
  }
});


