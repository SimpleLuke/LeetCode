/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.q = []; // Array to simulate a stack using a queue
};

/**
 * Push element x onto the stack.
 * @param {number} x - The element to be pushed.
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q.push(x); // Push the element to the back of the queue
};

/**
 * Removes the element on top of the stack and returns it.
 * @return {number} - The top element of the stack.
 */
MyStack.prototype.pop = function () {
  const size = this.q.length;

  // Move all elements except the last one to the back of the queue
  for (let i = 0; i < size - 1; i++) {
    this.q.push(this.q.shift());
  }

  return this.q.shift(); // Remove and return the last element from the queue, simulating the behavior of a stack
};

/**
 * Get the top element of the stack.
 * @return {number} - The top element of the stack.
 */
MyStack.prototype.top = function () {
  return this.q[this.q.length - 1]; // Return the last element in the queue, which represents the top of the stack
};

/**
 * Returns whether the stack is empty.
 * @return {boolean} - Returns true if the stack is empty, false otherwise.
 */
MyStack.prototype.empty = function () {
  return this.q.length === 0; // Check if the queue is empty to determine if the stack is empty
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

/**
 * Time Complexity:
 * - Push: O(1)
 * - Pop: O(N)
 * - Top: O(1)
 * - Empty: O(1)
 *
 * Space Complexity: O(N)
 *
 * Note:
 * - The MyStack class implements a stack using a queue.
 * - The push operation adds an element to the queue.
 * - The pop operation removes and returns the top element from the stack, simulating a stack's behavior.
 * - The top operation returns the top element of the stack without removing it.
 * - The empty operation checks if the stack is empty.
 */
