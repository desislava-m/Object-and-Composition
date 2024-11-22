function multiply(param1) {
    return function(param2) {
        return function(param3) {
            return param1 * param2 * param3;
        };
    };
}

console.log(multiply(2)(3)(4));