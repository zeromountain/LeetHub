/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const originalString = s.toLowerCase().replace(/[^0-9a-z]/g, '');
    const reversedString = originalString.split('').reverse().join(''); 
    
    return originalString === reversedString;
};