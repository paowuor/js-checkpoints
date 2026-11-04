function nestedArrayReverser(words) {
    const reversedArrays = words.reverse();

     result = [];

    for (const array of reversedArrays) {
        const reversedWords = array.reverse();

        for (const word of reversedWords) {
            result.push(word);
        }
    }

    return result.join(" ");
}

console.log(
  nestedArrayReverser([
    ["hello", "world"],
    ["this", "is"],
    ["a", "test"],
  ])
);

console.log(nestedArrayReverser([]));