class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || this.head === null) {
    return -1;
  }

  let curr = this.head;

  for (let i = 0; i < index; i++) {
    if (curr.next === null) {
      return -1;
    }
    curr = curr.next;
  }

  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (this.tail === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    if (curr === null) {
      return;
    }
    curr = curr.next;
  }

  if (curr === null) {
    this.addAtTail(val);
    return;
  }

  const newNode = new Node(val);
  newNode.prev = curr.prev;
  newNode.next = curr;
  curr.prev.next = newNode;
  curr.prev = newNode;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    if (curr === null) {
      return;
    }
    curr = curr.next;
  }

  if (curr === null) {
    return;
  }

  if (curr.prev === null) {
    this.head = curr.next;
  } else {
    curr.prev.next = curr.next;
  }

  if (curr.next === null) {
    this.tail = curr.prev;
  } else {
    curr.next.prev = curr.prev;
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
