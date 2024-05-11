/*
    1. Problem: "Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop."
    2. Source: Cracking the Coding Interview by Gayle Laakmann McDowell
    3. Example: 

                a. a > b > c > d > e > c

                b. Return Node {data: c, ...}
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

    /*
        Method logic:
        1. Move the fast pointer two nodes for every one node that flow moves
        2. Slow enters the loop after K nodes
        3. Also at the point when slow enters the loop, fast is K nodes into the loop
        4. So, they are loop-size - K nodes from each other
        5. Since fast moves twice as fast as slow, they move one node closer to each other in the loop with each iteration
        6. Therefore they meet after loop-size - K turns
        7. Since the head of the linked list is K nodes from the start of the loop, move the slow pointer to the head; advance the pointers at the same speed until they meet; then, they are at the start of the loop
    */
    findLoopStart() {
        // Use the fast and slow runner technique
        let slow = this.head;
        let fast = this.head;

        // Look for the collision of the runners; the prompt says the list is circular, so one doesn't need to check for fast being null (as it is done described in the book) 
        while (fast) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast === slow) {
                break;
            }
        }

        // Move slow back to the head, and then iterate the pointers at the same speed until they meet
        slow = this.head;
        while (fast !== slow) {
            slow = slow.next;
            fast = fast.next;
        }

        // Return one of the pointers
        return fast;
    }
}

/*                                    s
                                              f
    a. Linked list with loop: a > b > c > d > e > (c)
        
    b. Image:
                    
            a > b > c             
                    |  \
                    e < d
                    
    c. Loop length = 3
    d. Loop start = 3 nodes into the linked list
*/

const list = new LinkedList();

const first = new Node("a");
const second = new Node("b");
const third = new Node("c");
const fourth = new Node("d");
const fifth = new Node("e");

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = third;

list.head = first;
console.log(list.findLoopStart());