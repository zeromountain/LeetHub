/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // console.log(p, p.val, p.left, p.right, q, q.val, q.left, q.right);
    // p.val: 1, q.val: 1 → value 값이 같으면 left 노드와 right 노드도 검사
    // left: isSameTree(p.left, q.left), right: isSameTree(p.right, q.right)
    if(p && q) return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right); // 두 트리에 노드가 존재하면 왼쪽 자식 노드와 오른쪽 자식 노드에 대해 재귀 함수 호출
    return !p && !q // 두 트리에 노드가 존재하지 않으면 멈춘다.
};