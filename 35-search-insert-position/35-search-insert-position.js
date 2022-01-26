/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let position = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[nums.length-1] < target) return nums.length;
        if(nums[i] >= target) return position;
        position++;
    }
};