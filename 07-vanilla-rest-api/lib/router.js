'use strict';

const parseURL = require('./parse-url.js');
const parseJSON = require('./parse-json.js');

const router = module.exports = function () {
  this.routes = {
    POST: {},
    GET: {},
    PUT: {},
    DELETE: {}
  };
};

router.prototype.post = function (endpoint, callback) {
  this.routes.POST[endpoint] = callback;
};

router.prototype.get = function (endpoint, callback) {
  this.routes.GET[endpoint] = callback;
};

router.prototype.put = function (endpoint, callback) {
  this.routes.PUT[endpoint] = callback;
};

router.prototype.delete = function (endpoint, callback) {
  this.routes.DELETE[endpoint] = callback;
};

router.prototype.route = function () {
  return function (req, res) {
    Promise.all([
      parseURL(req),
      parseJSON(req)
    ])
      .then(function () {
        if(typeof this.routes[req.method][req.url.pathname] === 'function') {
          this.routes[req.method][req.url.pathname](req, res);
          return;
        }

        console.error('route not found');
        res.writeHead(404, {
          'Content-Type': 'text/plain'
        });

        res.write('route not found');
        res.end();
      })
      .catch((err) => {
        console.error(err);
        res.writeHead(400, {
          'Content-Type': 'text/plain'
        });

        res.write('bad request');
        res.end();
      });
  };
};
