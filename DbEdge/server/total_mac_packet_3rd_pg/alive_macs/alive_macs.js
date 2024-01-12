/************************************************

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.
file:  alive_macs.js

Brief: Finding total number dead and alive devices
Service: alive_macs.js

Release version: version 1.0.0

Release Date: Nov 28, 2023

Author: Jyoti_Bhartiya

Copyright FlamencoTech. All rights reserved.

*****************************************************/
const { InfluxDB, HttpError } = require('@influxdata/influxdb-client');
const fs = require("fs");
let InfluxDB_config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/InfluxDB_details/config.json"));
const url = `http://${InfluxDB_config.host}:${InfluxDB_config.port}`;
const token = InfluxDB_config.token;
const influxDB = new InfluxDB({ url, token });
const queryApi = influxDB.getQueryApi(InfluxDB_config.org);
let config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/alive_macs/macconfiguration.json"));
let config_mac = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/alive_macs/Dead_mac.json"));
let config_Time = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/timeDuration/config.json"));
let time = config_Time.page3.duration;
//#####################################################
var currentDate = new Date();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
let formattedTime = hours + ":" + minutes + ":" + seconds;
console.log(formattedTime);
//#####################################################
const array = [];
const myQuery = async (query, bucketName) => {
    try {
        const result = await queryApi.collectRows(query);
        result.forEach((row, index) => {
            const mac = row.MAC;
            array.push(row.MAC);
        });
        const uniqueMacs = new Set();
        array.forEach((mac) => {
            uniqueMacs.add(mac);
        });
        const Macs = config[bucketName];
        const DeadMac = [];
        Macs.forEach(mac => {
            if (!uniqueMacs.has(mac)) {
                DeadMac.push(mac);
            }
        });
        let macs = DeadMac;
        config_mac[bucketName] = macs;
        fs.writeFileSync("/home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/alive_macs/Dead_mac.json", JSON.stringify(config_mac, null, 2), 'utf-8');
    } catch (error) {
        if (error instanceof HttpError) {
            console.error(`InfluxDB Error: ${error}`);
        } else {
            console.error(`An error occurred: ${error}`);
        }
    }
};
const fluxQuery_iaq = `
 from(bucket: "iaq_bucket")
  |> range(start: -${time}h)
  |> distinct(column: "MAC")
 `;
const fluxQuery_gateway = `
 from(bucket: "gateway_bucket")
  |> range(start: -${time}h)
  |> distinct(column: "MAC")
 `
const fluxQuery_rrh = `
 from(bucket: "rrh_bucket")
  |> range(start: -${time}h)
  |> distinct(column: "MAC")
 `
const fluxQuery_dwpc = `
 from(bucket: "dwpc_bucket")
  |> range(start: -${time}h)
  |> distinct(column: "MAC")
 `
const fluxQuery_pixelDesk = `
 from(bucket: "pixeldesk_bucket")
  |> range(start: -${time}h)
  |> distinct(column: "MAC")
 `
const fluxQuery_pixelmr = `
 from(bucket: "pixelmr_bucket")
  |> range(start: -${time}h)
  |> distinct(column: "MAC")
 `
const fluxQuery_RE = `
 from(bucket: "Range_extender")
 |> range(start: -${time}h)
 |> distinct(column: "MAC")
 `
const queries = [
    { query: fluxQuery_iaq, type: "IAQ" },
    { query: fluxQuery_pixelDesk, type: "PixelDesk" },
    { query: fluxQuery_pixelmr, type: "PixelMr" },
    { query: fluxQuery_dwpc, type: "DWPC" },
    { query: fluxQuery_gateway, type: "Gateway" },
    { query: fluxQuery_rrh, type: "RRH" },
    { query: fluxQuery_RE, type: "Range-Extender" }
]
const executeQueries = async () => {
    for (const queryInfo of queries) {
        await myQuery(queryInfo.query, queryInfo.type);
    }
}
executeQueries();