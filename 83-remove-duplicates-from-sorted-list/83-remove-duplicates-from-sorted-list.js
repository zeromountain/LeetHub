/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null || head.next === null) 
        return head;
    
    let prev = head;
    let curr = head.next;
    
    while(curr !== null) {
        if(prev.val === curr.val) { // 1 1
            prev.next = curr.next; // 1 → 2
            curr = curr.next; // 1 → 2
        } else {
            prev = prev.next;
            curr = curr.next;
        }
    }
    return head;

};