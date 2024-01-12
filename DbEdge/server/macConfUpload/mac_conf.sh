#!/bin/bash
cd $(dirname $0)
sudo mv macconfiguration.json /home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/alive_macs/
cd /home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/alive_macs/
sudo chmod 777 macconfiguration.json