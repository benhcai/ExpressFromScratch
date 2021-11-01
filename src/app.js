// exports = module.exports = app = {}
// https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js

// const methods = require("methods");

// app.init = function () {
//   this.cache = {};
//   this.engines = {};
//   this.settings = {};

//   this._router = undefined;
// };

console.clear();

const http = require("http");
const methods = require("./lib/methods").getHttpMethods();
const router = require("./lib/Router");

// const app = {};
// exports = module.exports = app;

const app = (exports = module.exports = {});

app.listen = function listen() {
  const server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

app.init = function () {
  this.cache = {};
  this.engines = {};
  this.settings = {};

  this._router = undefined;
};

methods.forEach((method) => {
  app[method] = function (path) {
    const route = router;
    return 1111;
  };
});
