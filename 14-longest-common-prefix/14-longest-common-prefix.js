/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    
    for (let i = 0; i <= strs[0].length; i++) {
        const nextPrefix = strs[0].slice(0, i);
        
        if (strs.every(str => str.slice(0, i) === nextPrefix)) {
            prefix = nextPrefix;
        } else {
            break;
        }
    }
    
    return prefix;
};