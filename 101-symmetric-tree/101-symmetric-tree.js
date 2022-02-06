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
var isSymmetric = function(root) {
    // console.log(root.val, root.left, root.left.left, root.left.right, root.right, root.right.left, root.right.right);
    // 좌우 트리 노드가 데칼코마니 → 왼쪽 노드 기준 left: 좌 = 우, right: 우 = 좌
    if(!root) return true;
    else return checkNode(root.left, root.right);
    
};

const checkNode = (leftNode, rightNode) => {
    if(!leftNode && !rightNode) return true;
    if(leftNode?.val !== rightNode?.val) return false;
    else return checkNode(leftNode.right, rightNode.left) && checkNode(leftNode.left, rightNode.right);
}