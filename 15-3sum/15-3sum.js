/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     nums.sort((a,b) => a-b);
//     let set = new Set(); // set을 사용하는 이유: 중복된 요소 처리
//     dfs(nums, 0, [], set);
//     let res = [];
//     // console.log(set);
//     for (let triplet of set) {
//         res.push(triplet.split(","));
//     }
//     return res;
// };

// const dfs = (nums, start, curPath, set) => {
//     if (curPath.length === 3) {
//         if (curPath[0] + curPath[1] + curPath[2] === 0) {
//             set.add(curPath.join(","));
//         }
//         return;
//     }
//     for (let i = start; i < nums.length; i++) {
//         curPath.push(nums[i]);
        
//         dfs(nums, i+1, curPath, set);
        
//         curPath.pop();
//     }
// }

var threeSum = function(nums) {
    let resArr = []
    nums.sort((a, b) => a-b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue
        
        let l = i + 1, r = nums.length - 1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                resArr.push([nums[i], nums[l], nums[r]])
                l++
                r--
                while (l < r && nums[l] === nums[l - 1]) l++
            } else if (sum > 0) {
                r--
            } else {
                l++
            }
        }
    }
    
    return resArr
};