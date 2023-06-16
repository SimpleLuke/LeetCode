/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Reverses a singly-linked list in-place.
 * @param {ListNode} head - The head node of the linked list.
 * @return {ListNode} - Returns the new head node of the reversed linked list.
 */
var reverseList = function (head) {
  let prev = null; // Pointer to the previous node
  let curr = head; // Pointer to the current node

  while (curr) {
    const temp = curr.next; // Store the next node in a temporary variable
    curr.next = prev; // Reverse the next pointer of the current node to point to the previous node
    prev = curr; // Update the previous node pointer
    curr = temp; // Move to the next node
  }

  return prev; // Return the new head of the reversed linked list
};

/**
 * Time Complexity: O(N)
 * The function iterates over each node of the linked list once, where N is the number of nodes in the list.
 * The operations performed inside the loop, such as pointer assignments and modifications, are constant-time operations.
 * Therefore, the overall time complexity is O(N).

 * Space Complexity: O(1)
 * The function reverses the linked list in-place without utilizing any additional data structures.
 * It only uses a constant amount of extra space to store the pointers.
 * Thus, the space complexity is O(1), indicating constant space usage.

 * Note:
 * - The function assumes the input is a valid singly-linked list.
 * - It reverses the linked list in-place, modifying the original list structure.
 * - Returns the new head node of the reversed linked list.
 */
