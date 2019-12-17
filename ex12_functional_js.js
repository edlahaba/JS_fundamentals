const increment = n => { return n + 1; };
const square = n => {return n * n};
const doMathSoIDontHaveTo = (n, func) => { return func(n); }
doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);
