// Sort Stakc: sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure; from Cracking the Coding Interview by Gayle Laakmann McDowell

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    } else {
      node.next = this.head;
      this.head = node;
      return;
    }
  }

  pop() {
    if (!this.head) {
      console.log("Stack is empty");
    } else {
      const node = this.head;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return node.data;
    }
  }

  isEmpty() {
    return this.head === null;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.head.data;
    }
  }
}

/*

stack 

2
5
3
1
4

aux stck

temp = 



*/

function sort(stack) {
  const auxStack = new Stack();
  while (!stack.isEmpty()) {
    const temp = stack.pop();
    while (!auxStack.isEmpty() && auxStack.peek() > temp) {
      stack.push(auxStack.pop());
    }
    auxStack.push(temp);
  }

  while (!auxStack.isEmpty()) {
    stack.push(auxStack.pop());
  }
}

const stack = new Stack();
const input = [4, 1, 3, 5, 2];
input.forEach(element => stack.push(element))
sort(stack);

while (!stack.isEmpty()) {
  console.log(stack.pop());
}