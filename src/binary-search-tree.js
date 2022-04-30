const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add( data ) {
    this._root = addInto(this._root, data);

    function addInto(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) return;

      if (node.data < data) {
        node.right = addInto(node.right, data);
      } else {
        node.left = addInto(node.left, data)
      }

      return node;
    }
  }

  has( data ) {
    return searchInto(this._root, data);

    function searchInto(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      return data < node.data ? searchInto(node.left, data) : searchInto(node.right, data)
    }
  }

  find( data ) {
    return searchInto(this._root, data);

    function searchInto(node, data) {
      if (!node) return null;

      if (node.data === data) return node;

      return data < node.data ? searchInto(node.left, data) : searchInto(node.right, data)
    }
  }

  remove( data ) {
    this._root = removeNode(this._root, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) return null;

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this._root) return;

    let node = this._root;
    while(node.left) node = node.left
    return node.data;
  }

  max() {
    if (!this._root) return;

    let node = this._root;
    while(node.right) node = node.right
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};