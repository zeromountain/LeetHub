/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const wordArray = s.split(' ').filter(el => !!el);
    
    return wordArray[wordArray.length - 1].length;
};