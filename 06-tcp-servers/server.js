'use strict';

const net = require('net');
const EE = require('events');

const Client = require('./model/client.js');

const PORT = process.env.PORT || 3000;

const server = net.createServer();
const ee = new EE();

const pool = [];

ee.on('@all', function (client, string) {
  pool.forEach((user) => {
    user.socket.write(`${client.nickname}: ${string}`);
  });
});

ee.on('@dm', function (client, string) {
  let nickname = string.split(' ').shift().trim();
  let message = string.split(' ').splice(1).join(' ').trim();

  pool.forEach((user) => {
    if (user.nickname === nickname) {
      user.socket.write(`${client.nickname}: ${message}`);
    }
  });
});

ee.on('default', function (client, string) {
  client.socket.write('not a command \n');
});

server.on('connection', function (socket) {
  let client = new Client(socket);
  pool.push(client);

  socket.on('data', function (data) {
    const command = data.toString().split(' ').shift().trim();

    if(command.startsWith('@')) {
      ee.emit(command, client, data.toString().split(' ').splice(1).join(' '));
      return;
    }

    ee.emit('default', client, data.toString());
  });
});

server.listen(PORT, function () {
  console.log('server up at', PORT);
});
