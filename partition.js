/*

1. Problem: Partition a list around a pivot; the pivot does not have to be between the left and right halves
2. Source: Cracking the Coding Interview by Gayle Laakmann McDowell
3. Example:

    a. Input list:                          3 > 5 > 8 > 5 > 10 > 2 > 1

    b. Stable                               3 > 2 > 1 > 5 > 8 > 5 > 10

    c. Not stable                           1 > 2 > 3 > 5 > 8 > 5 > 10


4. Assumed knowledge: Classes, linked lists, time and space complexity
5. Key point: Use a tail reference for constant addition time to end of a linked list

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

    // Complexity: Time O(N) and space O(N)
    partition(pivot) {
        if (!pivot || !this.head) {
            return null;
        }

        // Declare the partitioned halves
        let before = new LinkedList;
        let after = new LinkedList;

        // Iterate the input list and add to the partitioned halves
        let cur = this.head;
        while (cur) {
            if (cur.data < pivot) {
                before.add(cur.data);
            } else {
                after.add(cur.data);
            }
            cur = cur.next;
        }

        // Connect the lists 
        cur = before.head;
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = after.head;

        // Return the connected list
        return before;
    }

    // Complexity: Time O(N) and space O(N)
    partitionUnstable(pivot) {

        // Declare the partitioned list
        let partitionedList = new LinkedList;

        // Iterate the input list
        let cur = this.head;
        while (cur) {

            // Declare a node that will be put either as the new head or tail of the partitioned list
            const node = new Node(cur.data);
            if (partitionedList.head === null) {
                partitionedList.head = node;
                partitionedList.tail = node;
            }

            // Here as the head node
            if (cur.data < pivot) { 
                node.next = partitionedList.head;
                partitionedList.head = node;

            // And here as the tail node
            } else {
                partitionedList.tail.next = node;
                partitionedList.tail = node;
            }

            cur = cur.next;
        }

        // Return the partitioned list
        return partitionedList;
    }

    display() {
        const result = [];
        let cur = this.head;
        while (cur) {
            result.push(cur.data);
            cur = cur.next;
        }
        return result;
    }
}

const list = new LinkedList;
const input = [3, 5, 8, 5, 10, 2, 1];
input.forEach(element => list.add(element));
//console.log(list.display());

// const partitionedList = list.partition(5);
// console.log(partitionedList.display());

// const fasterPartitionedList = list.partitionUnstable(5);
// console.log(fasterPartitionedList.display());