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
var minDepth = function(root) {
    if (!root) return [];
    
    let queue = [root];
    let depth = 1;
    
    while (queue[0]) {
        let size = queue.length;
        
        while (size--) {
            let curr = queue.shift(); // dequeue
            if (!curr.left && !curr.right) return depth;
            
            if (curr.left) queue.push(curr.left); // enqueue
            if (curr.right) queue.push(curr.right); // enqueue
            
        }
        
        depth++;
    }
};

