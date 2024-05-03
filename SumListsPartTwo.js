/*

1. Problem: "Suppose the digits are stored in forward order. Repeat the above problem." Above problem: "You have two numbers represented by a linked list,where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list."
2. Source: Cracking the Coding Interview by Gayle Laakmann McDowell
3. Example:

            a. 617 + 295 = 912

            b. (6 > 1 > 7) + (2 > 9 > 5) 

            c. 9 > 1 > 2
*/

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class PartialSum {
  constructor() {
      this.sum = null;
      this.carry = 0;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  appendNode(data) {
      if (!this.head) {
        this.head = new Node(data);
        this.tail = this.head;
        return;
      }
  
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
      return;
  }

  prependNodeWithZero(linkedListNode, data) {
      const node = new Node(data);
      node.next = linkedListNode;
      return node;
  }
  
  padList(linkedListNode, padding) {
      let cur = linkedListNode;
      while (padding > 0) {
          cur = this.prependNodeWithZero(linkedListNode, 0);
          padding -= 1;
      }
      return cur;
  }

  display() {
      let itr = this.head;
      const result = [];
      while (itr) {
          result.push(itr.data)
          itr =  itr.next;
      }
      console.log(result);
  }

  findListLength(listHead) {
      let length = 0;
      let cur = listHead;
      while (cur) {
          length += 1;
          cur = cur.next;
      }
      return length;
  }

/* WALKTHROUGH OF THE ADDLISTSHELPER METHOD
  
  Demonstration example lists:

      listOne: 1 > 2 > 3 > 4
      listTwo: 0 > 5 > 6 > 7

      result: 1 > 8 > 0 > 1

  Frame: 1

      listOneNode.data = 1
      listTwoNode.data = 0

      sum = ...
  
  Frame: 2
      
      listOneNode.data = 2
      listTwoNode.data = 5

      sum = ...

  Frame: 3
      
      listOneNode.data = 3
      listTwoNode.data = 6

      sum = ...


  Frame: 4
      
      listOneNode.data = 4
      listTwoNode.data = 7

      sum = ...

  Frame: 5

      listOneNode = null
      listTwoNode = null

      sum
          sum = null
          carry = 0

      return sum

  Frame: 4

      sum 
          sum = null
          carry = 0
      
      val = 11
      result = LinkedList
      result = 1 > null

      sum.sum = 1 > null
      sum.carry = 1.1

      return sum

  Frame: 3

      sum
          1 > null
          1.1
      
      val = 10.1
      result = LinkedList
      result = 1.01 > 1 > null

*/

  addListsHelper(listOneNode, listTwoNode) {
      if (listOneNode === null && listTwoNode === null) {
          let sum = new PartialSum();
          return sum;
      }

      let sum = this.addListsHelper(listOneNode.next, listTwoNode.next);
      let val = sum.carry + listOneNode.data + listTwoNode.data;
      const result = new LinkedList();

      result.appendNode(val % 10);
      
      if (sum.sum !== null) {
          result.head.next = sum.sum.head;
          sum.sum = result;
      } else {
          sum.sum = result;
      }

      sum.carry = val >= 10 ? 1 : 0
      return sum;
  }

  addLists(listOneNode, listTwoNode) {
      let len1 = this.findListLength(listOneNode);
      let len2 = this.findListLength(listTwoNode);

      if (len1 < len2) {
          listOneNode = this.padList(listOneNode, len2 - len1);
      } else {
          listTwoNode = this.padList(listTwoNode, len1 - len2);
      }

      let sum = this.addListsHelper(listOneNode, listTwoNode);
      //console.log(sum.sum.display());

      if (sum.carry === 0) {
          return sum.sum;
      } else {
          result = insertBefore(sum.sum, sum.carry);
          return result;
      }
  }
}

// Problem input
const inputOne = [6, 1, 7];
const inputTwo = [2, 9, 5];

// Input for demonstration of equalizing list length 
// const inputOne = [1, 2, 3, 4];
// const inputTwo = [5, 6, 7];

const listOne = new LinkedList();
const listTwo = new LinkedList();

inputOne.forEach(element => listOne.appendNode(element));
inputTwo.forEach(element => listTwo.appendNode(element));

const result = listOne.addLists(listOne.head, listTwo.head);
result.display()