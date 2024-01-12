const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const { nms } = require("./utils/media_server")
const imageRoutes = require("./routes/image");
const annotationRoutes = require("./routes/annotation");
const configRoutes = require("./routes/config");
// instantiate express app
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "public/build")));

// app.use("/captures", express.static(path.join(__dirname, "captures")));
//temp 
app.use("/captures", express.static(path.join("/home/Db50Gw/db-v2.0/captures")));

app.use("/tables", express.static(path.join("/home/Db50Gw/db-v2.0/tables")));

app.use("/api/image", imageRoutes);

app.use("/api/annotation", annotationRoutes);

app.use("/api/config", configRoutes);

app.listen(5000, "0.0.0.0", () => {
  nms.run();
  console.log("Server running at http://localhost:5000");
});
