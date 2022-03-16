/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0
	
    for(let i =0; i< columnTitle.length; i++) {
        // charCodeAt(index) -> 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환
         result = result * 26 + columnTitle.charCodeAt(i) - 64
    }
    
    return result
};