/************************************************

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.
file:  uniqueMac_Flux_L.js

Brief: fetch data from FluxDB of buckets and find unique Mac address 

Service: Find unique mac of the devices 

Release version: version 1.0.0

Release Date: January 05, 2024

Author: Jyoti_Bhartiya

Copyright FlamencoTech. All rights reserved.

*****************************************************/
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let formattedTime = hours + ":" + minutes + ":" + seconds;
const startTime = new Date();
const { InfluxDB, HttpError } = require('@influxdata/influxdb-client');
const fs = require("fs");
let InfluxDB_config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/InfluxDB_details/config.json"));
const url = `http://${InfluxDB_config.host}:${InfluxDB_config.port}`;
const token = InfluxDB_config.token;
const influxDB = new InfluxDB({ url, token, timeout: 60000});
const queryApi = influxDB.getQueryApi(InfluxDB_config.org);
let total_macs = 0;
let config = JSON.parse(fs.readFileSync("./config.json"));
let config_Time = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/timeDuration/config.json"));
let config_Total_mac = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/alive_macs/macconfiguration.json"));
let config_Toal_Time = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/timer/trigger.json"));
config_Toal_Time.First_TimeStamp = formattedTime;
fs.writeFileSync("/home/Db50Gw/DBEDGE/server/timer/trigger.json", JSON.stringify(config_Toal_Time, null, 2), 'utf-8');
let time = config_Time.page1.duration;
//###################### UPDATE TOTAL NUMBER OF MACS #############################
for (const key in config_Total_mac) {
    if (config_Total_mac.hasOwnProperty(key)) {
        const arrayLength = config_Total_mac[key].length;
        if (key == 'IAQ') {
            config[0].Total = arrayLength;
        }
        else if (key == "PixelDesk") {
            config[1].Total = arrayLength;
        }
        else if (key == "PixelMr") {
            config[2].Total = arrayLength;
        }
        else if (key == "DWPC") {
            config[3].Total = arrayLength;
        }
        else if (key == "Gateway") {
            config[4].Total = arrayLength;
        }
        else if (key == "Range-Extender") {
            config[5].Total = arrayLength;
        }
        else if (key == "RRH") {
            config[6].Total = arrayLength;
        }
    }
}
const handleQueryError = (error) => {
    if (error instanceof HttpError) {
        console.error(`InfluxDB Error: ${error}`);
    } else {
        console.error(`An error occurred: ${error}`);
    }
};
const myQuery = async (bucketname, config_bucket) => {
    const fluxQuery = `
    from(bucket: "${bucketname}")
    |> range(start: -${time}h)
    |> group(columns: ["MAC"])
    |> count(column: "_value")
    |> filter(fn: (r) => r._value > 1)
    |> group(columns: [])
    |> count(column: "_value")
      `;
    try {
        const result = await queryApi.collectRows(fluxQuery);
        if (result.length === 0) {
            console.log(`No results for ${bucketname} bucket.`);
            config.find(item => item.Bucket === config_bucket).Alive = 0;
            fs.writeFileSync("/home/Db50Gw/DBEDGE/server/First_Page/config.json", JSON.stringify(config, null, 2), 'utf-8');
            return;
        }
        if (result.length > 0) {
            let total = result[0]._value;
            console.log(bucketname, total);
            config.find(item => item.Bucket === config_bucket).Alive = total;
            fs.writeFileSync("/home/Db50Gw/DBEDGE/server/First_Page/config.json", JSON.stringify(config, null, 2), 'utf-8');
        }
    } catch (error) {
        handleQueryError(error);
        config.find(item => item.Bucket === config_bucket).Alive = "--";
        fs.writeFileSync("/home/Db50Gw/DBEDGE/server/First_Page/config.json", JSON.stringify(config, null, 2), 'utf-8');
    }
}
const queries = [
    { bucketname: "iaq_bucket", config_bucket: "IAQ" },
    // { bucketname: "gateway_bucket", config_bucket: "Gateway" },
    // { bucketname: "pixeldesk_bucket", config_bucket: "PixelDesk" },
    // { bucketname: "pixelmr_bucket", config_bucket: "PixelMR" },
    // { bucketname: "rrh_bucket", config_bucket: "RRH" },
    // { bucketname: "dwpc_bucket", config_bucket: "DWPC" },
    // { bucketname: "Range_extender", config_bucket: "RangeExtender" }
]
const executeQueries = async () => {
    for (const queryInfo of queries) {
        await myQuery(queryInfo.bucketname, queryInfo.config_bucket);
    }
}
(async () => {
    try {
        await executeQueries();
        const endTime = new Date();
        const totalTime = endTime - startTime;
        config_Toal_Time.Total_Execution_Time_FirstPage = totalTime;
        fs.writeFileSync("/home/Db50Gw/DBEDGE/server/timer/trigger.json", JSON.stringify(config_Toal_Time, null, 2), 'utf-8');
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
})();