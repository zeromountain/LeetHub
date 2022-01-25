/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const myset= new Set();
     for(let i =0; i< nums.length; i++){
       myset.add(nums[i])   
     }
     let n = myset.size;
     let i = 0;
     for (item of myset){
         nums[i]= item;
         i++;
     }

     return n;
};