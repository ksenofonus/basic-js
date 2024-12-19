const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const a = arr;
  const num = a.reduce((acc, el) => {
    if (el !== -1) acc.push(el);
    return acc;
  }, []).sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== -1) {
      a[i] = num[j];
      j += 1;
    }
  }
  return a;
}

module.exports = {
  sortByHeight
};
