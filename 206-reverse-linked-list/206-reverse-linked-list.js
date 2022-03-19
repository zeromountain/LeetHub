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
var reverseList = function(head) {
    // head가 비어있거나 하나만 있을 경우 head를 반환
    if(!head || !head.next) return head;
    
    // reverseList 만들기
    const reversed = reverseList(head.next);
    
    head.next.next = head; // 현재 value와 이전 value node 연결
    
    head.next = null; // 이전 노드의 연결 해제
    
    return reversed
};