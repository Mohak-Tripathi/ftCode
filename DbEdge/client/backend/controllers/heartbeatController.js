

const fs = require("fs");
const path = require("path");
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

exports.heartBeatData = catchAsyncErrors(async (req, res, next) => {

  const config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/First_Page/config.json"));

        res.status(201).json({   // before sendToken function
            success: true,
            data: config
        })

 

})



