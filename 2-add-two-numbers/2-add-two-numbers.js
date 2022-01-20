/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const carry = arguments[2];
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0,
              val2 = l2 ? l2.val : 0;
        const nxt1 = l1 ? l1.next : null,
              nxt2 = l2 ? l2.next : null;
        const addRes = val1 + val2 + !!carry;
        return new ListNode(addRes % 10, addTwoNumbers(nxt1, nxt2, addRes >= 10));
    } else
        return carry ? new ListNode(!!carry) : null;
};