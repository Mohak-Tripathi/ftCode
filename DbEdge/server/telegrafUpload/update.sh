#!/bin/bash
cd $(dirname $0)
sudo mv telegraf.conf /home/Db50Gw/iot-api-apps/telegraf-1.27.3/
cd /home/Db50Gw/iot-api-apps/telegraf-1.27.3/
sudo chmod 777 telegraf.conf
sudo systemctl daemon-reload
