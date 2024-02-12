/*

1. Return Nth to last node: A recursive and an iterative solution
2. Source: Cracking the Coding Interview by Gayle Lakmann McDowell, chapter 2
3. Example:

    A.    1 > 2 > 3 > 4 > 5 > 6 > null
          |                   |
          head                (tail)

    B.    Nth = 2
    C.    Result = node 5

4. Assumed knowledge: Classes, linked lists, recursion, and time and space complexity

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
        this.counter = 0;
    }

    add(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        let cur = this.head;
        while (cur.next) {
            cur = cur.next;
        }

        cur.next = new Node(data);
        return;
    }

    /*
        1 > 2 > 3 > 4 > 5 > 6 > null
        |                   |
        head                (tail)

        N = 2

        Result = node 5




        Recursive Stack

        Making the call stack by stacking frames:

        frame 7: node = null, NthNode = 2, this.counter = 0, result = ...
        
        frame 6: node = 6, NthNode = 2, this.counter = 0, result = ...
        
        frame 5: node = 5, NthNode = 2, this.counter = 0, result = ...
        
        frame 4: node = 4, NthNode = 2, this.counter = 0, result = ...
        
        frame 3: node = 3, NthNode = 2, this.counter = 0, result = ...
        
        frame 2: node = 2, NthNode = 2, this.counter = 0, result = ...
        
        frame 1: node = 1, NthNode = 2, this.counter = 0, result = ...


        
        The call stack is unwound through the frames:

        frame 7: node = null, NthNode = 2, this.counter = 0, result = null
        
        frame 6: node = 6, NthNode = 2, this.counter = 1, result = null
        
        frame 5: node = 5, NthNode = 2, this.counter = 2, result = null
        
        frame 4: node = 4, NthNode = 2, this.counter = 3, result = node 5
        
        frame 3: node = 3, NthNode = 2, this.counter = 4, result = node 5
        
        frame 2: node = 2, NthNode = 2, this.counter = 5, result = node 5
        
        frame 1: node = 1, NthNode = 2, this.counter = 6, result = node 5

    */


    // Time O(N), space O(N): Each recursive call takes up a level of memory in space
    nthToLastRecursive(node, NthNode) {

        // Check the base case if the recursion has moved past the last node in the list
        if (node === null) {
            return null;
        }

        // Declare a variable result that equals the value passed from the previous frame in the call stack during the unwinding
        const result = this.nthToLastRecursive(node.next, NthNode); 

        // Incrementing the counter tabulates the Nth frame from the end, which gives the Nth node
        this.counter += 1;
        if (this.counter === NthNode) {
            return node;
        }
        
        return result;
    }

    /*
        1 > 2 > 3 > 4 > 5 > 6 > null
        |                   |
        head                (tail)
                                 f
                        s

        i = 0

        N = 2

        Target = node 5

    */

    // Complexity: Time O(N), space O(1)
    nthToLastIterative(NthNode) {

        // Check the edge case of null NthNode and a null linked list head
        if (!NthNode || !this.head) {
            return null;
        }

        // Declare runners
        let fast = this.head;
        let slow = this.head;

        // Iterate the fast runner N nodes into the list
        for (let i = 0; i < NthNode; i++) {
            if (fast === null) {
                return null;
            }

            fast = fast.next;
        }

        // Iterate both runners until the fast runner equals null; then the slow runner will be at the Nth node from the end
        while (fast !== null) {
            fast = fast.next;
            slow = slow.next;
        }

        // Return the slow runner's node
        return slow;
    }
}

const input = [1, 2, 3, 4, 5, 6];
const list = new LinkedList;
//const emptyList = new LinkedList;
input.forEach(element => list.add(element));

// Recursive testing
// console.log(list.nthToLastRecursive(list.head, 2)); // return node 5
// console.log(list.nthToLastRecursive(list.head, 900)); // return null
// console.log(list.nthToLastRecursive(null, 2)); // return null
// console.log(list.nthToLastRecursive(list.head, null)); // return null
// console.log(list.nthToLastRecursive(emptyList.head, 2)); // return null

// Iterative testing
// console.log(list.nthToLastIterative(2)); // return node 5
// console.log(list.nthToLastIterative(900)); // return null
// console.log(list.nthToLastIterative(null)); // return null
// console.log(emptyList.nthToLastIterative(2)); // return null

/*

ChatGPT suggested topics to consider during an interview:

    Time and Space Complexities
    Optimality
        Context and Constraints
            Efficiency vs. Simplicity
                Scalability: In this context, the space requirement
                Code Readability
    Edge Cases and Robustness
        Testing

*/