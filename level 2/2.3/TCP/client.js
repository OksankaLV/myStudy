const net = require('net');
const client = new net.Socket();
const port = 5500;
const host = '127.0.0.1';
let timeStart = new Date();
client.connect(port, host, function() {
    //console.log('Connected');
    
client.write("Hello, I am the TCP client who submitted this data." /*+ client.address().address*/);
});
client.on('data', function (data) {
console.log('Server Says : ' + data + 'Data transfer time:' + (new Date()-timeStart) + 'ms');
});
client.on('close', function() {
console.log('Connection closed');
});