/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = [0];
    for(let i = 1; i <= n; i++) {
        dp[i] = i % 2 == 0 ? dp[i >> 1] : dp[i - 1] + 1 // >> : 오른쪽으로 1비트 감소(나누기 2 - 십진수 기준)
    }
    return dp;
};