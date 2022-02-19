/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let n = nums.length
    let minD = Number.MAX_SAFE_INTEGER 
    let res = target;
    
    nums.sort((x, y) => x - y);
    
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1, right = n - 1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (sum == target) return target;
            
            let diff = Math.abs(sum - target);
            
            if (diff < minD) {
                minD = diff;
                res = sum;
            }
            sum > target ? right-- : left++;
        }
    }
    return res;
};