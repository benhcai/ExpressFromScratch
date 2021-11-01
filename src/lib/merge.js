exports = module.exports = merge;

// ES6
function merge(dest, src) {
  Object.getOwnPropertyNames(src).forEach(function (name) {
    const descriptor = Object.getOwnPropertyDescriptor(src, name);
    Object.defineProperty(dest, name, descriptor);
  });

  return dest;
}

// ES 2018
function together(dest, src) {
  const doneTogether = {
    ...dest,
    ...src,
  };
  return doneTogether;
}
