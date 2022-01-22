/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const array = [...nums1, ...nums2].sort((a,b) => a-b);
    let left=0;
    let right=array.length-1
    let mid=Math.floor((left+right)/2)
    
    return array.length % 2 === 0 ? (array[mid] + array[mid+1]) / 2  : array[mid];
};