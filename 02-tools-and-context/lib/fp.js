'use strict';

module.exports = exports = {};

exports.map = function (arr, callback) {
  return Array.prototype.map.call(arr, callback);
};

exports.map([1, 2, 3, 4], function(ele) {console.log(ele * 2)});

exports.filter = function (arr, callback) {
  return Array.prototype.filter.call(arr, callback);
};

exports.filter([1, 2, 3, 4], function (ele){console.log(ele < 3)});

exports.concat = function (arr1, arr2) {
  return Array.prototype.concat.apply(arr1, arr2);
};

exports.concat([1, 2, 3, 4], [5, 6, 7, 8]);

exports.splice = function (arr, callback) {
  return Array.prototype.splice.call(arr, parameters);
};
