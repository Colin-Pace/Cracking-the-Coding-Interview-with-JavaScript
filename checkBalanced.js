// Check Balanced: "Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one." (Cracking the Coding Interview by Gayle Laakmann McDowell)

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    if (!this.root) {
      this.root = new Node(data);
    } else {
      let itr = this.root;
      while (itr) {
        if (data < itr.data) {
          if (!itr.left) {
            itr.left = new Node(data);
            return;
          } else {
            itr = itr.left;
          }
        } else {
          if (!itr.right) {
            itr.right = new Node(data);
            return;
          } else {
            itr = itr.right;
         }
        }
      }
    }
  }

  checkHeight(node) {
    if (!node) {
      return -1;
    } else {
      const leftHeight = this.checkHeight(node.left);
      if (leftHeight === Number.MIN_VALUE) return Number.MIN_VALUE;

      const rightHeight = this.checkHeight(node.right);
      if (rightHeight === Number.MIN_VALUE) return Number.MIN_VALUE;

      const heightDiff = leftHeight - rightHeight;

      if (node.data === 10) {
        console.log(heightDiff, leftHeight, rightHeight);
      }


      if (Math.abs(heightDiff) > 1) {
        return Number.MIN_VALUE;
      } else {
        return Math.max(leftHeight, rightHeight) + 1;
      }
    }
  }
}

/*

                            50
                        20      75
                     10   40   66  80
                   1  15   45        99
                       16     


    BUILDING AND UNWINDING THE CALL STACK

    Frame 1: 
      Node = 50
      LeftHeight = ...

    Frame 2:
      Node = 20
      LeftHeight = ...

    Frame 3:
      Node = 10
      LeftHeight = ...
    
    Frame 4:
      Node = 1
      LeftHeight = ...

    Frame 5:
      Node = null
      Return -1

    Frame 4
      Node = 1
      LeftHeight = -1
      RightHeight = ...

    Frame 6:
      Node = null
      Return -1

    Frame 4:
      Node = 1
      LeftHeight = -1
      RightHeight = -1
      HeightDiff = 0
      Return 0
    
    Frame 3:
      Node = 10
      LeftHeight = 0
      RightHeight = ...

    Frame 7:
      Node = 15
      LeftHeight = ...

    Frame 8:
      Node = null
      Return -1

    Frame 7:
      Node = 15
      LeftHeight = -1
      RightHeight = ...

    Frame 9:
      Node = 16
      LeftHeight = ...
    
    Frame 10:
      Node = null
      Return -1
    
    Frame 9:
      Node = 16
      LeftHeight = -1
      RightHeight = ...

    Frame 11:
      Node = null
      Return -1

    Frame 9:
      Node = 16
      LeftHeight = -1
      RightHeight = -1
      HeightDiff = 0
      Return 0

    Frame 7:
      Node = 15
      LeftHeight = -1
      RightHeight = 0
      HeightDiff = 1
      Return 1

    Frame 3:
      Node = 10
      LeftHeight = 0
      RightHeight = 1
      HeighDiff = 1
      Return 2

    Frame 2:
      Node = 20
      LeftHeight = 2
      RightHeight = ... 
*/

const tree = new BST();
const input = [50, 20, 40, 10, 45, 15, 1, 16, 75, 80, 66, 99];
input.forEach(element => tree.add(element));
console.log(tree.checkHeight(tree.root));