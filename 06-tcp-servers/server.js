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
    if(user.nickname === nickname) {
      user.socket.write(`${client.nickname}: ${message}`);
    }
  });
});

ee.on('@name', function () {

});

ee.on('@poke', function (client, string) {
  pool.forEach((user) => {
    if(user.nickname === string){
      user.socket.write(`${client.nickname}: poked you`);
    }
  });
});

ee.on('@users', function (client) {
  pool.forEach((user) => {
    client.socket.write(user);
  });
});

ee.on('default', function (client) {
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

  server.on('close', function (err) {
    if(err) {
      writeAll(`${client.name} disconnected due to an error`);
    } else {
      writeAll(`${client.name} has disconnected`);
    }
    pool.filter((user) => user.id = client.id);
  });
});

function writeAll(message) {
  pool.forEach((ele) => ele.write(message));
}


server.listen(PORT, function () {
  console.log('server up at', PORT);
});
