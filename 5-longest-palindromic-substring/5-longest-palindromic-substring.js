/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longestPalindrome = '';
    
    for (let i=0; i<s.length; i++){
        expandCheck(i, i);
        expandCheck(i, i+1);
    }
    
    function expandCheck(l, r){
        while (l>=0 && r<s.length && s[l]===s[r]){
            if (r-l+1 > longestPalindrome.length){
                longestPalindrome = s.slice(l, r+1);
            }
            l--;
            r++;
        }
    }
    
    return longestPalindrome;
};