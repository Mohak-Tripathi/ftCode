#!/bin/bash
cd $(dirname $0)
sudo node ip.js
sudo node wifi_or_ethernet_interface.js