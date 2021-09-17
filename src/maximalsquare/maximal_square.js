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
        for (let row = rowStart + maxWidth - 1; row >= rowStart && all1s; row--) {
          for (let col = colStart + maxWidth - 1; col >= colStart && all1s; col--) {
            all1s = matrix[row][col] === '1';

            if (!all1s) {
              colStart = col;
            }
          }
        }

        if (all1s) {
          return maxWidth ** 2;
        }
      }

      if (maxWidth >= 3) {
        let maxSubSequence1s = 0;
        let thisSubSequence1s = 0;
        for (let col = 0; col < numColumns; col++) {
          if (matrix[rowStart + maxWidth - 1][col] === '1') {
            thisSubSequence1s++;
            if (thisSubSequence1s > maxSubSequence1s) {
              maxSubSequence1s = thisSubSequence1s;
            } else {
              thisSubSequence1s = 0;
            }
            if (maxSubSequence1s >= maxWidth) {
              break;
            }
          }
        }

        if (maxSubSequence1s < maxWidth) {
          rowStart += maxWidth - 1;
        }
      }
    }
  }

  return 0;
}

module.exports = {
  maximalSquare,
};
