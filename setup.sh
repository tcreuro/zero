#!/bin/bash

sudo apt-get update -y
sudo apt-get dist-upgrade -y
sudo apt install ansible -y
sudo apt install git -y
sudo apt install tree -y

# install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

# source updated bashrc
. ~/.bashrc

# check versions installed
ansible --version
git --version
tree --version
. ~/.nvm/nvm.sh
echo "nvm version"
nvm --version

# install node
nvm install 10.6.0

# set 
nvm use 10.6.0