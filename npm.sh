#!/bin/bash

# set
. ~/.nvm/nvm.sh
nvm use 10.6.0

# install npm modules

npm install -g node-gyp
npm install -g grunt-cli
npm install @agilatech/tsl2561
npm ls