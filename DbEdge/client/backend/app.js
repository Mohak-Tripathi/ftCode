const express = require("express");
const app = express();
const path = require("path")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv");
const helmet = require("helmet")
const cors = require('cors')


app.use(cors({
    origin: 'http://192.168.1.24:3000',
    credentials: true
  }
  ));

process.on("uncaughtException", err =>{
  console.log(`ERROR: ${err.stack}`);
  console.log(`Shutting down due to uncaught exception`);
  process.exit(1);   // in this case we don't need to close the server. Just need to come out (exit) from the process.
})





//Setting up the body parser
app.use(express.json());

//Setting cookie parser
app.use(cookieParser());



app.use(express.static(path.join(__dirname, "../frontend/build" )))


//importing all routes
const heartBeatSummary = require("./routes/heartbeatRoute.js");
const totalPacketCountSummary = require("./routes/totalPacketRoute.js");
const hearbeatTrafficSummary = require("./routes/hearbeatTrafficRoute.js");
const DataPattern = require("./routes/dataPatternRoute.js")
const login = require("./routes/loginRoute.js")
const timeDuration = require("./routes/timeDurationRoute.js")
const config =  require("./routes/configRoute.js")

app.use("/api/v1", login);
app.use("/api/v1", DataPattern);
app.use("/api/v1", heartBeatSummary);
app.use("/api/v1", totalPacketCountSummary);
app.use("/api/v1", hearbeatTrafficSummary);
app.use("/api/v1", timeDuration);
app.use("/api/v1", config)


app.get("*", (req,res)=>{
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
    // res.sendFile(path.join(__dirname, 'public', 'build', 'index.html'))
  })


const PORT = 8080;

const server = app.listen(8080, () => {
  console.log(
    `Server is listening at port ${PORT} in development mode`
  );
});

