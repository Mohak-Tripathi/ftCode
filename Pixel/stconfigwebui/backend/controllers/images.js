const { exec } = require("child_process");
const fs = require("fs");
const Jimp = require("jimp");

exports.liveStream = async (req, res, next) => {
  if (req.query.status === "start" || req.query.status === "stop") {
    exec(
      "sudo service stream-service " + req.query.status,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          res.status(500).json({ error: error.message });
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          res.status(500).json({ stderr: stderr });
          return;
        }
        console.log(`stdout: ${stdout}`);
        res.status(200).json({ message: req.query.status + " streaming" });
      }
    );
  } else {
    res.status(400).json({ message: "Bad Request" });
  }
};

exports.runFeed = async (req, res, next) => {
  exec("sudo -u Db50Gw python3 /home/Db50Gw/db-v2.0/feed.py", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      res.status(500).json({ error: error.message });
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      res.status(500).json({ stderr: stderr });
      return;
    }
    console.log(`stdout: ${stdout}`);
    res.status(200).json({ message: "running command" });
  });
};

exports.getImageList = async (req, res, next) => {
  //   console.log(req.query.dir);
  try {
    const files = fs.readdirSync("/home/Db50Gw/db-v2.0/" + req.query.dir);
    res.json({
      files: files.filter((file) => file.endsWith(".jpg")),
    });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};
exports.saveAnnotations = async (req, res, next) => {

  try {
    console.log(req.query);
    const { dir, fileName } = req.query;
    const fileData = fs.readFileSync(`/home/Db50Gw/db-v2.0/${dir}/${fileName}`, {
      encoding: 'utf8',
      flag: 'r',
    });


    if (fileName.endsWith(".csv") && dir === "captures") {
      let lines = fileData.split("\n");
      for (const [index, line] of lines.entries()) {
        [label, left, top, width, height, filePath, imgWidth, imgHeight] =
          line.split(",");

        console.log(label, left, top, width, height, filePath, imgWidth, imgHeight, "radar")

        let fileNumber = index + parseInt(fileName.split(".")[0]);
        console.log(filePath, "fileData")
        console.log(fileName, "fileName")
        try {
          let image = await Jimp.read("/home/Db50Gw/db-v2.0/" + filePath);
          await image.crop(
            parseInt(left),
            parseInt(top),
            parseInt(width),
            parseInt(height)
          );
          // console.log("fileNumber: ", fileNumber)
          await image.write("/home/Db50Gw/db-v2.0/tables/" + fileNumber + ".jpg", () => {
            console.log("file saved!");
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
    res.json({ fileData: fileData });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};


exports.deleteAllFiles = async (req, res, next) => {
  try {
    let files = fs.readdirSync("/home/Db50Gw/db-v2.0/" + req.query.dir);
    console.log(files, "files1")
    // files = files.filter((file) => {
    //   return file.toString() !== "labels.txt";
    // });

    for (const file of files) {    
      console.log("Processing file:", file);
      if (file.trim().toLowerCase() !== "labels.txt") {
        fs.unlinkSync("/home/Db50Gw/db-v2.0/" + req.query.dir + "/" + file);
        console.log("Deleted file:", file);
      }
    }



    res.json({
      message: "deleted " + files,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.deleteAnnotations = async (req, res, next) => {
  try {
    let files = fs.readdirSync("/home/Db50Gw/db-v2.0/" + req.query.dir);
    // files = files.filter((file) => {
    //   return file.toString() !== "labels.txt" && !file.endsWith(".jpg");
    // });
    // for (const file of files) {
    //   fs.unlinkSync("/home/Db50Gw/db-v2.0/" + req.query.dir + "/" + file);
    //   console.log(file);
    // }
    console.log(files, "files")

    for (const file of files) {
      console.log("Processing file:", file);
      if (file.trim().toLowerCase() !== "labels.txt" && !file.trim().endsWith(".jpg")) {
        fs.unlinkSync("/home/Db50Gw/db-v2.0/" + req.query.dir + "/" + file);
        console.log("Deleted file:", file);
      }
    }


    res.json({
      message: "deleted " + files,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }


};
