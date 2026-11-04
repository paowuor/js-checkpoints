function gridWordFinder2(grid, word) {
  const results = [];

  if (word.length === 0 || grid.length === 0) {
    return results;
  }

  const rows = grid.length;
  const cols = grid[0].length;

  // Check whether the word matches horizontally or vertically
  function checkWord(x, y, direction, index) {
    if (index === word.length) {
      return true;
    }

    let currentX = x;
    let currentY = y;

    if (direction === "horizontal") {
      currentY = y + index;
    } else {
      currentX = x + index;
    }

    if (
      currentX >= rows ||
      currentY >= cols ||
      grid[currentX][currentY] !== word[index]
    ) {
      return false;
    }

    return checkWord(x, y, direction, index + 1);
  }

  // Check both directions from one starting position
  function checkPosition(x, y) {
    if (checkWord(x, y, "horizontal", 0)) {
      results.push({
        x: y,
        y: x,
        direction: "horizontal"
      });
    }

    if (checkWord(x, y, "vertical", 0)) {
      results.push({
        x: y,
        y: x,
        direction: "vertical"
      });
    }

    // Move to the next column
    if (y + 1 < cols) {
      checkPosition(x, y + 1);
    } else if (x + 1 < rows) {
      // Move to the first column of the next row
      checkPosition(x + 1, 0);
    }
  }

  checkPosition(0, 0);

  return results;
}

const grid = [
  ["c", "a", "t"],
  ["d", "o", "g"],
  ["r", "a", "t"],
];

console.log(gridWordFinder2(grid, "cat"));
console.log(gridWordFinder2(grid, "rat"));
console.log(gridWordFinder2(grid, "dog"));