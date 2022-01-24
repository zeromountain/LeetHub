/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(); // 새로운 노드 리스트 생성
    let tail = head; // 처음 생성된 노드 리스트의 마지막 노드는 첫 노드와 같다
    
    while(list1 && list2) {
        if(list1.val  < list2.val) {
            tail.next = list1; // 1 
            console.log('list1',tail.next);
            list1 = list1.next; // [2,4]
            console.log('list1', list1);
        } else {
            tail.next = list2; // 1
            console.log('list2',tail.next)
            list2 = list2.next; // [3, 4]
            console.log('list2', list2)
        }

        tail = tail.next;
    }
    
    tail.next = list1 === null ? list2 :list1;
    
    return head.next;
};