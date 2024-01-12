/************************************************

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.
file: Mac_packets.js

Brief: Finding total number of packets for a particular mac (Device)
Service: Mac_packets.js

Release version: version 1.0.0

Release Date: January 05, 202

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
let config_Time = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/timeDuration/config.json"));
let config_Total_Time = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/timer/trigger.json"));
let time = config_Time.page3.duration;
let data_packet = [];
let Arr = [];
function resetarray() {
    Arr = [];
}
async function findUniqueMACs(bucket_name, Device_Type) {
    const Flux = `
    from(bucket: "${bucket_name}")
    |> range(start: -${time}h)
    |> filter(fn: (r) => r._field == "DeviceVersion")
    |> group(columns: ["MAC"])
    |> count()
    `;

    try {
        resetarray();
        const result = await queryApi.collectRows(Flux);
        // console.log(result);
        let obj;
        if (result.length > 0) {
            for (let i = 0; i < result.length; i++) {
                obj = {
                    device: Device_Type,
                    mac: result[i].MAC,
                    total: result[i]._value
                };
                data_packet.push(obj);
            }
            return Arr;
        } else {
            console.log(`No result found for ${bucket_name}`);
        }
    } catch (error) {
        if (error instanceof HttpError) {
            console.error(`InfluxDB Error: ${error}`);
        } else {
            console.error(`An error occurred: ${error}`);
        }
    }
}

async function fetch_iqa_data() {
    const iaq_bucket = "iaq_bucket";
    const type = "IAQ";
    const result = await findUniqueMACs(iaq_bucket, type);
    if (result) {
        data_packet.push(result);
    }
}
//############## For RE #####################
async function fetch_RE_data() {
    const re_bucket = "Range_extender";
    const type = "Range-Extender";
    const result = await findUniqueMACs(re_bucket, type);
    if (result) {
        data_packet.push(result);
    }
}
//############# DWPC #######################
async function fetch_DWPC_data() {
    const dwpc_bucket = "dwpc_bucket";
    const type = "DWPC";
    const result = await findUniqueMACs(dwpc_bucket, type);
    if (result) {
      //  data_packet.push(result);
    }
}
//########### RRH ##########################
async function fetch_RRH_data() {
    const rrh_bucket = "rrh_bucket";
    const type = "RRH";
    const result = await findUniqueMACs(rrh_bucket, type);
    if (result) {
       // data_packet.push(result);
    }
}

//########### PixelMR ########################
async function fetch_PixelMR_data() {
    const pixelMR_bucket = "pixelmr_bucket";
    const type = "PixelMr";
    const result = await findUniqueMACs(pixelMR_bucket, type);
    if (result) {
       // data_packet.push(result);
    }
}
//########### PixelDesk ########################
async function fetch_PixelDesk_data() {
    const pixelDesk_bucket = "pixeldesk_bucket";
    const type = "PixelDesk";
    const result = await findUniqueMACs(pixelDesk_bucket, type);
    if (result) {
       // data_packet.push(result);
    }
}

//########### Gateway ###########################
async function fetch_Gateway_data() {
    const Gateway_bucket = "gateway_bucket";
    const type = "Gateway";
    const result = await findUniqueMACs(Gateway_bucket, type);
    if (result) {
      // data_packet.push(result);
    }
}
async function fetchDataAndWriteToFile() {
    try {
        await fetch_iqa_data();
        await delay(500);
        await fetch_RE_data();
        await delay(500);
        await fetch_DWPC_data();
        await delay(500);
        await fetch_RRH_data();
        await delay(500);
        await fetch_PixelMR_data();
        await delay(500);
        await fetch_PixelDesk_data();
        await delay(500);
        await fetch_Gateway_data()
        const jsonContent = JSON.stringify(data_packet, null, 2);
        fs.writeFileSync("/home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/config_Mac.json", jsonContent, "utf-8");

        const endTime = new Date();
        const totalTime = endTime - startTime;
        console.log("Total execution time:", totalTime);
        config_Total_Time.Total_Execution_Time_ThirdPage = totalTime;
        fs.writeFileSync("/home/Db50Gw/DBEDGE/server/timer/trigger.json", JSON.stringify(config_Total_Time, null, 2), 'utf-8');
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
fetchDataAndWriteToFile();
