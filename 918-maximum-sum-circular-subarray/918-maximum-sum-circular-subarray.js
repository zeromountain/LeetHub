/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(arr) {
     let locMin = absMin = locMax = absMax = total = arr[0];
    
    for(let x of arr.slice(1)) {
        
        locMin = Math.min(x, locMin + x);
        locMax = Math.max(x, locMax + x);
        absMin = Math.min(locMin, absMin);
        absMax = Math.max(locMax, absMax);
        total += x;
        
    }
    
    let nonCircular = absMax;
    let circular = total - absMin;
    
    return circular === 0 ? nonCircular : Math.max(nonCircular, circular);
};