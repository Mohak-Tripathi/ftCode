/*........................

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.

file:  app.js 

Brief:  Entry point of project. Contain login, loadUser (App.js frontend) logic
Project: Pixel Sensor

Release version: version 2.0.0

Release Date: Dec 14, 2022

Auther: Mohak Tripathi

Whats New: whatever inside "ADDED BY MT" are the addition.
 ..........................*/

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const { authentication } = require("./middelware/is-auth");
const socketIo = require('socket.io');  // Import socket.io
// const { initWebSocketServer } = require('./websocketServerfile.js'); // Import WebSocket server logic


/******************  Added by MOHAK T*************/
app.use(cors({
  origin: 'http://192.168.10.49:3000',
  credentials: true
}
));
const http = require('http');

// Create an HTTP server for the WebSocket server on a different port
const websocketServer = http.createServer();
// const server = http.createServer(app);
// Initialize WebSocket server
// Initialize WebSocket server using the websocketServer instance
// const io = socketIo(websocketServer);
const io = socketIo(websocketServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
// const io = socketIo(8085);



io.on('connection', (socket) => {
  console.log('Client connected');

  socket.emit('message', 'Welcome to the WebSocket server!');

  socket.on('message', (message) => {
    console.log('Received:', message);

    // Broadcast the message to all connected clients
    io.emit('message', JSON.parse(message));
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const wifiRoutes = require("./routes/wifi");
const configRoutes = require("./routes/config");
const serviceRoutes = require("./routes/service");

// Set up the WebSocket server
// eventEmitter();

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));


/******************  Added by MOHAK T*************/
const loginApi = (req, res) => {
  const { username, password } = req.body;

  const config = JSON.parse(fs.readFileSync("./config.json"));

  let targetObject = config.credentials.filter((elem) => {
    return elem.app_user === username;
  });


  if (
    username === targetObject[0].app_user &&
    password === targetObject[0].app_password
  ) {


    const token = jwt.sign(
      { username: username },
      "pixelSensorProject@fTIoTDev",
      {
        expiresIn: "1m", // expires in 1 hours
      }
    );

    return res
      .status(200).json({
        user: targetObject[0],
        token: token
      });

  } else {
    return res.status(400).json({
      success: false,
      message: "Incorrect username or password",
    });
  }
};
/******************  Added by MOHAK T*************/

/******************  Added by MOHAK T*************/
const getUserProfile = (req, res, next) => {


  const config = JSON.parse(fs.readFileSync("./config.json"));



  let targetObject = config.credentials.filter((elem) => {
    return elem.app_user === req.username.app_user;
  });

  return res.status(200).json({
    user: targetObject[0]
  });

};


/******************  Added by MOHAK T*************/
//  app.use(express.static(path.join(__dirname, 'public', 'build')))


app.post("/login", loginApi);

//commented
app.use(express.static(path.join(__dirname, "frontend/build")))


app.use("/me", authentication, getUserProfile);
app.use("/api/wifi", wifiRoutes);
app.use("/api/config", configRoutes);
app.use("/api/service", serviceRoutes);


// Initialize WebSocket server on a different port
// initWebSocketServer(server, 8081);

//app.use(express.static(path.join(__dirname, "frontend/build" )))


//commented
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/build/index.html"))
})

//  res.sendFile(path.join(__dirname, 'public', 'build', 'index.html'))

app.listen(8080, "0.0.0.0", () => {
  console.log("server running at http://localhost:8080");
});


websocketServer.listen(8085, () => {
  console.log(`WebSocket server listening on port ${8085}`);
})
