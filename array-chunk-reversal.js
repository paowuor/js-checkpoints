function reverseChunks(arr, chunkSize) {
    const result = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        result.push(...chunk.reverse());
    }

    return result;
}

// Example test cases
console.log(reverseChunks([1, 2, 3, 4, 5, 6, 7], 3));
// [3, 2, 1, 6, 5, 4, 7]

console.log(reverseChunks([10, 20, 30, 40, 50], 2));
// [20, 10, 40, 30, 50]

console.log(reverseChunks([1, 2, 3, 4, 5], 4));
// [4, 3, 2, 1, 5]