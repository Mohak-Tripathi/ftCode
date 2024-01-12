const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/home/Db50Gw/DBEDGE/server/patchUpload'); // Set your desired upload directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});




const fileFilter = (req, file, cb) => {
  // Always accept the file
  cb(null, true);
};



const upload = multer({ storage: storage, fileFilter: fileFilter });


const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/home/Db50Gw/DBEDGE/server/telegrafUpload/'); // Set your desired upload directory
    },  
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const fileFilter1 = (req, file, cb) => {
    // Always accept the file
    cb(null, true);
  };
  


  const upload1 = multer({ storage: storage1, fileFilter: fileFilter1 });

  const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/home/Db50Gw/DBEDGE/server/macConfUpload'); // Set your desired upload directory
    },  
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });



  const fileFilter2 = (req, file, cb) => {
    // Always accept the file
    cb(null, true);
  };
  const upload2 = multer({ storage: storage2, fileFilter: fileFilter2 });

module.exports = {upload, upload1, upload2};
