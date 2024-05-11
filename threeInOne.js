/*

1. Problem: "Three in One: Describe how you could use a single array to implement three stacks."
2. Source: Cracking the Coding Interview by Gayle Laakmann McDowell

*/

class Stack {
  constructor(stackSize) {
    this.stackSize = stackSize;
    this.array = new Array(stackSize);
    this.pointers = [0, stackSize, stackSize * 2];
  }

  push(num, val) {
    if (this.pointers[num] < (num + 1) * this.stackSize) {
      this.array[this.pointers[num]++] = val;
    } else {
      console.log("Stack is full");
    }
  }

  pop(num) {
    if (this.pointers[num] > num * this.stackSize) {
      return this.array[--this.pointers[num]];
    } else {
      console.log("Stack is empty");
    }
  }
}

const stack = new Stack(3);
stack.push(0, "a");
stack.push(0, "b");
stack.push(0, "c");
stack.push(0, "d");

stack.push(1, "d");

console.log(stack.pop(0));
console.log(stack.pop(0));
console.log(stack.pop(0));

stack.pop(0);

console.log(stack.pop(1));