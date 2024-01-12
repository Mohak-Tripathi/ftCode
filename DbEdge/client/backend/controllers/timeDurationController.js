const fs = require("fs");
const path = require("path");
// const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');





exports.timeDuration = catchAsyncErrors(async (req, res, next) => {

  const { data, page } = req.body;
  const config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/timeDuration/config.json"));

  let page1Pattern = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/First_Page/config.json"));
  let pag2Pattern = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/total_packet_2nd_pg/config.json"));
  let page3Pattern = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/config_Mac.json"));


  let page4Pattern = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/last_Page/avgconfig.json"));


  if (page === "heartBeat") {
    config.page1.duration = data;
    // page1Pattern = []

    page1Pattern.forEach((packet) => {
      packet.Alive = 0
    })

    fs.writeFileSync("/home/Db50Gw/DBEDGE/server/First_Page/config.json", JSON.stringify(page1Pattern, null, "\t"));

  } else if (page === "trafficSummary") {
    config.page2.duration = data;

    pag2Pattern.totalPacket.forEach((packet) => {
      packet.total_packet_count = "--";
    });

    fs.writeFileSync("/home/Db50Gw/DBEDGE/server/total_packet_2nd_pg/config.json", JSON.stringify(pag2Pattern, null, "\t"));

  } else if (page === "heartBeatTraffic") {
    config.page3.duration = data;
    page3Pattern = []
    fs.writeFileSync("/home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/config_Mac.json", JSON.stringify(page3Pattern, null, "\t"));

  } else if (page === "DataPattern") {
    // This part remains the same, updating configDataPattern to an empty array
    config.page4.duration = data;
    page4Pattern = []
    fs.writeFileSync("/home/Db50Gw/DBEDGE/server/last_Page/avgconfig.json", JSON.stringify(page4Pattern, null, "\t"));
  }

  fs.writeFileSync("/home/Db50Gw/DBEDGE/server/timeDuration/config.json", JSON.stringify(config, null, "\t"));

  res.status(200).json({
    message: "time duration selected"
  });
});


exports.getTimeDuration = catchAsyncErrors(async (req, res, next) => {

  const config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/timeDuration/config.json"));


  res.status(200).json({
    data: config
  })

})



exports.getRefershTimeStamp = catchAsyncErrors(async (req, res, next) => {

  const config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/timer/trigger.json"));


  res.status(200).json({
    config
  })

})

