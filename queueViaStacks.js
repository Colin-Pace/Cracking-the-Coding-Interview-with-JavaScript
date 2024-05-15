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
    return this.head.data;
  }
}

class MyQueue {
  constructor() {
    this.newest = new Stack();
    this.oldest = new Stack();
  }

  add(val) {
    this.newest.push(val);
  }

  shiftStacks() {
    if (this.oldest.isEmpty()) {
      while (!this.newest.isEmpty()) {
        this.oldest.push(this.newest.pop());
      }
    }
  }

  peek() {
    shiftStacks();
    return this.oldest.peek();
  }

  remove() {
    this.shiftStacks();
    return this.oldest.pop();
  }
}

const queue = new MyQueue();
queue.add(1);
queue.add(2);
queue.add(3);
console.log(queue.remove());
queue.add("a")
console.log(queue.remove());
console.log(queue.remove());
console.log(queue.remove());