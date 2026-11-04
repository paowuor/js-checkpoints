function gridWordsFinder(grid, words) {
    const foundWords = [];

    if (words.length === 0 || grid.length === 0) {
        return foundWords;
    }

    const rows = grid.length;
    const cols = grid[0].length;

    for (const word of words) {
        let found = false;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                let horizontal = "";

                if (col + word.length <= cols) {
                    for (let i = 0; i < word.length; i++) {
                        horizontal += grid[row][col + i];
                    }

                    if (horizontal === word) {
                        found = true;
                    }
                }

                let vertical = "";

                if (row + word.length <= rows) {
                    for (let i = 0; i < word.length; i++) {
                        vertical += grid[row+i][col];
                    }

                    if (vertical === word) {
                        found = true;
                    }
                }

                if (found) {
                    break;
                }
            }

            if (found) {
                break;
            }
        }

        if (found) {
            foundWords.push(word);
        }
    }

    return foundWords;
}

const grid = [
  ["c", "a", "t"],
  ["a", "a", "t"],
  ["r", "a", "t"],
  ["d", "o", "g"],
];

console.log(
  gridWordsFinder(grid, ["cat", "dog", "rat", "tar", "car", "rac", "g"])
);

console.log(gridWordsFinder(grid, []));