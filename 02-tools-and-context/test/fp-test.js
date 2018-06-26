'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

const test = [1, 2, 3, 4];

describe('fb.js test', function () {
  describe('#map', function () {
    it('should return 2, 4, 6, 8', () => {
      expect(fp).to.have.property('map');
      expect(fp.map).to.be.a('function');
      let res = fp.map(test, (ele) => {
        return ele * 2;
      });
      expect(res).to.equal([2, 4, 6, 8]);
    });
  });
  describe('filter', function () {
    it('should return 1, 2', () => {
      expect(fp).to.have.property('filter');
      expect(fp.filter).to.be.a('function');
    });
  });
  describe('#concat', function () {
    it('should return 1, 2, 3, 4, 1, 2, 3, 4', () => {
      expect(fp).to.have.property('concat');
      expect(fp.concat).to.be.a('function');
    });
  });
  describe('#splice', function () {
    it('should return 1, 2', () => {
      expect(fp).to.have.property('splice');
      expect(fp.splice).to.be.a('function');
    });
  });
});
