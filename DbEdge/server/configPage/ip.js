const fs = require('fs');

// Read WiFi status and network settings from config.json
fs.readFile('config.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading config.json:', err);
        return;
    }

    const configData = JSON.parse(data);
    const staticIpAddress = configData.static_ip_params.ip;
    const staticRouter = configData.static_ip_params.router;

    // Modify dhcpcd.conf based on WiFi status
    fs.readFile('/etc/dhcpcd.conf', 'utf8', (err, dhcpcdData) => {
        if (err) {
            console.error('Error reading dhcpcd.conf:', err);
            return;
        }
        //coverting dhcpcd.conf file data into array 
        let modifiedData = dhcpcdData.split('\n');
        // console.log("modifiedData",modifiedData);
        const ipAddressLineNumber = 45;
        const routerLineNumber = 47;
        // Update static IP address and static router values
        modifiedData[ipAddressLineNumber - 1] = `static ip_address=${staticIpAddress}`;
        modifiedData[routerLineNumber - 1] = `static routers=${staticRouter}`;
        modifiedData = modifiedData.join('\n');

        fs.writeFile('/etc/dhcpcd.conf', modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing modified dhcpcd.conf:', err);
                return;
            }
            console.log('dhcpcd.conf has been modified.');
        });
    });
});
