'use strict';

const Arithmetic = require('../lib/arithmetic.js');
const assert = require('assert');

describe('arithmetic.js test', function () {
  describe('add() test', function () {
    it('should return 4', () => {
      let res = Arithmetic.add(2, 2);
      assert.ok(res === 4, 'returned data does not equal 4');
    });
    it('should throw invalid data type error', () => {
      assert.throws(function () {
        Arithmetic.add('2', '2');
      }, 'error not thrown');
    });
  });

  describe('sub() test', function () {
    it('should return 2', () => {
      let res = Arithmetic.sub(4, 2);
      assert.ok(res === 2, 'returned data does not equal 2');
    });
    it('should throw invalid data type error', () => {
      assert.throws(function () {
        Arithmetic.sub('4', '2');
      }, 'error not thrown');
    });
  });
});
