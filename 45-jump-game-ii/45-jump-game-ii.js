/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length===1) return 0;
    
    return dp(0, nums.length-1, 0, []);

   function dp(start, end, acc, memo) {
       if (start>end) return -1;
       if (start===end) return acc;

       const steps = nums[start];
       if (steps===0) return -1;
       let localMin = Number.MAX_VALUE;
       for (let i=1; i<=steps; i++) {
           const nextStep = start+i;
           const cnt = memo[nextStep] ? memo[nextStep] : dp(nextStep, end, 1, memo);
           if (cnt>0 && cnt<localMin) localMin=cnt;
       }
       memo[start] = localMin < Number.MAX_VALUE ? localMin+acc : -1;
       return memo[start];
   }
};