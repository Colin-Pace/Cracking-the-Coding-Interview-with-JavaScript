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

      let dataStore = {};
      let cur = this.head;
      
      while (cur) {
          if (!dataStore[cur.data]) {
              dataStore[cur.data] = 1;
          } else {
              dataStore[cur.data] += 1;
          }

          cur = cur.next;
      }

      let odd = 0;
      for (let i in dataStore) {
          if (dataStore[i] % 2 !== 0) {
              odd++;
          }
          if (odd > 1) {
              return false;
          }
      }

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