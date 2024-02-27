/*

Notes

1. Delete a middle node of a linked list given access only to that node
2. Source: Cracking the Coding Interview, by Gayle Lakmann McDowell
3. Example

    a. 1 > 2 > 3 > 4 > 5 > null

    b. Delete node 3

    c. 1 > 2 > 4 > 5 > null

4. Assumed knowledge: classes, link lists, time and space complexity

*/

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  add(data) {
      if (!data || !this.head) {
          this.head = new Node(data);
          return;
      }

      let cur = this.head;
      while (cur.next) {
          cur = cur.next;
      }

      cur.next = new Node(data);
      return;
  }

  // Time and space complexity O(1)
  deleteNode(node) {
      if (node === null || node.next === null) {
          return false;
      }

      node.data = node.next.data;
      node.next = node.next.next;
      return true;
  }

  display() {
      const result = [];
      let cur = this.head;
      while (cur) {
          result.push(cur.data);
          cur = cur.next;
      }
      return result;
  }
}

const list = new LinkedList;
const input = [1, 2, 3, 4, 5];
input.forEach(element => list.add(element));
console.log(list.display()); // [1, 2, 3, 4, 5]
list.deleteNode(list.head.next.next);
console.log(list.display()); // [1, 2, 4, 5]