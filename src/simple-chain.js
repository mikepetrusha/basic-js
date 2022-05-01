const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.length;
  },

  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || (position <= 0) || (position > this.arr.length - 1)) {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let str;
    if (this.arr.length > 0) {
      str = this.arr.join('~~')
    }
    this.arr = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
