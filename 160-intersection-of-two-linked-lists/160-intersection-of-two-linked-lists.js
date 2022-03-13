/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let P1 = headA;
    let P2 = headB;
    
    while(P1 !== P2){
        P1 = P1 === null ? headB : P1.next;
        P2 = P2 === null ? headA : P2.next;
    }
    
    return P1;
};