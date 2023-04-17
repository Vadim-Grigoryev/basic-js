const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const a=String(n).split('')
  let sum1=0
  sum1=a.reduce((acc, current)=>{
    current=Number(current)
    acc=acc+current
    return acc
  }, 0)
    let sum=String(sum1)
    if (sum.length>1) {
      sum=getSumOfDigits(sum)
    }
    return Number(sum)
  }

module.exports = {
  getSumOfDigits
};
