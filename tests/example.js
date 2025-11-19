const { UdpStream, createPacket } = require('..');

const stream = UdpStream.create({ overloadBuffer: true });

stream.on('data', (data) => {
  console.log('Received:', data);

  stream.close();
});

const onBind = function() {
  console.log('Bound:',stream.localAddress+':'+stream.localPort);

  const buffer = Buffer.from('Hello overload!');
  buffer.port = stream.localPort; // overload buffer with port property

  console.log('Writing:',buffer);
  stream.write(buffer);
}

stream.bind(onBind);

