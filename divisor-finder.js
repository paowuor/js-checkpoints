function divisors(n) {
    const result = [];

    n = Math.abs(n);

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }

    return result;
}

console.log(divisors(15));  // [1, 3, 5]
console.log(divisors(28));  // [1, 2, 4, 7, 14]
console.log(divisors(1));   // []
console.log(divisors(-15)); // [1, 3, 5]