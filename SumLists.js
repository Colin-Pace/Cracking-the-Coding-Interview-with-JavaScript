/*

1. Problem: "You have two numbers represented by a linked list,where each node contains a single digit. The digits are stored in reverse order,such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list."
2. Source: Cracking the Coding Interview by Gayle Laakmann McDowell
3. Example:

            a. (7 > 1 > 6) + (5 > 9 > 2) 

            b. 2 > 1 > 9
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

  add(data) {
      if (!this.head) {
        this.head = new Node(data);
        this.tail = this.head;
        return;
      }
  
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
      return;
  }

  appendList(listToAppend) {
      if (listToAppend === null) {
          return;
      }

     let itr = listToAppend.head;
      while (itr !== null) {
          this.add(itr.data)
          itr = itr.next;
      }

      return;
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

  /*  WALKTHROUGH FOR ADDLIST METHOD BELOW

      Lists to add: (7 > 1 > 6) + (5 > 9 > 2) 

      Expected result: 2 > 1 > 9


      Recursive Frames: 

          Frame: 1

              listOneNode = 7
              listTwoNode = 5
              carry = 0

              result = LinkedList
              value = 0
              value = 7
              value = 12
              result.head.data = 2

              more = ...

          Frame: 2

              listOneNode = 1
              listTwoNode = 9
              carry = 1

              result = LinkedList
              value = 1
              value = 2
              value = 11
              result.head.data = 1

              more = ... 

          Frame: 3

              listOneNode = 6
              listTwoNode = 2
              carry = 1

              result = LinkedList
              value = 1
              value = 7
              value = 9
              result.head.data = 9

              more = ...

          Frame: 4

              listOneNode = null;
              listTwoNode = null;
              carry = 0;

              return null;

          Frame: 3
              
              more = null;
              result = 9 > null

              return 9 > null

          Frame: 2

              more = 9 > null
              result = 1 > 9 > null

              return 1 > 9 > null

          Frame: 1

              more = 1 > 9 > null
              result = 2 > 1 > 9 > null

              return 2 > 1 > 9 > null
  */

  addLists(listOneNode, listTwoNode, carry) {
      if (listOneNode === null && listTwoNode === null && carry === 0) {
          return null;
      }

      const result = new LinkedList();
      let value = carry;
      if (listOneNode !== null) {
          value += listOneNode.data;
      }
      if (listTwoNode !== null) {
          value += listTwoNode.data;
      }

      result.add(value % 10);
      if (listOneNode !== null || listTwoNode !== null) {
          let more =  this.addLists(
                                      listOneNode == null ? null : listOneNode.next,
                                      listTwoNode == null ? null : listTwoNode.next,
                                      value >= 10 ? 1 : 0
                                  )

          result.appendList(more);
      }

      return result;
  }
}

const inputOne = [7, 1, 6];
const inputTwo = [5, 9, 2];

const listOne = new LinkedList;
const listTwo = new LinkedList;

inputOne.forEach(element => listOne.add(element));
inputTwo.forEach(element => listTwo.add(element));

const answer = listTwo.addLists(listOne.head, listTwo.head, 0);
answer.display();