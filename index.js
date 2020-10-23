var TeleSignSDK = require ('telesignsdk');
var client = new TeleSignSDK (
  'E7BAE14E-9742-4721-B721-DE14EA5A35D4',
  'rtMTFtz2TTt3AHMRxf2LW5zeoEuEAF+TuY0B/mw672nrGqmHTanu5txGLxf0uJ5Cy+dJADHUyGhpwSGOImXp8A=='
);

message = function (err, resBody) {
  if (err) {
    console.error (err);
  } else {
    console.log ('success');
    console.log (resBody);
  }
};
client.sms.message (message, '918688105958', 'Hello', 'ARN');
