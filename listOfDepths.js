class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = new LinkedListNode(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    } else {
      this.tail.next = node;
      this.tail = node;
      return;
    }
  }
}

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    if (!this.root) {
      this.root = new TreeNode(data);
      return;
    } else {
      let itr = this.root;
      while (itr) {
        if (data < itr.data) {
          if (!itr.left) {
            itr.left = new TreeNode(data);
            return;
          }
          itr = itr.left;
        } else {
          if (!itr.right) {
            itr.right = new TreeNode(data);
            return;
          } else {
            itr = itr.right;
          }
        }
      }
    }
  }

  createLevelLinkedList(treeNode, lists, level) {
    if (treeNode === null) {
      return;
    } else {
      let list = new LinkedList();
      if (lists.length === level) {
        lists.push(list);
      } else {
        list = lists[level];
      }
      list.add(treeNode.data);
      this.createLevelLinkedList(treeNode.left, lists, level + 1);
      this.createLevelLinkedList(treeNode.right, lists, level + 1);
      return lists;
    }
  } 
}

/*
                  10
                5    15
              2   7 13  19


*/

const tree = new BST();
const input = [10, 5, 7, 2, 15, 13, 19];
input.forEach(element => tree.add(element));
const list = tree.createLevelLinkedList(tree.root, [], 0);
console.log(list);