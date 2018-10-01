'use strict';

const Greet = require('../lib/greet.js');
const assert = require('assert');

describe('greet.js test', function () {
  describe('sayHey() test', function () {
    it('should return Hello World!', () => {
      let res = Greet('World!');
      assert.ok(res === 'Hello World!', 'returned data does not equal john doe');
    });
    it('should return null with invalid data type', () => {
      let res = Greet(true);
      assert.ok(res === null, 'not returning null with invalid data type');
    });
    it('should throw no data entered error', () => {
      assert.throws(function () {
        Greet('');
      }, 'error not thrown');
    });
  });
});
