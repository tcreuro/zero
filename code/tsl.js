console.info("connecting to tsl2561 on /dev/i2c-1 0x39")

//load the module and create an instance
const addon = require('@agilatech/tsl2561');

// create an instance on the /dev/i2c-1 I2C file at address 0x39
const tsl2561 = new addon.Tsl2561('/dev/i2c-1', 0x39);

//get basic device info
const name = tsl2561.deviceName();  // returns string with name of device
const type = tsl2561.deviceType();  // returns string with type of device
const version = tsl2561.deviceVersion(); // returns this software version
const active = tsl2561.deviceActive(); // true if active, false if inactive
const numVals = tsl2561.deviceNumValues(); // returns the number of paramters sensed



//get parameters info and values
const paramName0 = tsl2561.nameAtIndex(0);
const paramType0 = tsl2561.typeAtIndex(0);
const paramVal0 = tsl2561.valueAtIndexSync(0);

// asynchronous value collection
tsl2561.valueAtIndex(0, function (err, val) {
    if (err) {
       console.log(err);
    }
    else {
        console.log(`index value: ${val}`);
    }
});