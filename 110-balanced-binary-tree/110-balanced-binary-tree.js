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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function helper(root){
        if(root==null) return false;
        
        let left = helper(root.left);
        let right = helper(root.right);
        
        if(left == null) return null;   
        if(right == null) return null;
    
        if(Math.abs(left-right) > 1) return null;
        
        return Math.max(left, right) + 1;
    }
    return helper(root) != null;;
};