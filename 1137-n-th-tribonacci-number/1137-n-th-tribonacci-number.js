/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const memo = [0, 1, 1];
    const useMemo = (n) => {
        if(memo[n] !== undefined) return memo[n];
        memo[n] = useMemo(n-1) + useMemo(n-2) + useMemo(n-3);
        return memo[n];
    }
    return useMemo(n);
};