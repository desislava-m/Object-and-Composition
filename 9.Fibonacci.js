function getFibonacci() {

    let firstNum = 0; 
    let secondNum = 1;
    let thirdNum = 0;

    return function () {
        thirdNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = thirdNum;
        return firstNum;
    }
}

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21

