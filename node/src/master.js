const net = require('net');
const fork = require('child_process').fork;

var handle = net.createServerHandle('0.0.0.0', 4000);

for(var i=0;i<4;i++) {
   fork('./worker').send({}, handle);
}