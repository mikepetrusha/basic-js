const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numStr = String(n);
  let arrayofsums = [];

  for (let i = 0; i < numStr.length; i++) {
    arrayofsums.push(numStr.slice(0, i) + numStr.slice(i + 1));
  }

  return Math.max(...arrayofsums);
}

module.exports = {
  deleteDigit
};
