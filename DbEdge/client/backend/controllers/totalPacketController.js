
const fs = require("fs");
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');


exports.totalPacketPerBucket = catchAsyncErrors(async (req, res, next) => {
  
  
    const config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/total_packet_2nd_pg/config.json"));

    res.status(201).json({   // before sendToken function
        success: true,
        data: config.totalPacket
    })
  
  })
  