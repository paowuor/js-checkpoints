function palindromicChain(numbers) {
    const result = [];

    for (number of numbers) {
        let current = number;
        let attempts = 0;

        while (attempts < 100) {
            const reversed = Number(String(current).split("").reverse().join(""));

            if (current === reversed) {
                break;
            }

            current = current + reversed;
            attempts++;
        }

        const finalReversed = Number(String(current).split("").reverse().join(""));

        if (current === finalReversed) {
            result.push(current);
        } else {
            result.push(0);
        }
    }

    return result;
}

console.log(palindromicChain([87, 33, 123, 196]));