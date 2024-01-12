const os = require('os');
const fs=require('fs');
let InfluxDB_config = JSON.parse(fs.readFileSync("/home/Db50Gw/DBEDGE/server/InfluxDB_details/config.json"));
function getIPAddress() {
  const interfaces = os.networkInterfaces();
  let ipAddress;
  Object.keys(interfaces).forEach((iface) => {
    interfaces[iface].forEach((details) => {
      if (details.family === 'IPv4' && !details.internal) {
        ipAddress = details.address;
      }
    });
  });

  return ipAddress;
}
const piIPAddress = getIPAddress();
InfluxDB_config.host = piIPAddress;
// fs.writeFileSync("/home/Db50Gw/DBEDGE/server/InfluxDB_details/config.json", JSON.stringify(InfluxDB_config, null, 2), 'utf-8');
// console.log('Raspberry Pi IP Address:', piIPAddress);