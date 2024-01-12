#!/bin/bash
#cd /home/Db50Gw/DBEDGE/server/timer
#sudo node /home/Db50Gw/DBEDGE/server/InfluxDB_details/Find_ip.js
sudo /home/Db50Gw/DBEDGE/server/First_Page/uniqueMac.sh
echo "uniqueMac.sh..."
wait
sudo node /home/Db50Gw/DBEDGE/server/total_packet_2nd_pg/TotalPacket.js
echo "test_totalPacket.sh..."
wait
sudo node /home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/alive_macs/alive_macs.js
echo "alive.sh..."
sudo /home/Db50Gw/DBEDGE/server/total_mac_packet_3rd_pg/Mac_packet.sh
echo "Mac_packet.sh..."
wait
sudo /home/Db50Gw/DBEDGE/server/last_Page/lastPage.sh
