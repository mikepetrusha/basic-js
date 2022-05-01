const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let s1new = s1.split('');
  let s2new = s2.split('');

  s1new.forEach(elem => {
    if (s2new.includes(elem)) {
      res++;
      s2new.splice(s2new.indexOf(elem), 1);
    }
  });
  return res;
}

module.exports = {
  getCommonCharacterCount
};
