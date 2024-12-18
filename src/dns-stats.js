const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let arr1 = domains.map((el) => el.split('.').reverse());
  let arr2 = arr1.map(el => el.map(elem => `.${elem}`));
  let arr3 = arr2.map(el => el.reduce((acc, elem, i) => {
    acc.push([]);
    if (acc[i-1]) acc[i].push(acc[i-1].join(''));
    acc[i].push(elem);
    return acc;
  }, []))
  let arr4 = arr3.map(el => el.map(e => e.join(''))).flat();
  let unique = Array.from(new Set(arr4))
  unique.forEach((item) => {
    result[item] = arr4.filter(el => el === item).length;
  })
  return result;
}

module.exports = {
  getDNSStats
};
