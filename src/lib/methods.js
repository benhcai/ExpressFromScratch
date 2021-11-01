const http = require("http");

const getHttpMethods = () => {
  return http.METHODS.map((method) => method.toLowerCase());
};

module.exports = { getHttpMethods };
