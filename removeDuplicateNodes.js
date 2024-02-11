/*

1. Source: Cracking the Coding Interview by Gayle Laakmann McDowell, chapter 2
2. New to linked lists? Check out my "The Linked List in JavaScript" video in the "Data Structures and Algorithms" playlist
3. Challenge: Remove duplicate nodes from a linked list. Follow up: What if there is no temporary buffer?
4. Example: 

1 > 2 > 3 > 1 > 4 > 1 > 2
|                       |
head                    (tail)

node = this.head

1 > 2 > 3 > 4
|           |
head        (tail)

5. Assumption: Time and space complexity

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
      if (!this.head) {
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

  //            >          >
  // 1 > 2 > 3  1 > 4  1 > 2 > null
  //                            c
  //                p 
  // seen {1: true, 2: true, 3: true, 4: true}

  // Time and space complexity: O(N)
  remove(node) {
      if (!node) {
          return;
      }

      const seen = {}; // buffer
      let cur = this.head;
      let prev = null;
      
      while (cur) {
          if (seen[cur.data] === true) {
              prev.next = cur.next; // removal of the node
          } else {
              seen[cur.data] = true;
              prev = cur;
          }

          cur = cur.next;
      }

      return;
  }

  //             >          >
  // 1 > 2 > 3  (1 >) 4  (1 > 2 >) null 
  // c
  // r

  /*

          n * (n/2) = n^2

  */

  // Time complexity O(N^2), space complexity: O(1)
  noBuffer(node) {
      if (!node) {
          return;
      }

      let cur = this.head;
      while (cur) {
          let runner = cur;
          while (runner.next) {
              if (runner.next.data === cur.data) {
                  runner.next = runner.next.next; // removal of a duplicate node
              } else {
                  runner = runner.next;
              }
          }
          cur = cur.next;
      }

      return;
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

const input = [1, 2, 3, 1, 4, 1, 2];
const list = new LinkedList;
input.forEach(element => list.add(element));
console.log(list.display());
//list.remove(list.head);
list.noBuffer(list.head);
console.log(list.display());