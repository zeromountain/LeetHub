/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = String(x);
    return x === (+str.split('').reverse().join(''));
};