/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(sum < nums[i]) sum = nums[i]; // i번째 요소를 더한 sum이 nums[i] 요소 보다 작으면 nums[i]로 초기화해 해당 지점부터 다시 시작
        max = Math.max(max, sum);
    }
    
    return max;
};