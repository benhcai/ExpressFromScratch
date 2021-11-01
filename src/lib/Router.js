// const Route = {};

const methods = require("./methods").getHttpMethods();

function Route(path) {
  this.path = path;
  this.methods = {};
  this.stack = [];

  console.log(this);
}

const route = new Route();
console.log(route);

methods.forEach((method) => {
  route[method] = function () {
    const layer = { data: 000 };
    layer.method = method;
    this.stack.push(layer);
  };
});

// console.log(route);
// route.get();
// route.head();
// console.log(route);
