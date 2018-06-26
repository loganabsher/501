'use strict';

const libModules = require('./lib/fileReader.js');

libModules.fileReader(`${__dirname}/assets/one.txt`);
libModules.fileReader(`${__dirname}/assets/two.txt`);
libModules.fileReader(`${__dirname}/assets/three.txt`);
