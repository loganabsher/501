'use strict';

const fp = require('./lib/fp.js');

let args = process.argv;

module.exports = exports = function () {
  fp.map(args, (ele) => {
    return ele[0].toUpperCase();
  });
};
