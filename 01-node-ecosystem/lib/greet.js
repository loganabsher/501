'use strict';

module.exports = function (str) {
  if(str.length < 1) throw new Error('required entered data to be length 1 or greater');
  if(typeof str !== 'string') throw new Error('invalid data type, required type number but instead got type ' + typeof str);
  return 'hello ' + str;
};
