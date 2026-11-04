function insertionSortAnalyzer(arr, comparator) {
    const sortedArray = [...arr];
    let iterations = 0;
    let swaps = 0;

    for (let i = 1; i < sortedArray.length; i++) {
        let current = sortedArray[i];
        let j = i - 1;

        while (j >= 0) {
            iterations++;

            if (comparator(sortedArray[j], current) > 0) {
                sortedArray[j + 1] = sortedArray[j];
                swaps++;
                j--;
            } else {
                break;
            }
        }

        sortedArray[j + 1] = current;
    }

    return {
        sortedArray: sortedArray,
        iterations: iterations,
        swaps: swaps
    };
}


const comparator = (a, b) => a - b;

const result = insertionSortAnalyzer(
  [5, 2, 4, 6, 1, 3],
  comparator
);

console.log(result);