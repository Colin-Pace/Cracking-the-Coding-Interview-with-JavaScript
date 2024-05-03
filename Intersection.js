/*
    1. Problem: "Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting."
    2. Source: Cracking the Coding Interview by Gayle Laakmann McDowell
    3. Example: 

                a. 

                    3 > 1 > 5 > 9 
                                 \
                                  7 > 2 > 1
                                /
                           4 > 6

                b. Return node 7
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
      this.tail = null;
  }

  findListLength(listNode) {
      let len = 0;
      let cur = listNode;
      while (cur) {
          len += 1;
          cur = cur.next;
      }
      return len;
  }

  findTail(listNode) {
      let cur = listNode;
      while (cur.next) {
          cur = cur.next;
      }
      return cur;
  }

  findIntersection(listOneNode, listTwoNode) {
      // Variables for the tail of each list
      const listOneTail = this.findTail(listOneNode);
      const listTwoTail = this.findTail(listTwoNode);

      // If the tail of each list is not the same, then there is no intersection
      if (listOneTail !== listTwoTail) {
          return null;
      } else {
          // Find the lengths of the lists
          const len1 = this.findListLength(listOneNode);
          const len2 = this.findListLength(listTwoNode);
          
          // Set a pointer at the start of each list
          let listOnePointer = listOneNode;
          let listTwoPointer = listTwoNode;

          // Advance the pointer on the longer list. Advance as many nodes as the list is longer than the shorter list
          let offset = 0;
          if (len1 > len2) {
              offset = len1 - len2;
              while (offset > 0) {
                  listOnePointer = listOnePointer.next;
                  offset -= 1;
              }
          } else {
              offset = len2 - len1;
              while (offset > 0) {
                  listTwoPointer = listTwoPointer.next;
                  offset -= 1;
              }
          }

          // Then advance each pointer until they meet
          while (listOnePointer !== listTwoPointer) {
              listOnePointer = listOnePointer.next;
              listTwoPointer = listTwoPointer.next;
          }

          // Return the node where they meet. That's the intersection
          return listOnePointer;
      }
  }
}

// Make and connect the linked lists
const listOne = new LinkedList();
const listTwo = new LinkedList();

const first = new Node(3);
const second = new Node(1);
const third = new Node(5);
const fourth = new Node(9);
const fifth = new Node(7);
const sixth = new Node(2);
const seventh = new Node(1);
const eighth = new Node(4);
const ninth = new Node(6);

listOne.head = first;
first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
sixth.next = seventh;

listTwo.head = eighth;
eighth.next = ninth;
ninth.next = fifth;

// Run the test
console.log(listOne.findIntersection(first, eighth));