
const fs = require("fs");
const { exec } = require("child_process");
const path = require("path")

const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

exports.fileUpload = catchAsyncErrors(async (req, res, next) => {


  const file = req.file;


  if (!file) {
    return res.status(404).json({
      message: "No File Choosen",
    });
  } else {



    res.status(200).json({
      message: "file upload success",
      filename: file.originalname,
    });
  }

})

exports.telegrafFileUpload = catchAsyncErrors(async (req, res, next) => {


  const file = req.file;


  if (!file) {
    return res.status(404).json({
      message: "No File Choosen",
    });
  } else {




    res.status(201).json({
      message: "telegraf conf file upload success",
      filename: file.originalname,
    });
  }

})

exports.macFileUpload = catchAsyncErrors(async (req, res, next) => {


  const file = req.file;


  if (!file) {
    return res.status(404).json({
      message: "No File Choosen",
    });
  } else {




    res.status(201).json({
      message: "MAC conf file upload success",
      filename: file.originalname,
    });
  }

})





  exports.configData = catchAsyncErrors(async (req, res, next) => {
    const config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/configPage/config.json"));
    res.status(201).json({   // before sendToken function
      success: true,
      data: config
    })

  })


exports.triggerPatch = catchAsyncErrors(async (req, res, next) => {

  exec(
    "/home/Db50Gw/DBEDGE/server/patchUpload/updatePatch.sh",
    (error, stdout, stderr) => {
      if (error) {
        res
          .status(500)
          .json({ message: error.message });
      } else if (stderr) {
        res.status(200).json({ message: stderr });
      } else {
        res.status(200).json({ message: "patch updated" });
      }
    }
  );



  
})



exports.telegrafConfSubmit = catchAsyncErrors(async (req, res, next) => {

  exec(
    "/home/Db50Gw/DBEDGE/server/telegrafUpload/update.sh",
    (error, stdout, stderr) => {
      if (error) {

        res
          .status(500)
          .json({ message: error.message });
      } else if (stderr) {
        res.status(200).json({ message: stderr });
      } else {
        res.status(200).json({ message: "patch updated" });
      }
    }
  );



})

exports.macConfSubmit = catchAsyncErrors(async (req, res, next) => {

  exec(
    "/home/Db50Gw/DBEDGE/server/macConfUpload/mac_conf.sh",
    (error, stdout, stderr) => {
      if (error) {
        res
          .status(500)
          .json({ message: error.message });
      } else if (stderr) {
        res.status(200).json({ message: stderr });
      } else {
        res.status(200).json({ message: "patch updated" });
      }
    }
  );



})


exports.staticParamsConfigTrigger= catchAsyncErrors(async (req, res, next) => {

  exec(
    "/home/Db50Gw/DBEDGE/server/configPage/ip.sh",
    (error, stdout, stderr) => {
      if (error) {
        res
          .status(500)
          .json({ message: error.message });
      } else if (stderr) {
        res.status(200).json({ message: stderr });
      } else {
        res.status(200).json({ message: "static params updated" });
      }
    }
  );


})


exports.staticParamsConfig= catchAsyncErrors(async (req, res, next) => {


  const config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/configPage/config.json"));

    config.static_ip_params.ip = req.body.ip;
    config.static_ip_params.router = req.body.router;
    config.admin.wifi_status= req.body.network_status

    // config.static_ip_params.subnet = req.body.subnet;
    fs.writeFileSync("/home/Db50Gw/DBEDGE/server/configPage/config.json", JSON.stringify(config, null, "\t"));
  
  res.status(200).json({
    message: "params selected"
  });


})






exports.macConfDownload = catchAsyncErrors(async (req, res, next) => {

  const filename = "macconfiguration.json"
  const filePath = path.join("/home/Db50Gw/DBEDGE/server/macConfUpload/", filename);

  // Use the appropriate headers for downloading files
  res.download(filePath, filename, (err) => {
    if (err) {
      console.error('Error:', err);
      // Handle error (e.g., send an error response to the client)
    } else {
      console.log('File downloaded successfully');
    }
  });


})

exports.telegrafConfDownload = catchAsyncErrors(async (req, res, next) => {

  const filename = "telegraf.conf"
  const filePath = path.join("/home/Db50Gw/DBEDGE/server/telegrafUpload/", filename);

  // Use the appropriate headers for downloading files
  res.download(filePath, filename, (err) => {
    if (err) {
      console.error('Error:', err);
      // Handle error (e.g., send an error response to the client)
    } else {
      console.log('telegraf File downloaded successfully');
    }
  });


})





 





