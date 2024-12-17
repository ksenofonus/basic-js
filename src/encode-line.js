const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split('');
  let j = -1;
  let res = [];
  for (let i = 0; i < array.length; i++) {
		if (array[i] !== array[i - 1]) {
			res.push([]);
			j = j + 1;
			res[j].push(array[i]);
		} else {
			res[j].push(array[i]);
		}
	}
  let result = res.map((el) => {
		const length = el.length;
		return length > 1 ? `${length}${el[0]}` : el[0];
	});
  return result.join('');
}

module.exports = {
  encodeLine
};
