import {sumOfLeftLeaves, TreeNode} from './sum_of_left_leaves';

describe('SumOfLeftLeaves', () => {
  it('returns 0 for falsy root', () => {
    expect(sumOfLeftLeaves()).toBe(0);
  });

  it('returns 0 for empty tree', () => {
    const root = new TreeNode();
    expect(sumOfLeftLeaves(root)).toBe(0);
  });

  it('returns the 0 for height 1', () => {
    const root = new TreeNode(5);
    expect(sumOfLeftLeaves(root)).toBe(0);
  });

  it('returns the left value for a height of 2', () => {
    const root = new TreeNode(5, new TreeNode(3));
    expect(sumOfLeftLeaves(root)).toBe(3);
  });

  it('returns 0 for a tree of height 2 with no left leaves', () => {
    const root = new TreeNode(5, null, new TreeNode(3));
    expect(sumOfLeftLeaves(root)).toBe(0);
  });

  it('sums multiple left leaves', () => {
    const root = new TreeNode(3,
        new TreeNode(9),
        new TreeNode(20,
            new TreeNode(15),
            new TreeNode(7)));
    expect(sumOfLeftLeaves(root)).toBe(24);
  });

  it('sums multiple left leaves, skipping some', () => {
    const root = new TreeNode(3,
        new TreeNode(9),
        new TreeNode(20,
            null,
            new TreeNode(7,
                new TreeNode(15))));
    expect(sumOfLeftLeaves(root)).toBe(24);
  });
});
