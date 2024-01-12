const fs = require("fs");

exports.getAnnotationList = async (req, res, next) => {
  //   console.log(req.query.dir);
  try {
    const files = fs.readdirSync("/home/Db50Gw/db-v2.0/" + req.query.dir);
    res.json({
      files: files.filter((file) => file.endsWith(".txt")),
    });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};

exports.saveAnnotations = async (req, res, next) => {
  // console.log(req.query.dir);
  res.status(200).json({ message: "file saved" });
};
