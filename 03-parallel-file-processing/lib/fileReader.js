'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.fileReader = function (file) {
  fs.readFile(file, function (err, data) {
    if (err) throw err;
    console.log(Buffer.alloc(8, data, 'hex'));
  });
};
