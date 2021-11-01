// exports = module.exports = app = {}
// https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js

// const methods = require("methods");

// app.init = function () {
//   this.cache = {};
//   this.engines = {};
//   this.settings = {};

//   this._router = undefined;
// };

const http = require("http");
const httpMethods = require("./lib/methods");

// const app = {};
// exports = module.exports = app;

const app = (exports = module.exports = {});

app.getHttpMethods = httpMethods.getHttpMethods;

app.listen = function listen() {
  const server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

exports.abc = function go() {};

app.init = function () {
  this.cache = {};
  this.engines = {};
  this.settings = {};

  this._router = undefined;
};
