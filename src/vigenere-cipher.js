const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(val) {
    (val === false) ? this.reverse = false : this.reverse = true;
  }
  encrypt(message, keyword) {
    if (message === undefined || keyword === undefined) throw new Error ('Incorrect arguments!');
    let upperMessageArray = message
			.toUpperCase()
			.split('')
			.map((el) => el.charCodeAt() - 65);
    let length = upperMessageArray.filter((el) => el >= 0).length;
    let upperKey = keyword
			.padEnd(length, keyword)
			.toUpperCase()
			.split('')
			.map((el) => el.charCodeAt() - 65);
    let j = -1;
		let result = upperMessageArray.map((el, i) => {
			if (el >= 0 && el <= 25) {
				j += 1;
				return ((el + upperKey[j]) % 26) + 65;
			} else {
				return el + 65;
			}
		});
    return this.reverse === true
			? result.map((el) => String.fromCharCode(el)).join('')
			: result
					.map((el) => String.fromCharCode(el))
					.reverse()
					.join('');
  }
  decrypt(cipher, keyword) {
    if (cipher === undefined || keyword === undefined)
			throw new Error('Incorrect arguments!');
    let upperMessageArray = cipher
			.toUpperCase()
			.split('')
			.map((el) => el.charCodeAt() - 65);
		let length = upperMessageArray.filter((el) => el >= 0).length;
		let upperKey = keyword
			.padEnd(length, keyword)
			.toUpperCase()
			.split('')
			.map((el) => el.charCodeAt() - 65);
		let j = -1;
		let result = upperMessageArray.map((el, i) => {
			if (el >= 0 && el <= 25) {
				j += 1;
				if (el >= upperKey[j]) return ((el - upperKey[j]) % 26) + 65
				else return ((el - upperKey[j]) % 26) + 26 + 65;
			} else {
				return el + 65;
			}
		});
		return this.reverse === true
			? result.map((el) => String.fromCharCode(el)).join('')
			: result.map((el) => String.fromCharCode(el))
        .reverse()
        .join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
