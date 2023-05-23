const UDP = require('dgram')

const client = UDP.createSocket('udp4')

const port = 2222

const hostname = 'localhost'
const timeStart = new Date();
client.on('message', (message, info) => {
  // get the information about server address, port, and size of packet received.

  //console.log('Address: ', info.address, 'Port: ', info.port, 'Size: ', info.size)

  //read message from server

  console.log('Server Says : ', message.toString(), 'Data transfer time:', (new Date()-timeStart), 'ms')
})

const packet = Buffer.from('Hello, I am the UDP client who submitted this data.')

client.send(packet, port, hostname, (err) => {
  if (err) {
    console.error('Failed to send packet !!')
  } else {
    console.log('Packet send !!')
    }
})
