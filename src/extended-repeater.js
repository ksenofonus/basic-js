const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additions = [];
  let res = [];
  if (options.hasOwnProperty('addition')) {
    if (options.hasOwnProperty('additionRepeatTimes')) {
      for (let i = 0; i < options.additionRepeatTimes; i += 1) {
        additions.push(String(options.addition));
      }
    } else {
      additions.push(String(options.addition));
    }
  }
  if (options.hasOwnProperty('repeatTimes')) {
    for (let i = 0; i < options.repeatTimes; i += 1) {
      if (options.hasOwnProperty('additionSeparator')) {
        res.push(str + additions.join(options.additionSeparator));
      } else {
        res.push(str + additions.join('|'));
      }
    }
  } else {
    if (options.hasOwnProperty('additionSeparator')) {
      res.push(str + additions.join(options.additionSeparator));
    } else {
      res.push(str + additions.join('|'));
    }
  }
  if (options.hasOwnProperty('separator')) {
    return res.join(options.separator);
  } else {
    return res.join('+');
  }
}


module.exports = {
  repeater
};
