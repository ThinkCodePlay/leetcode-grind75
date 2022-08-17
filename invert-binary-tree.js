// https://leetcode.com/problems/invert-binary-tree/
// Given the root of a binary tree, invert the tree, and return its root.

// option1 tree traversal
// when return from right // switch left and right nodes

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  let currentNode = root;
  while (true) {
    if (!currentNode) {
      return currentNode;
    }
    const left = invertTree(currentNode.left);
    const right = invertTree(currentNode.right);
    currentNode.right = left;
    currentNode.left = right;
    return currentNode;
  }
};

//           5
//     2              8
//    1 3            7 9
// -4     4         6    11

// [0, 1, 2, 3, 4, 5, 6,  7, 8, 9, 10]
// [5, 2, 8, 1, 3, 7, 9, -4, 4, 6, 11]

// indexes
// l1 0
// l2 1,2 -> 2,1
// l3 3,4,5,6 ->
// l4 7,8,9,10
