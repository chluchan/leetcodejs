/**
 * https://leetcode.com/problems/maximal-square
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
  if (matrix.length === 0) {
    return 0;
  }

  const numRows = matrix.length;
  const numColumns = matrix[0].length;
  const smallerSide = Math.min(numRows, numColumns);
  for (let maxWidth = smallerSide; maxWidth > 0; maxWidth--) {
    for (let rowStart = 0; rowStart <= numRows - maxWidth; rowStart++) {
      for (let colStart = 0; colStart <= numColumns - maxWidth; colStart++) {
        let all1s = true;
        for (let row = rowStart; row < rowStart + maxWidth && all1s; row++) {
          for (let col = colStart; col < colStart + maxWidth && all1s; col++) {
            all1s = matrix[row][col] === '1';
          }
        }

        if (all1s) {
          return maxWidth ** 2;
        }
      }
    }
  }

  return 0;
}

module.exports = {
  maximalSquare,
};
