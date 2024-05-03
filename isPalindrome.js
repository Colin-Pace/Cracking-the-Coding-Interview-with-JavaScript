/*
    1. Problem: "Implement a function to check if a linked list is a palindrome."
    2. Source: Cracking the Coding Interview by Gayle Laakmann McDowell
    3. Example: 

                a. 0 > 1 > 2 > 1 > 0

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

    appendNode(data) {
      const node = new Node(data);
      if (!this.head) {
          this.head = node;
          this.tail = node;
      } else {
          this.tail.next = node;
          this.tail = node;
      }
  }

    isPalindrome() {
      if (!this.head) {
          return false;
      }

      // Make a stack to hold the first half of the list and fast and slow runners to iterate the list to find the length as either even or odd
      const stack = [];
      let fast = this.head;
      let slow = this.head;

      // Build the stack from the slow runner
      while (fast !== null && fast.next !== null) {
        stack.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
      }

      // If the fast runner is still not null, then the list is odd, and the slow runner should be incremented to the next node to start the comparison with the stack
      if (fast !== null) {
          slow = slow.next;
      }

      // Pop off and compare the top of the stack to the slow runner to check for palindrome
      while (slow !== null) {
          const top = stack.pop();
          // If the top and slow data don't match, return early
          if (top !== slow.data) {
              return false;
          }
          slow = slow.next;
      }

      // Return true since the slow runner made it to the end of the list, comparing with the stack along the way
      return true;
  }
}

const inputOne = [1, 2, 3, 4];
const inputTwo = [0, 1, 2, 1, 0];

const listOne = new LinkedList();
const listTwo = new LinkedList();

inputOne.forEach(element => listOne.appendNode(element));
inputTwo.forEach(element => listTwo.appendNode(element));

console.log(listOne.isPalindrome());
console.log(listTwo.isPalindrome());