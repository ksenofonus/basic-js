const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const res = [];
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let i = 0;
  while(i < arr.length) {
    if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
      res.push(arr[i])
      i= i + 1;
    }
    if (arr[i] === '--discard-next') {
      i = i + 2;
    }
    if (arr[i] === '--discard-prev') {
      if (arr[i-2] !== '--discard-next' && arr[i-1] !== null && arr[i-1] !== undefined) {
        res.pop();
        i = i + 1;
      }
      else {
        i= i + 1;
      }
    }
    if (arr[i] === '--double-next') {
      if (arr[i+1] !== null && arr[i+1] !== undefined) {
        res.push(arr[i+1]);
        i = i + 1;
      }
      else {
        i= i + 1;
      }
    }
    if (arr[i] === '--double-prev') {
      if (arr[i-2] !== '--discard-next' && arr[i-1] !== null && arr[i-1] !== undefined) {
        res.push(arr[i-1]);
        i= i + 1;
      }
      else {
        i= i + 1;
      }
    }
  }
  return res;
}



module.exports = {
  transform
};
