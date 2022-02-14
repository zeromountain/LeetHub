/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let res = 0;
    let bad = 0;
    for(let i = 0, j = 0; i < nums.length; i++){
        if(nums[i]<0) bad++;
        if(nums[i]===0){
            while(bad%2!==0){
                if(nums[j]<0) bad--;
                j++;    
            }
            res = Math.max(res, i-j);                              
            bad = 0;
            j = i + 1;
        }
        if(i===nums.length-1 && bad%2!==0){
           while(bad%2!==0){
                if(nums[j]<0) bad--;
                j++;    
            }}
        if(bad%2===0) res = Math.max(res, i-j+1); 
    }
    return res;
};