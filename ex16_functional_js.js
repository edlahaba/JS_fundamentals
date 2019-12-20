_ = {};

_.compose = (...objects) => {
  var functionList = objects;

  var comp = (...args) => {
    lastFunction = functionList.pop();
    if (!functionList.length) return lastFunction(...args);
    return comp(lastFunction(...args))
  }

  return comp;
};

//Compose examples

const add = (a, b) => { return a + b }
const square = (x) => { return x * x }

customFunc = _.compose(square, add);
console.log(customFunc(1,2));

const greeting = (name) => { return `See you spacecowboy: ${name}`; }
const name = (name) => { return name; }

composeName = _.compose(greeting, name);
console.log(composeName('Dance Monkey'));
