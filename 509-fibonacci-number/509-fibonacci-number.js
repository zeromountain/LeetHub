/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const memo = [0, 1];
    const useMemo = (n) => {
        if(memo[n] !== undefined) return memo[n];
        memo[n] = useMemo(n-1) + useMemo(n-2);
        return memo[n];
    }
    return useMemo(n);
};