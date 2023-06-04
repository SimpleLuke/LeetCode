class PageNode {
  constructor(url) {
    this.url = url;
    this.prev = null;
    this.next = null;
  }
}
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.head = new PageNode(homepage);
  this.tail = new PageNode(null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.curr = this.head;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  const node = new PageNode(url);
  this.curr.next = node;
  node.prev = this.curr;
  this.curr = node;
  node.next = this.tail;
  this.tail.prev = node;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (this.curr !== this.head && steps > 0) {
    this.curr = this.curr.prev;
    steps -= 1;
  }

  return this.curr.url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (this.curr !== this.tail && steps > 0) {
    this.curr = this.curr.next;
    steps -= 1;
  }

  if (this.curr === this.tail) {
    this.curr = this.tail.prev;
    return this.curr.url;
  }

  return this.curr.url;
};
