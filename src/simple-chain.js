const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    if (value === undefined) {
      value = ' ';
    }
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position > this.arr.length || position <= 0 || !Number.isInteger(position) ) {
      this.arr = [];
      throw new Error ('You can\'t remove incorrect link!');
    }
    this.arr.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const chain = this.arr.join('~~');
    this.arr = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
