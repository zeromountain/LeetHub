/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    let merged = []
    if (!nums1) merged = nums2
    if (!nums2) merged = nums1
    if (nums1 && nums2) merged = nums1.concat(nums2)
    merged.sort(function(a, b){return a-b})
    const length = merged.length
    if(length % 2 != 0) {
        let i = length / 2
        return merged[Math.floor(i)]
    }else{
        let i = Math.floor(length / 2)
        let j = i - 1
        return (merged[i] + merged[j]) / 2
    }
}