/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const base = nums.length / 2;
    const hash = {};
    for(let num of nums) {
        hash[num] = hash[num] ? hash[num] + 1 : 1;
    }
    for(const [key, value] of Object.entries(hash)) {
        if(value > base) {
            return key;
        }
    }
};