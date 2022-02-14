/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxdp = [nums[0]],
        mindp = [nums[0]];
    
    for (let i = 1; i < nums.length; i++) {
        maxdp[i] = Math.max(Math.max(maxdp[i-1]*nums[i], nums[i]), mindp[i-1]*nums[i]);
        mindp[i] = Math.min(Math.min(mindp[i-1]*nums[i], nums[i]), maxdp[i-1]*nums[i]);
    }
    
    return Math.max(...maxdp);
};