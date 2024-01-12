const multer = require("multer");
//file storage configuration
const storage = multer.diskStorage({
  //setting destination to save the file on the server
  destination: (req, file, cb) => {
    //directory to the file
    cb(null, "/home/Db50Gw/db-v2.0/" + req.query.dir);
  },
  //setting filename for the uploaded file
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
//file filter configuration
const fileFilter = (req, file, cb) => {
  //accept files only with png, jpg or jpge
  if (file.mimetype === "text/plain") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
//multer configuration
const upload = multer({ storage: storage });

//export it as a module
module.exports = upload;
