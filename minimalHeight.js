class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function minimalHeightBST(arr, start, end) {
  if (end < start) {
    return null;
  }

  const mid = Math.floor((start + end) / 2);
  const node = new Node(arr[mid]);
  node.left = minimalHeightBST(arr, start, mid - 1);
  node.right = minimalHeightBST(arr, mid + 1, end);
  return node;
}

const input = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];
const tree = minimalHeightBST(input, 0, input.length - 1);
console.log(tree.right.right.right.data);
