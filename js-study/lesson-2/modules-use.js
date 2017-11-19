const Fraction = require("fraction.js")

const factorial = function(n) {
    let result = 1;
    for (let i = 2; i < n; i++) {
        result *= i;
    }
    return result;
}

const getEApprox = function(n) {
    result = new Fraction();
    for (let i = 1; i <= n; i++) {
        result += new Fraction(1, factorial(i));
    }
    return result.valueOf();
}

console.log("Taylor series of e^x for x = 1")
console.log("first 3 elements", getEApprox(3));
console.log("first 6 elements", getEApprox(6));
console.log("first 20 elements", getEApprox(20));
