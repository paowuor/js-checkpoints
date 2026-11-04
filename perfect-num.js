function isPerfectNum(n) {
    if (n <= 1) {
        return false;
    }

    let sum = 0;

    for (let i = 1; i <= n/2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    return sum === n;
}

console.log(isPerfectNum(6));
console.log(isPerfectNum(28));
console.log(isPerfectNum(12));
console.log(isPerfectNum(1));
console.log(isPerfectNum(496));