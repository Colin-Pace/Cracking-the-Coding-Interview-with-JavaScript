/*

1. Problem: "Stack Min: How would you design a stack which, in addition to push and pop, has a function min
which returns the minimum element? Push, pop and min should all operate in 0(1) time."
2. Source: Cracking the Coding Interview by Gayle Laakmann McDowell

*/

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
    const node = new Node(data)
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
      return;
    } else {
      const node = this.head;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        return node.data;
      } else {
        this.head = this.head.next;
        return node.data;
      }
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

class StackMin extends Stack {
  constructor() {
    super();
    this.s2 = new Stack();
  }

  min() {
    if (this.s2.isEmpty()) {
      return Number.MAX_SAFE_INTEGER;
    } else {
      return this.s2.peek();
    }
  }

  push(data) {
    if (data < this.min()) {
      this.s2.push(data);
    }
    super.push(data);
  }

  pop() {
    const val = super.pop();
    if (val === this.min()) {
      this.s2.pop();
    }
    return val;
  }
}

const stackMin = new StackMin();
stackMin.push(4);
stackMin.push(2);
stackMin.push(1);
stackMin.push(3);
console.log(stackMin.min());
stackMin.pop();
stackMin.pop();
console.log(stackMin.min());