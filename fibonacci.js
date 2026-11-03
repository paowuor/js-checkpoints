function fibonacci(n) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return a;
}

console.log(fibonacci(6));  // 8
console.log(fibonacci(10)); // 55
console.log(fibonacci(0));  // 0
console.log(fibonacci(1));  // 1