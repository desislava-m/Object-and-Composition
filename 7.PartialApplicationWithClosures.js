function sumOfnums(a, b, c, d) {
    return a + b + c + d;
}

const addFive = sumOfnums.bind(null, 5)

console.log(addFive(1, 2, 3)); 