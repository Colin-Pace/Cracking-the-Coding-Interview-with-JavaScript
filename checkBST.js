class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let lastPrinted = null;
function checkBST(node) {
  if (node === null) {
    return true;
  } else {
    
    if (!checkBST(node.left)) return false;

    if (lastPrinted !== null && node.data <= lastPrinted) {
      return false;
    }

    lastPrinted = node.data;

    if (!checkBST(node.right)) return false;
    
    return true;
  }
}

const root = new Node(20);
const A = new Node(10);
const B = new Node(5);
const C = new Node(16);
const D = new Node(30);
const E = new Node(38);
const F = new Node(24);

root.left = A;
root.right = D;
root.left.left = B
root.left.right = C;
root.right.left = F;
root.right.right = E;

console.log(checkBST(root));