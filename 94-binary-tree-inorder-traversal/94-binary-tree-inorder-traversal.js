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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let data = [];
    if (root === null) {
        return data;
      }
    // let curr=root;
    traverse(root);
    function traverse(node) {
      if (node.left) traverse(node.left); // null root.right.left: [3]
      data.push(node.val); // root.val: 1 → [1] root.right.left.val: 3 → [1, 3] root.right.val: 2 → [1, 3, 2]
      if (node.right) traverse(node.right); // root.right: [2, 3] 
    }
    return data;
};