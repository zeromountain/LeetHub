/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let dp = [];
    for (let i = 0; i <= rowIndex; i++) {
        let temp = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) temp.push(1); // 양 끝인 경우
            else temp.push(dp[j] + dp[j - 1]) // 현재 행의 요소를 더해 다음 행을 구함
        }
        dp = temp; // 현재 행을 다음 행으로 교체
    }
    return dp
};