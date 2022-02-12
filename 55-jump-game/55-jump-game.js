/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) {
        return true;
    }
    
    const dp = [nums[0], ...Array.from({length: nums.length - 1}, () => 0)]
    
    for (let i = 1; i < nums.length; i++) {     
        dp[i] = dp[i-1] > 0 ? Math.max(dp[i-1]-1, nums[i]) : -1;
    }
    
    return dp[nums.length-1] >= 0;
};