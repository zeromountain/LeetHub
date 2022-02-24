/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    const res = [[1]];
    if(numRows === 1) return res;
    for (let i = 1; i < numRows; i++) {
        res[i] = new Array(i+1).fill(1);
        for (let j = 1; j < res[i].length-1; j++) {
            res[i][j] = res[i-1][j-1] + res[i-1][j];
        }
    }
    return res;
};