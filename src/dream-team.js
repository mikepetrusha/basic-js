const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let answer = [];
  members.forEach(elem => {
    if (typeof elem === 'string' && elem.length > 0) {
      answer.push(elem.trim().charAt(0).toUpperCase());
    }
  });

  if (answer.length == 0) return false;
  return answer.sort().join('');
}
module.exports = {
  createDreamTeam
};
