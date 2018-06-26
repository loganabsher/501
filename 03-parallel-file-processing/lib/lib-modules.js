'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.fileReader = function (file, callback) {
  fs.readFile(file, (err, data) => {
    if (err) return callback(err);
    return callback(console.log(Buffer.alloc(8, data, 'hex')), () => null);
  });
};
