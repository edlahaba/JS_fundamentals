const add = function(a, b) {
  // if(!b) b = 2;
  b = b || 2
  console.log(arguments)
  return a + b;
}

add(3);
