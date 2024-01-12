
/************************************************

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.
file:  TotalPacket.js

Brief: Finding total packets of every bucket
Service: Find total number of packets

Release version: version 1.0.0

Release Date: Nov 28, 2023

Author: Jyoti_Bhartiya

Copyright FlamencoTech. All rights reserved.

*****************************************************/
const startTime = new Date();
const { InfluxDB, HttpError } = require('@influxdata/influxdb-client');
const fs = require("fs");
let InfluxDB_config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/InfluxDB_details/config.json"));
const url = `http://${InfluxDB_config.host}:${InfluxDB_config.port}`;
const token = InfluxDB_config.token;
const influxDB = new InfluxDB({ url, token });
const queryApi = influxDB.getQueryApi(InfluxDB_config.org);
let config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/total_packet_2nd_pg/config.json"));
let config_Time = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/timeDuration/config.json"));
let config_Total_Time = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/timer/trigger.json"));
let time = config_Time.page2.duration;
//Function to update config file
function updateBucketTotal(bucketName, newTotal) {
  const bucketObj = config.totalPacket.find(item => item.bucket_name === bucketName);
  if (bucketObj) {
    bucketObj.total_Traffic = newTotal;
  } else {
    console.error(`Bucket '${bucketName}' not found in config.`);
  }
  //####################################################
  if (newTotal === '') {
    config.totalPacket.forEach(item => {
      if (item.bucket_name === bucketName) {
        item.total_Traffic = '';
      }
    });
  }
  //####################################################
  fs.writeFileSync("/home/Db50Gw/DBEDGE/server/total_packet_2nd_pg/config.json", JSON.stringify(config, null, 2), 'utf-8');
}
// Function to run influx query
const myQuery = async (Flux_query, bucket_Name) => {
  try {
    const result = await queryApi.collectRows(Flux_query);
    if (Array.isArray(result) && result.length === 0) {
      let count = ''
      updateBucketTotal(bucket_Name, count);
    }
    result.forEach((row) => {
      let count = row._value;
      console.log("count", count, bucket_Name);
      updateBucketTotal(bucket_Name, count)
    });

  } catch (error) {
    if (error instanceof HttpError) {
      console.error(`InfluxDB Error: ${error}`);
      updateBucketTotal(bucket_Name, ' ');
    } else {
      console.error(`An error occurred: ${error}`);
      updateBucketTotal(bucket_Name, ' ');
    }
  }
};

//################### For IAQ BUCKET ########################
const fluxQuery_IAQ = `
 from(bucket:"iaq_bucket")
  |> range(start: -${time}h)
  |> filter(fn: (r) => r["_field"] == "DeviceVersion")
  |> group()
  |> count()
 `
let iaq_bucket_name = "IAQ";
// myQuery(fluxQuery_IAQ, iaq_bucket_name);

//##################### FOR GATEWAY BUCKET #######################
const fluxQuery_GATEWAY = `
from(bucket:"gateway_bucket")
  |> range(start: -${time}h)
  |> filter(fn: (r) => r["_field"] == "DeviceVersion")
  |> group()
  |> count()
`
let gw_bucket_name = "Gateway";
// myQuery(fluxQuery_GATEWAY, gw_bucket_name);

//################################ FOR DWPC ###############################
const fluxQuery_DWPC = `
from(bucket:"dwpc_bucket")
  |> range(start: -${time}h)
  |> filter(fn: (r) => r["_field"] == "Time")
  |> group()
  |> count()
`
let dwpc_bucket_name = "DWPC";
// myQuery(fluxQuery_DWPC, dwpc_bucket_name);

//######################### FOR PIXEL_DESK ####################################

const fluxQuery_PIXEL_DESK = `
from(bucket:"pixeldesk_bucket")
  |> range(start: -${time}h)
  |> filter(fn: (r) => r["_field"] == "DeviceVersion")
  |> group()
  |> count()
`
let pixel_desk_bucket_name = "PixelDesk";
// myQuery(fluxQuery_PIXEL_DESK, pixel_desk_bucket_name);

//######################### FOR PIXEL_MR ####################################

const fluxQuery_PIXEL_MR = `
from(bucket:"pixelmr_bucket")
  |> range(start: -${time}h)
  |> filter(fn: (r) => r["_field"] == "DeviceVersion")
  |> group()
  |> count()
`
let pixel_mr_bucket_name = "PixelMR";
// myQuery(fluxQuery_PIXEL_MR, pixel_mr_bucket_name);

//################### For RRH_BUCKET ########################

const fluxQuery_RRH = `
from(bucket:"rrh_bucket")
  |> range(start: -${time}h)
  |> filter(fn: (r) => r["_field"] == "DeviceVersion")
  |> group()
  |> count()
`
let rrh_bucket_name = "RRH";
// myQuery(fluxQuery_RRH, rrh_bucket_name);

//#################### Rnage_extender bucket ###############################

const fluxQuery_RE = `
from(bucket:"Range_extender")
  |> range(start: -${time}h)
  |> filter(fn: (r) => r["_field"] == "DeviceVersion")
  |> group()
  |> count()
`;
let RE_bucket_name = "Range_Extender";
// myQuery(fluxQuery_RE, RE_bucket_name);
myQuery(fluxQuery_IAQ, iaq_bucket_name)
  .then(() => myQuery(fluxQuery_GATEWAY, gw_bucket_name))
  .then(() => myQuery(fluxQuery_DWPC, dwpc_bucket_name))
  .then(() => myQuery(fluxQuery_PIXEL_DESK, pixel_desk_bucket_name))
  .then(() => myQuery(fluxQuery_PIXEL_MR, pixel_mr_bucket_name))
  .then(() => myQuery(fluxQuery_RRH, rrh_bucket_name))
  .then(() => myQuery(fluxQuery_RE, RE_bucket_name))
  .then(() => {
    const endTime = new Date();
    const totalTime = endTime - startTime;
    console.log("totalTime", totalTime);
    config_Total_Time.Total_Execution_Time_SecondPage = totalTime;
    fs.writeFileSync("/home/Db50Gw/DBEDGE/server/timer/trigger.json", JSON.stringify(config_Total_Time, null, 2), 'utf-8');
  })