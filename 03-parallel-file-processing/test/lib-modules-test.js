'use strict';

const expect = require('chai').expect;

const libModules = require('../lib/lib-modules.js');

describe('--libModules--', function () {
  describe('#fileReader', function () {
    it('should work properly with proper pathway', (done) => {
      libModules.readFile()
    });
  });
});
