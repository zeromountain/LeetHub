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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    console.log(root);
    if(!root)  return null;
    
    [root.left, root.right] = [root.right, root.left]; // 왼쪽 오른쪽 노드 변경 
    
    invertTree(root.left); // 왼쪽 노드 재귀
    invertTree(root.right); // 오른쪽 노드 재귀
    
    return root;
    
};