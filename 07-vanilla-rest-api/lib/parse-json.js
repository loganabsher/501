'use strict';

module.exports = function (req) {
  return new Promise(function(resolve, reject) {
    if(req.method === 'POST' || req.method === 'PUT') {
      let body = '';

      req.on('data', (data) => {
        body += data.toString();
      });

      req.on('end', () => {
        try {
          req.body = JSON.parse(body);
          resolve(req);
        } catch(err) {
          console.error(err);
          reject(err);
        }
      });
      return;
    }
  });
};
