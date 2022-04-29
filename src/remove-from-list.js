const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  function indexOf(list, element) {
    let current = list;
    let index = 0;
    
    while (current) {
      if (current.value === element) {
        return index;
      }
  
      current = current.next;
      index++;
    }
    return -1;
  }

  while (indexOf(l, k) !== -1) {
    let position = indexOf(l, k);
    if (position === 0) {
      l = l.next;
    } else {
      let cur = l;
      let prev = null;
      let index = 0;

      while(index < position) {
        prev = cur;
        cur = cur.next;
        index++;
      }

      prev.next = cur.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};