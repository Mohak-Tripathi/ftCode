#!/bin/bash
cd $(dirname $0)
#sudo rm  update.zip
#sudo rm -rf update
sudo unzip update.zip
#cd update
sudo chmod 777 script.sh
sudo ./script.sh
