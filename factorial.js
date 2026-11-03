function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(3)); // 6
console.log(factorial(7)); // 5040