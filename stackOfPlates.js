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
    if (this.isEmpty()) {
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
    if (this.isEmpty()) {
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

class SetOfStacks {
  constructor(limit) {
    this.size = 0;
    this.limit = limit;
    this.array = [];
  }

  push(data) {
    const makeNewStack = () => {
      const stack = new Stack();
      stack.push(data);
      this.array.push(stack);
    }

    if (this.array.length === 0) {
      makeNewStack();
      this.size++;
    } else {
      if (this.size === this.limit) {
        makeNewStack();
        this.size = 1;
      } else {
        const stack = this.array[this.array.length - 1];
        stack.push(data);
        this.size++;
      }
    }
  }

  pop() {
    if (this.array.length === 0) {
      console.log("Stack is empty");
    } else {
      const stack = this.array[this.array.length - 1];
      const element = stack.pop();
      
      if (stack.isEmpty()) {
        this.array.pop();
      }
      
      return element;
    }
  }
}

const stack = new SetOfStacks(3);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
//console.log(stack.array);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.pop();