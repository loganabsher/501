'use strict';

const storage = {};

module.exports = exports = {};

exports.createItem = function (schemaName, item) {
  if(!schemaName) return Promise.reject(new Error('expected schema'));
  if(!item) return Promise.reject(new Error('no item provided'));
  if(!storage[schemaName]) storage[schemaName] = {};

  storage[schemaName][item.id] = item;

  return Promise.resolve(item);
};

exports.fetchItem = function (schemaName, id) {
  return new Promise (function (resolve, reject) {
    if(!schemaName) return reject(new Error('expected schema'));
    if(!id) return reject(new Error('no id provided'));

    let schema = storage[schemaName];
    if(!schema) return reject('no schema found');

    let item = schema.id;
    if(!item) return reject('item not found');

    resolve(item);
  });
};
