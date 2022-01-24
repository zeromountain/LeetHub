/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let parenthesis = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    let stack = [];
    for(let i=0; i<s.length; i++){
        let curr = s[i];
        if(curr === '(' || curr === '[' || curr === '{')
            stack.push(curr);
        else if(parenthesis[stack.pop()] !== curr)
            return false;
    }
    return stack.length === 0;
};