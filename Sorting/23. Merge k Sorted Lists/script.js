/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Time complexity is O(n log n); Space complexity is O(n)
 * Merges k sorted linked lists into a single sorted linked list.
 * @param {ListNode[]} lists - The array of linked lists to be merged.
 * @return {ListNode} - The merged sorted linked list.
 */
var mergeKLists = function (lists) {
  if (!lists || lists.length < 1) {
    return null;
  }

  while (lists.length > 1) {
    const tempList = [];

    // Merge pairs of linked lists and add the merged list to the temporary list
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;

      tempList.push(mergeList(l1, l2));
    }
    lists = tempList;
  }

  return lists[0];
};

/**
 * Merges two sorted linked lists into a single sorted linked list.
 * @param {ListNode} l1 - The first sorted linked list.
 * @param {ListNode} l2 - The second sorted linked list.
 * @return {ListNode} - The merged sorted linked list.
 */
function mergeList(l1, l2) {
  let dummy = new ListNode();
  let tail = dummy;

  // Merge the two lists by comparing the values of the nodes
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  // Attach the remaining nodes from either list
  if (l1) {
    tail.next = l1;
  } else {
    tail.next = l2;
  }

  return dummy.next;
}
