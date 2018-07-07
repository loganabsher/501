'use strict';

const net = require('net');
const EE = require('events');

const Client = require('./model/client.js');

const PORT = process.env.PORT || 3000;

const server = net.createServer();
const ee = new EE();

const pool = [];

const colorValues = {
  black: '30',
  red: '31',
  green: '32',
  yellow: '33',
  blue: '34',
  magenta: '35',
  cyan: '36',
  white: '37',
  default: '39'
};

ee.on('@all', function (client, string) {
  pool.forEach((user) => {
    user.socket.write(`${client.nickname}: ${string}`, colorValues.default);
  });
});

ee.on('@dm', function (client, string) {
  let nickname = string.split(' ').shift().trim();
  let message = string.split(' ').splice(1).join(' ').trim();

  pool.forEach((user, string) => {
    if(user.nickname === nickname) {
      user.socket.write(`${client.nickname}: ${message}`, colorValues.default);
    }
  });
});

ee.on('@name', function () {

});

ee.on('@poke', function (client, string) {
  pool.forEach((user) => {
    if(user.nickname === string){
      user.socket.write(`${client.nickname}: poked you`, colorValues.green);
    }
  });
});

ee.on('@users', function (client) {
  pool.forEach((user) => {
    if(client.nickname !== user.nickname) {
      client.socket.write(`${user.nickname}\n`, colorValues.green);
    }
  });
});

ee.on('default', function (client) {
  client.socket.write('not a command \n');
});

server.on('connection', function (socket) {
  let client = new Client(socket);
  pool.push(client);

  writeAll(`${client.nickname} has connected`, colorValues.green);

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
      writeAll(`${client.nickname} disconnected due to an error`, colorValues.yellow);
    } else {
      writeAll(`${client.nickname} has disconnected`, colorValues.red);
    }
    pool.filter((user) => user.id = client.id);
  });
});

function writeAll(message, color) {
  pool.forEach((user) => user.socket.write(`${message} \n`, color));
}


server.listen(PORT, function () {
  console.log('server up at', PORT);
});
