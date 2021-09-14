function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * https://leetcode.com/problems/sum-of-left-leaves/
 * @param root TreeNode
 */
function sumOfLeftLeaves(root) {
  if (!root) {
    return 0;
  }

  if (isLeaf(root.left)) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }

  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}

function isLeaf(node) {
  return node && !node.left && !node.right;
}

module.exports = {
  TreeNode,
  sumOfLeftLeaves,
};
