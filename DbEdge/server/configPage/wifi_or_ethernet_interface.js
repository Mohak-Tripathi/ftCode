/*........................
Copyright (c) 2022, FlamencoTech India Pvt. Ltd.
All rights reserved.
file:  health.js

Brief: Updating static ip address and static router in dhcpcd.conf File 

Service: wifi_or_ethernet_interface.js 

Release version: version 1.0.0

Release Date: Aug 17, 2023

Author: Jyoti_Bhartiya

..........................*/

const fs = require('fs');

// Read WiFi status and network settings from config.json
fs.readFile('config.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading config.json:', err);
        return;
    }

    const configData = JSON.parse(data);
    const wifiStatus = configData.admin.wifi_status;
    // const staticIpAddress = configData.network_information.static_ip;
    // const staticRouter = configData.network_information.static_ip_gateway;

    // Modify dhcpcd.conf based on WiFi status
    fs.readFile('/etc/dhcpcd.conf', 'utf8', (err, dhcpcdData) => {
        if (err) {
            console.error('Error reading dhcpcd.conf:', err);
            return;
        }

        let modifiedData = dhcpcdData;

        if (wifiStatus == 1) {
            modifiedData = modifiedData.replace(/^nohook wpa_supplicant/mg, '#nohook wpa_supplicant');
            modifiedData = modifiedData.replace(/^#interface eth0/mg,'interface wlan0');
            modifiedData = modifiedData.replace(/#interface wlan0/mg, 'interface wlan0');
            modifiedData = modifiedData.replace(/interface eth0/mg, 'interface wlan0');
            
        } else if (wifiStatus == 0) {
            modifiedData = modifiedData.replace(/^#nohook wpa_supplicant/mg, 'nohook wpa_supplicant');
            modifiedData = modifiedData.replace(/#interface eth0/mg, 'interface eth0');
            modifiedData = modifiedData.replace(/#interface wlan0/mg, 'interface eth0');
            modifiedData = modifiedData.replace(/interface wlan0/mg, 'interface eth0');
        }

        // Update static IP address and static router values
        // modifiedData = modifiedData.replace(/static ip_address=.*$/m, `static ip_address=${staticIpAddress}`);
        // modifiedData = modifiedData.replace(/static routers=.*$/m, `static routers=${staticRouter}`);

        fs.writeFile('/etc/dhcpcd.conf', modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing modified dhcpcd.conf:', err);
                return;
            }
            console.log('dhcpcd.conf has been modified.');
        });
    });
});
