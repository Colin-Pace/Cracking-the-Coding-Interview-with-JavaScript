class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      return;
    } else {
      this.tail.next = node;
      this.tail = node;
      return;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
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

class AnimalShelter {
  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
    this.count = 1;
  }

  enqueue(name, type) {
    if (type === "cat") {
      this.cat.enqueue({
        _name: name,
        _type: type,
        _count: this.count
      });
    } else {
      this.dog.enqueue(
        {
          _name: name,
          _type: type,
          _count: this.count
        }
      );
    }
    this.count += 1;
    return;
  }

  dequeueAny() {
    if (this.cat.isEmpty() && this.dog.isEmpty()) {
      console.log("Animal shelter is empty");
    } else if (this.cat.isEmpty() && !this.dog.isEmpty()) {
      return this.dog.dequeue();
    } else if (!this.cat.isEmpty() && this.dog.isEmpty()) {
      return this.cat.dequeue();
    } else if (this.cat.peek()._count < this.dog.peek()._count) {
      return this.cat.dequeue();
    } else {
      return this.dog.dequeue();
    }
  }

  dequeueCat() {
    if (this.cat.isEmpty()) {
      console.log("No cats in animal shelter");
    } else {
      return this.cat.dequeue();
    }
  }

  dequeueDog() {
    if (this.dog.isEmpty()) {
      console.log("No dogs in animal shelter");
    } else {
      return this.dog.dequeue();
    }
  }
}

const animalShelter = new AnimalShelter();
animalShelter.enqueue("Rufus", "dog");
animalShelter.enqueue("Sparky", "cat");
animalShelter.enqueue("Taz", "cat");
animalShelter.enqueue("Lucy", "cat");
animalShelter.enqueue("Mathilda", "dog");

console.log(animalShelter.dequeueCat()); // expect Sparky
console.log(animalShelter.dequeueCat()); // expect Taz
console.log(animalShelter.dequeueAny()); // expect Rufus
console.log(animalShelter.dequeueDog()); // expect Mathilda
console.log(animalShelter.dequeueAny()); // expect Lucy