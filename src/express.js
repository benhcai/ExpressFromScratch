const merge = require("./lib/merge");
const proto = require("./app");

exports = module.exports = createApplication;

function createApplication() {
  let app = function (req, res, next) {};
  merge(app, proto);
  return app;
}

const start = { s: 100, z: 200 };
const obj = { a: 27, b: 10, c: 31 };
//

// app.init();

// console.log(app);
// console.log(Object.keys(app));
