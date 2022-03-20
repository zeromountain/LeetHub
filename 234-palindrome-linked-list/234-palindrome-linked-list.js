/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head) return true;
    const temp = [];
    while(head) {
        temp.push(head.val);
        head = head.next;
    }
    return temp.join('') === temp.reverse().join('');
};