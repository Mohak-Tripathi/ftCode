
const fs = require("fs");

const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

exports.dataPattern = catchAsyncErrors(async (req, res, next) => {


  const config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/last_Page/avgconfig.json"));
  let responseData = [];

  // Check if config is an array of arrays of objects
  if (Array.isArray(config) && config.length > 1 && Array.isArray(config[0])) {
    responseData = config[0];
  }


  res.status(201).json({
    success: true,
    data: responseData,
  });
  
  
  })


  

  exports.dataPatternPostData = catchAsyncErrors(async (req, res, next) => {
    const data = req.body.data
    const config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/last_Page/avgconfig.json"));
  
  
    // Ensure config is an array and has some elements
    if (Array.isArray(config) && config.length > 0) {
      // Find the inner array that contains objects with the specified Device_type
      const filteredData = config.find(innerArray =>
        innerArray.some(obj => obj.Device_type.toLowerCase() === data.toLowerCase())
      ) || [];
  
  
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
  

