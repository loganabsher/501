'use strict';

module.exports = function (str) {
  if(str.length < 1) throw new Error('required entered data to be length 1 or greater');
  console.log(typeof str);
  if(typeof str !== 'string') return null;
  return 'Hello ' + str;
};
