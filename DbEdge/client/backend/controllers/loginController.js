const fs = require("fs");
const path = require("path");
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const jwt = require("jsonwebtoken");


exports.loginDefinition = catchAsyncErrors(async (req, res, next) => {

    const { username, password } = req.body;

    const config = JSON.parse(fs.readFileSync("./config.json"));
 
    if (
      username ===config.credentials[0].app_user &&
      password ===config.credentials[0].app_password
    ) {
  
  
      const token = jwt.sign(
        { username: username },
        "dbEdgeProject@fTIoTDev",
        {
          expiresIn: "15m", 
        }
      );
  

  
      return res
      .status(200).json({
        success: true,
        user: username,
        token: token
      });
  
    } else {
      return res.status(400).json({
        success: false,
        message: "Incorrect username or password",
      });
    }
 

})


