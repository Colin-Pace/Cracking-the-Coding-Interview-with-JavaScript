/*

1. Problem: "You have two numbers represented by a linked list,where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list."
2. Source: Cracking the Coding Interview by Gayle Laakmann McDowell
3. Example:

            a. 617 + 295 = 912

            b. (7 > 1 > 6) + (5 > 9 > 2) 

            c. 2 > 1 > 9
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
      if (!this.head) {
        this.head = new Node(data);
        this.tail = this.head;
        return;
      }
  
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
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

  // The addLists method receives three arguments and turns them into parameters, two nodes of that are the heads of two different linked lists and a carry variable initially set to 0
  addLists(listOneNode, listTwoNode, carry) {
      // The base case has null nodes and zero carry over from the previous frame; the return statement here precedes the recursive call and thereby achieves the start of the unwinding of the recursive call stack
      if (listOneNode === null && listTwoNode === null && carry === 0) {
          return null;
      }

      // Declare variables for the result linked list and the total value of the nodes and carry, defining the value initially as equal to the carry to start the addition process
      const result = new LinkedList();
      let value = carry;
      
      // Add the first node's value
      if (listOneNode !== null) {
          value += listOneNode.data;
      }

      // And the second node's value
      if (listTwoNode !== null) {
          value += listTwoNode.data;
      }

      // Append a head node to the result linked list with the value of the first digit in the value variable, which is achieved by the modulus operator with the value of 10
      result.appendNode(value % 10);
      
      // Recurse if either of the nodes does not equal null
      if (listOneNode !== null || listTwoNode !== null) {
          // Define a variable for the linked list as it is built in later frames of the recursive call stack, which later will be appended to this frame's result linked list with a head node defined
          let more =  this.addLists(
                                      // Pass in either null or the next node in the first and second linked lists, and also pass either a 1 or 0 depending on whether the value of the addition of the nodes and the carry is greater than or equal to 10
                                      listOneNode == null ? null : listOneNode.next,
                                      listTwoNode == null ? null : listTwoNode.next,
                                      value >= 10 ? 1 : 0
                                  )

          // If more is not null, connect this frame's result linked list with the later frames' returned linked list, which is achieved by connecting the tail of this frame's linked list to the head of the more linked list
          if (more !== null) {
              result.tail.next = more.head;
          }
      }

      // Return the result linked list, which after building and unwinding the callstack, gives the answer for the addition problem
      return result;
  }
}

const inputOne = [7, 1, 6];
const inputTwo = [5, 9, 2];

const listOne = new LinkedList;
const listTwo = new LinkedList;

inputOne.forEach(element => listOne.appendNode(element));
inputTwo.forEach(element => listTwo.appendNode(element));

const answer = listTwo.addLists(listOne.head, listTwo.head, 0);
answer.display();