/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    return dfs(root, targetSum, 0);
};

let dfs = (node, targetSum, sum) => {
    if(!node) return false;
    if(!node.left && !node.right) return sum + node.val == targetSum;
    return dfs(node.left, targetSum, sum+node.val) || dfs(node.right, targetSum, sum+node.val);
}