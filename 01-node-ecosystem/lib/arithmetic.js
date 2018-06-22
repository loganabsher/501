'use strict';

module.exports = exports = {};

exports.add = function (num1, num2) {
  if(typeof num1 !== 'number') throw new Error('invalid data type, required type number but instead got type ' + typeof num1);
  if(typeof num2 !== 'number') throw new Error('invalid data type, required type number but instead got type ' + typeof num2);
  return num1 + num2;
};

exports.sub = function (num1, num2) {
  if(typeof num1 !== 'number') throw new Error('invalid data type, required type number but instead got type ' + typeof num1);
  if(typeof num2 !== 'number') throw new Error('invalid data type, required type number but instead got type ' + typeof num2);
  return num1 - num2;
};
