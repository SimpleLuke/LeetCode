class PageNode {
  constructor(url) {
    this.url = url; // URL of the page
    this.prev = null; // Reference to the previous page node
    this.next = null; // Reference to the next page node
  }
}

/**
 * Represents the browser history.
 */
var BrowserHistory = function (homepage) {
  this.head = new PageNode(homepage); // Head node of the browser history
  this.tail = new PageNode(null); // Tail node of the browser history
  this.head.next = this.tail; // Connect the head node to the tail node
  this.tail.prev = this.head; // Connect the tail node to the head node
  this.curr = this.head; // Current page node
};

/**
 * Visit a new URL and add it to the browser history.
 * @param {string} url - The URL to be visited.
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  const node = new PageNode(url); // Create a new page node
  this.curr.next = node; // Set the next pointer of the current page node to the new page node
  node.prev = this.curr; // Set the previous pointer of the new page node to the current page node
  this.curr = node; // Update the current page node to the new page node
  node.next = this.tail; // Set the next pointer of the new page node to the tail node
  this.tail.prev = node; // Set the previous pointer of the tail node to the new page node
};

/**
 * Navigate back in the browser history by the specified number of steps.
 * @param {number} steps - The number of steps to go back.
 * @return {string} - The URL of the page after navigating back.
 */
BrowserHistory.prototype.back = function (steps) {
  while (this.curr !== this.head && steps > 0) {
    this.curr = this.curr.prev; // Move to the previous page node
    steps -= 1;
  }

  return this.curr.url; // Return the URL of the current page node
};

/**
 * Navigate forward in the browser history by the specified number of steps.
 * @param {number} steps - The number of steps to go forward.
 * @return {string} - The URL of the page after navigating forward.
 */
BrowserHistory.prototype.forward = function (steps) {
  while (this.curr !== this.tail && steps > 0) {
    this.curr = this.curr.next; // Move to the next page node
    steps -= 1;
  }

  if (this.curr === this.tail) {
    this.curr = this.tail.prev; // If the current node is the tail, move to the previous page node
    return this.curr.url; // Return the URL of the current page node
  }

  return this.curr.url; // Return the URL of the current page node
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

/**
 * Time Complexity:
 * - visit: O(1)
 * - back: O(steps)
 * - forward: O(steps)
 *
 * Space Complexity: O(1)
 *
 * Note:
 * - The BrowserHistory class implements a doubly-linked list to represent the browser history.
 * - Each page in the history is represented by a page node containing a URL and references to the previous and next page nodes.
 * - The visit operation adds a new page node to the history by connecting it to the current node.
 * - The back operation navigates back in the history by moving the current node to the previous node.
 * - The forward operation navigates forward in the history by moving the current node to the next node.
 * - The head node represents the starting point of the history, and the tail node represents the ending point.
 * - The browser history is initialized with a head node, a tail node, and the current node set to the head node.
 */
