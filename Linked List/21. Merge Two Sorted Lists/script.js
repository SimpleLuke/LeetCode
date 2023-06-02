/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time O(min(m,n)) | Space O(1)
 * Time complexity determine the length of the shorter list
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
      tail = tail.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
      tail = tail.next;
    }
  }

  if (list1) {
    tail.next = list1;
  } else {
    tail.next = list2;
  }

  return dummy.next;
};
