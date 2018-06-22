'use strict';

const Greet = require('../lib/greet.js');
const assert = require('assert');

describe('greet.js test', function () {
  describe('sayHey() test', function () {
    it('should return hello john doe', () => {
      let res = Greet('john doe');
      assert.ok(res === 'hello john doe', 'returned data does not equal john doe');
    });
    it('should throw wrong data type error', () => {
      assert.throws(function () {
        Greet(true);
      }, 'error not thrown');
    });
    it('should throw no data entered error', () => {
      assert.throws(function () {
        Greet('');
      }, 'error not thrown');
    });
  });
});
