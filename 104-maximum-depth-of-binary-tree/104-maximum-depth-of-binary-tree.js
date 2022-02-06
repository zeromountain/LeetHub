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
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0;
    
    function checkNode(node, currentDepth) {
        if (!node) return;
        
        max = Math.max(max, currentDepth);
        
        checkNode(node.left, currentDepth + 1);
        checkNode(node.right, currentDepth + 1);
    }
    
    checkNode(root, 1);
    
    return max;
};

