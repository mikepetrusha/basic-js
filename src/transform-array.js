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
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  let result = [];

  arr.forEach((elem, index) => {
    if (elem == '--discard-next') {
      delete arr[index + 1]
    }
    else if (elem == '--discard-prev') {
      if (result[index - 1] == arr[index - 1]) {
        delete result[index - 1]
      }
      delete arr[index - 1]
    }
    else if (elem == '--double-next') {
      if (arr[index + 1] != undefined) {
        result.push(arr[index + 1])
      }

    }
    else if (elem == '--double-prev') {
      if (arr[index - 1] != undefined)
        result.push(arr[index - 1])

    } else if (elem != undefined) {
      result.push(elem)
    }
  })

  return result.filter(item => item != undefined);
}

module.exports = {
  transform
};
