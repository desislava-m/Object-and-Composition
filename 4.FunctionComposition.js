const double = (x) => x * 2;
const square = (x) => x * x;

const compose = (...fns) => (arg) => 
    fns.reduce((acc, fn) => fn(acc), arg);

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3)); 
