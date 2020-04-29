function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

function DepthValue(val, depth) {
  this.val = val;
  this.depth = depth;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function deepestLeavesSum(root) {
  if (root) {
    const depthValue = deepestLeavesSubtreeSub(root, 0);
    return depthValue.val;
  } else {
    return 0;
  }
}

/**
 * @param {!TreeNode} root
 * @param {number} depth
 * @return {!DepthValue}
 */
function deepestLeavesSubtreeSub(root, depth) {
  if (!root.left && !root.right) {
    return {val: root.val, depth};
  }

  if (root.left && root.right) {
    const leftDepthSum = deepestLeavesSubtreeSub(root.left, depth + 1);
    const rightDepthSum = deepestLeavesSubtreeSub(root.right, depth + 1);
    return sumDepthValues(leftDepthSum, rightDepthSum);
  }

  if (root.left) {
    return deepestLeavesSubtreeSub(root.left, depth + 1);
  }

  if (root.right) {
    return deepestLeavesSubtreeSub(root.right, depth + 1);
  }
}

/**
 * @param {!DepthValue} depthValue1
 * @param {!DepthValue} depthValue2
 * @return {!DepthValue}
 */
function sumDepthValues(depthValue1, depthValue2) {
  if (depthValue1.depth === depthValue2.depth) {
    return new DepthValue(depthValue1.val + depthValue2.val, depthValue1.depth);
  } else if (depthValue1.depth > depthValue2.depth) {
    return depthValue1;
  } else {
    return depthValue2;
  }
}

module.exports = {
  deepestLeavesSum,
  TreeNode,
};
