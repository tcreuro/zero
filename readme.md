# sumobot - zero setup

sumobot development on a raspberry pi zero w.

developing a machine learning model using sumobot sensor data.

- luminosity sensors

## initial pi setup

make sure you change your `passwd`

## setup tool sets

setup script to update/install:

- update
- dist-upgrade
- ansible
- git
- tree
- nvm (node version manager)
- node

```bash
git clone https://github.com/tcreuro/zero.git

cd zero

chmod +x setup.sh

./setup.sh
```

## install npm modules

```bash
cd ~/zero

chmod +x npm.sh

./npm.sh
```

## enable ic2

```bash
sudo raspi-config
```

## references

[simplebot](https://github.com/nodebotsau/simplebot)

[tensorflow js](https://js.tensorflow.org/)

[npm @agilatech/tsl2561](https://www.npmjs.com/package/@agilatech/tsl2561)

[pi download - raspian stretch lite](https://www.raspberrypi.org/downloads/raspbian/)

[pi wifi](https://howchoo.com/g/ndy1zte2yjn/how-to-set-up-wifi-on-your-raspberry-pi-without-ethernet)

[pi ssh setup](https://www.raspberrypi.org/documentation/remote-access/ssh/)

[pi security](https://www.raspberrypi.org/documentation/configuration/security.md)

[nvm setup](https://github.com/creationix/nvm)

[pinout details](https://github.com/gadgetoid/Pinout.xyz)