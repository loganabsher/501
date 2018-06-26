'use strict';

const libModules = require('./lib/libModules.js');

libModules.fileReader(`${__dirname}/assets/one.txt`, null);
libModules.fileReader(`${__dirname}/assets/two.txt`, null);
libModules.fileReader(`${__dirname}/assets/three.txt`, null);
