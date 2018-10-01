'use strict';

const CLI = require('../index.js');
const expect = require('chai').expect;

describe('cli.js test', function () {
  it('should upper case the first letter of each command line argument', () => {
    expect(CLI).to.be.a('function');
    let res = CLI(process.argv);
    expect(res).to.be.an('object');
  });
});
