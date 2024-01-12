/************************************************

Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.
file:  Find_min_max_avg.js

Brief: fetch data from FluxDB of buckets and find max ,min ,avg values of all devices

Service: Find max ,min,avg value of the devices 

Release version: version 1.0.0

Release Date: January 04, 2024

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
let time = config_Time.page4.duration;
let dataBucket = [];

async function myQuery(bucketName, measurement, field, DeviceType) {
    // console.log("bucketName, measurement, field,DeviceType", bucketName, measurement, field, DeviceType)
    const fluxQuery_min = `
    from(bucket: "${bucketName}")
    |> range(start: -${time}h)
    |> filter(fn: (r) => r["_measurement"] == "${measurement}")
    |> filter(fn: (r) => r["_field"] == "${field}")
    |> min(column: "_value")
  `;
    const fluxQuery_max = `
  from(bucket: "${bucketName}")
  |> range(start: -${time}h)
  |> filter(fn: (r) => r["_measurement"] == "${measurement}")
  |> filter(fn: (r) => r["_field"] == "${field}")
  |> max(column: "_value")
  `;
    const fluxQuery_avg = `
  from(bucket: "${bucketName}")
  |> range(start: -${time}h)
  |> filter(fn: (r) => r["_measurement"] == "${measurement}")
  |> filter(fn: (r) => r["_field"] == "${field}")
  |> median(column: "_value")
  `
    try {
        const result = await queryApi.collectRows(fluxQuery_min);
        const result_max = await queryApi.collectRows(fluxQuery_max);
        const result_avg = await queryApi.collectRows(fluxQuery_avg);
        let min, max, avg;

        if (result.length > 0) {
            const firstRow_min = result[0];
            min = firstRow_min._value;

            const firstRow_max = result_max[0];
            max = firstRow_max._value;

            const firstRow_avg = result_avg[0];
            avg = firstRow_avg._value;

        } else {
            console.log("No results found for the given query.");
        }

        let obj = {
            Device_type: DeviceType,
            Field: field,
            MinValue: min,
            MaxValue: max,
            avg: avg
        };

        return obj;
    } catch (error) {
        if (error instanceof HttpError) {
            console.error(`InfluxDB Error: ${error}`);
        } else {
            console.error(`An error occurred: ${error}`);
        }
        return null;
    }
}
async function fetch_RRH_Data() {
    const rrh = [
        "ms5637Temperature", "ms5637Pressure", "sgp40VocIndex", "shct3RelativeHumidity", "shct3Temperature", "zmod4xxTvoc", "zmod4xxEtoh", "zmod4xxCO2", "zmod4xxIaq", "Zmod4xxSulfurIntensity", "Zmod4xxSulfurOdor", "floor", "tgs2603TrimethylAmine", "min", "max"
    ];
    const rrh_bucket = "rrh_bucket";
    let DeviceType = 'RRH'
    const measurement = "restroom_hygiene_measurement";
    //resetArry();
    let deviceTypeArr = [];
    for (let i = 0; i < rrh.length; i++) {
        const resultObj = await myQuery(rrh_bucket, measurement, rrh[i], DeviceType);
        if (resultObj) {
            deviceTypeArr.push(resultObj);
        }
    }
    dataBucket.push(deviceTypeArr);
}

//################################### for DWPC #####################################
async function fetch_DWPC_Data() {
    const DWPC = [
        "Incount", "Outcount", "Absolute"
    ];
    const dwpc_bucket = "dwpc_bucket";
    let DeviceType = 'DWPC'
    const measurement = "footfall_counter_measurement";
    //resetArry();
    let deviceTypeArr = [];
    for (let i = 0; i < DWPC.length; i++) {
        const resultObj = await myQuery(dwpc_bucket, measurement, DWPC[i], DeviceType);
        if (resultObj) {
            deviceTypeArr.push(resultObj);
        }
    }
    dataBucket.push(deviceTypeArr);
}

//################################### Range_Extender ################################
async function fetch_RE_Data() {
    const RE = [
        "ms5637Temperature", "ms5637Pressure", "sgp40VocIndex", "shct3RelativeHumidity", "shct3Temperature"
    ];
    const re_bucket = "Range_extender";
    let DeviceType = 'Range-Extender'
    const measurement = "Range_extender_measurement";
    let deviceTypeArr = [];
    for (let i = 0; i < RE.length; i++) {
        const resultObj = await myQuery(re_bucket, measurement, RE[i], DeviceType);
        if (resultObj) {
            deviceTypeArr.push(resultObj);
        }
    }
    dataBucket.push(deviceTypeArr);
}
//################################### IAQ ################################################
async function fetch_iaq_Data() {
    const iaq = [
        "ms5637Temperature", "ms5637Pressure", "scd30Co2", "scd30Temperature", "scd30RelativeHumidity", "sgp40VocIndex", "shct3RelativeHumidity", "shct3Temperature", "veml7700Lux", "zmod4xxTvoc",
        "zmod4xxEtoh", "zmod4xxCO2", "zmod4xxIaq", "sps30Pm1", "sps30Pm2_5", "sps30Pm4", "sps30Pm10"
    ];
    const iaq_bucket = "iaq_bucket";
    let DeviceType = 'IAQ'
    const measurement = "iaq_measurement";
    let deviceTypeArr = [];
    for (let i = 0; i < iaq.length; i++) {
        const resultObj = await myQuery(iaq_bucket, measurement, iaq[i], DeviceType);
        if (resultObj) {
            deviceTypeArr.push(resultObj);
        }
    }
    dataBucket.push(deviceTypeArr);
}

//########################################## pixelMr ###################################
async function fetch_PixelMR_Data() {
    const pixelMR = [
        "CpuUtilization", "RamUtilization", "CpuTemperature", "DiskUtilization", "temperature", "humidity", "PeopleCount"
    ];
    const pixelMR_bucket = "pixelmr_bucket";
    let DeviceType = 'PixelMr'
    const measurement = "people_count_measurement";
    let deviceTypeArr = [];
    for (let i = 0; i < pixelMR.length; i++) {
        const resultObj = await myQuery(pixelMR_bucket, measurement, pixelMR[i], DeviceType);
        if (resultObj) {
            deviceTypeArr.push(resultObj);
        }
    }
    dataBucket.push(deviceTypeArr);
}
//################################# pixelDesk ###############################################
async function fetch_PixelDesk_Data() {
    const pixelDesk = [
        "CpuUtilization", "RamUtilization", "CpuTemperature", "DiskUtilization", "temperature", "humidity"
    ];
    const pixelDesk_bucket = "pixeldesk_bucket";
    let DeviceType = 'PixelDesk'
    const measurement = "deskoccupancy_measurement";
    let deviceTypeArr = [];
    for (let i = 0; i < pixelDesk.length; i++) {
        const resultObj = await myQuery(pixelDesk_bucket, measurement, pixelDesk[i], DeviceType);
        if (resultObj) {
            deviceTypeArr.push(resultObj);
        }
    }
    dataBucket.push(deviceTypeArr);
}
//########################################### Gateway ###########################################
async function fetch_Gateway_Data() {
    const Gateway = [
        "CpuTemperature", "DiskUtilization", "RamUtilization", "VoltageLevel", "CpuUtilization", "Boot_Disk_utilization", "Root_Disk_utilization", "Motherboard_temperature", "Motherboard_humidity",
        "Uptime", "Clock_frequency", "Network_Usage_sent", "Network_Usage_recived", "Average_Load", "Total_Task_count", "Total_Thread_count", "Running_Thread_count"
    ];
    const Gateway_bucket = "gateway_bucket";
    let DeviceType = 'Gateway'
    const measurement = "gateway_measurement";
    let deviceTypeArr = [];
    for (let i = 0; i < Gateway.length; i++) {
        const resultObj = await myQuery(Gateway_bucket, measurement, Gateway[i], DeviceType);
        if (resultObj) {
            deviceTypeArr.push(resultObj);
        }
    }
    dataBucket.push(deviceTypeArr);
}
fetch_DWPC_Data()
    .then(() => {
        return fetch_RRH_Data();
    })
    .then(() => {
        return fetch_RE_Data()
    })
    .then(() => {
        return fetch_iaq_Data()
    })
    .then(() => {
        return fetch_PixelMR_Data()
    })
    .then(() => {
        return fetch_PixelDesk_Data()
    })
    .then(() => {
        return fetch_Gateway_Data()
    })
    .then(() => {
        const jsonContent = JSON.stringify(dataBucket, null, 2);
        fs.writeFileSync("/home/Db50Gw/DBEDGE/server/last_Page/avgconfig.json", jsonContent, "utf-8");

        const endTime = new Date();
        const totalTime = endTime - startTime;
        console.log("totalTime", totalTime);

        config_Total_Time.Total_Execution_Time_LastPage = totalTime;
        fs.writeFileSync("/home/Db50Gw/DBEDGE/server/timer/trigger.json", JSON.stringify(config_Total_Time, null, 2), 'utf-8');
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        let formattedTime = hours + ":" + minutes + ":" + seconds;
        config_Total_Time.Last_TimeStamp = formattedTime;
        fs.writeFileSync("/home/Db50Gw/DBEDGE/server/timer/trigger.json", JSON.stringify(config_Total_Time, null, 2), 'utf-8');
    }
    )
    .catch((error) => {
        console.error("Error:", error);
    });






