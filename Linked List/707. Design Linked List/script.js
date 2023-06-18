class Node {
  constructor(val) {
    this.val = val; // Value of the node
    this.prev = null; // Reference to the previous node
    this.next = null; // Reference to the next node
  }
}

/**
 * Initialize your linked list here.
 */
var MyLinkedList = function () {
  this.head = null; // Head node of the linked list
  this.tail = null; // Tail node of the linked list
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index - The index of the node.
 * @return {number} - The value of the node at the specified index.
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || this.head === null) {
    return -1; // Invalid index or empty list
  }

  let curr = this.head; // Start from the head node

  for (let i = 0; i < index; i++) {
    if (curr.next === null) {
      return -1; // Index out of range
    }
    curr = curr.next; // Move to the next node
  }

  return curr.val; // Return the value of the node at the specified index
};

/**
 * Add a node with the value val at the beginning of the linked list.
 * @param {number} val - The value to be added at the head.
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val); // Create a new node

  if (this.head === null) {
    // If the list is empty
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head; // Set the next pointer of the new node to the current head
    this.head.prev = newNode; // Set the previous pointer of the current head to the new node
    this.head = newNode; // Update the head to the new node
  }
};

/**
 * Append a node with the value val to the last element of the linked list.
 * @param {number} val - The value to be added at the tail.
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val); // Create a new node

  if (this.tail === null) {
    // If the list is empty
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail; // Set the previous pointer of the new node to the current tail
    this.tail.next = newNode; // Set the next pointer of the current tail to the new node
    this.tail = newNode; // Update the tail to the new node
  }
};

/**
 * Add a node with the value val at the index-th position in the linked list.
 * If the index is greater than the length of the linked list, the node will not be inserted.
 * @param {number} index - The index at which the node should be inserted.
 * @param {number} val - The value to be inserted.
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) {
    this.addAtHead(val); // If index is 0, add the node at the head
    return;
  }

  let curr = this.head;

  for (let i = 0; i < index; i++) {
    if (curr === null) {
      return; // Index out of range
    }
    curr = curr.next; // Move to the next node
  }

  if (curr === null) {
    this.addAtTail(val); // If index is greater than the length, add the node at the tail
    return;
  }

  const newNode = new Node(val); // Create a new node
  newNode.prev = curr.prev; // Set the previous pointer of the new node to the previous node of the current node
  newNode.next = curr; // Set the next pointer of the new node to the current node
  curr.prev.next = newNode; // Set the next pointer of the previous node to the new node
  curr.prev = newNode; // Set the previous pointer of the current node to the new node
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index - The index of the node to be deleted.
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let curr = this.head;

  for (let i = 0; i < index; i++) {
    if (curr === null) {
      return; // Index out of range
    }
    curr = curr.next; // Move to the next node
  }

  if (curr === null) {
    return; // Index out of range
  }

  if (curr.prev === null) {
    // If the node to be deleted is the head node
    this.head = curr.next;
  } else {
    curr.prev.next = curr.next; // Set the next pointer of the previous node to the next node
  }

  if (curr.next === null) {
    // If the node to be deleted is the tail node
    this.tail = curr.prev;
  } else {
    curr.next.prev = curr.prev; // Set the previous pointer of the next node to the previous node
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/**
 * Time Complexity:
 * - get: O(N)
 * - addAtHead: O(1)
 * - addAtTail: O(1)
 * - addAtIndex: O(N)
 * - deleteAtIndex: O(N)
 *
 * Space Complexity: O(1)
 *
 * Note:
 * - The MyLinkedList class implements a doubly-linked list.
 * - Each node in the linked list contains a value and references to the previous and next nodes.
 * - The get operation returns the value of the node at the specified index.
 * - The addAtHead operation adds a node with the given value at the beginning of the linked list.
 * - The addAtTail operation appends a node with the given value to the end of the linked list.
 * - The addAtIndex operation adds a node with the given value at the specified index in the linked list.
 * - The deleteAtIndex operation deletes the node at the specified index from the linked list.
 * - The linked list is initialized with a null head and tail.
 */
