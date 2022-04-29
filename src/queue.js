const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (!this.length) this.head = node;
    if (this.tail) this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  dequeue() {
    let value = this.head.value;
    if(this.head.next) this.head = this.head.next;
    if (this.length === 1) this.head = this.tail = null;
    this.length--;
    return value;
  }
}

module.exports = {
  Queue
};
