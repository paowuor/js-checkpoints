function isSnakePath(grid) {
  const rows = grid.length;

  if (rows === 0 || grid[0].length === 0) {
    return false;
  }

  const cols = grid[0].length;

  const directions = [
    [-1, 0], // Up
    [1, 0],  // Down
    [0, -1], // Left
    [0, 1]   // Right
  ];

  // Find the first 1 and count all the 1s.
  function findFirstOne(row, col, count, start) {
    if (row === rows) {
      return {
        count: count,
        start: start
      };
    }

    if (col === cols) {
      return findFirstOne(row + 1, 0, count, start);
    }

    if (grid[row][col] === 1) {
      count++;

      if (start === null) {
        start = { row: row, col: col };
      }
    }

    return findFirstOne(row, col + 1, count, start);
  }

  const information = findFirstOne(0, 0, 0, null);
  const totalOnes = information.count;
  const start = information.start;

  // No 1s means there is no snake.
  if (totalOnes === 0) {
    return false;
  }

  // A single 1 is a valid snake.
  if (totalOnes === 1) {
    return true;
  }

  const visited = new Set();
  let endpoints = 0;
  let invalid = false;

  // Count the neighboring 1s around a cell.
  function countNeighbors(row, col, index, count) {
    if (index === directions.length) {
      return count;
    }

    const newRow = row + directions[index][0];
    const newCol = col + directions[index][1];

    if (
      newRow >= 0 &&
      newRow < rows &&
      newCol >= 0 &&
      newCol < cols &&
      grid[newRow][newCol] === 1
    ) {
      count++;
    }

    return countNeighbors(row, col, index + 1, count);
  }

  // Explore neighboring cells recursively.
  function exploreNeighbors(row, col, index) {
    if (index === directions.length || invalid) {
      return;
    }

    const newRow = row + directions[index][0];
    const newCol = col + directions[index][1];

    if (
      newRow >= 0 &&
      newRow < rows &&
      newCol >= 0 &&
      newCol < cols &&
      grid[newRow][newCol] === 1
    ) {
      visit(newRow, newCol);
    }

    exploreNeighbors(row, col, index + 1);
  }

  // Visit a cell and explore its connected neighbors.
  function visit(row, col) {
    const key = row + "," + col;

    if (visited.has(key) || invalid) {
      return;
    }

    visited.add(key);

    const neighbors = countNeighbors(row, col, 0, 0);

    // A snake cannot branch.
    if (neighbors > 2) {
      invalid = true;
      return;
    }

    // An endpoint has exactly one neighbor.
    if (neighbors === 1) {
      endpoints++;
    }

    if (neighbors === 0) {
      invalid = true;
      return;
    }

    exploreNeighbors(row, col, 0);
  }

  visit(start.row, start.col);

  return (
    !invalid &&
    visited.size === totalOnes &&
    endpoints === 2
  );
}

const grid1 = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
];

const grid2 = [
  [1, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
];

console.log(isSnakePath(grid1)); // true
console.log(isSnakePath(grid2)); // false