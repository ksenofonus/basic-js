const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      let count = 0;
      result[i][j] = count;
      for (let k = i - 1; k <= i + 1; k += 1) {
        if (k >= 0 && k < matrix.length) {
          for (let n = j - 1; n <= j + 1; n += 1) {
            if ((k !== i || n !== j) && n >= 0 && n < matrix[i].length) {
              if (matrix[k][n] === true) {
                count += 1;
                result[i][j] = count;
              }
            }
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
