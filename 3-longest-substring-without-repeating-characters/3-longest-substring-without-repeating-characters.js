/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s === "") {
        return 0;
    }
    let maxValue = 1;
    let indexMap = new Map();
    let startPosition = 0;
    let nextChar = '';
    for (let i = 0; i < s.length; i += 1) {
        nextChar = s[i];
        if (indexMap.has(nextChar)) {
            maxValue = Math.max(maxValue, i - startPosition);
            startPosition = Math.max(indexMap.get(nextChar) + 1, startPosition);
        }
        indexMap.set(nextChar, i);
    }
    return Math.max(maxValue, s.length - startPosition);
};