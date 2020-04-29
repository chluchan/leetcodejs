import {deepestLeavesSum, TreeNode} from './deepest_leaves_sum';

// https://leetcode.com/problems/deepest-leaves-sum/
describe('deepest leaves sum', () => {
  it('return 0 for empty tree', () => {
    const result = deepestLeavesSum(null);
    expect(result).toBe(0);
  });

  it('return val for a tree of height 1', () => {
    const result = deepestLeavesSum(new TreeNode(5));
    expect(result).toBe(5);
  });

  it('return val for a tree of height 2 with only left tree', () => {
    const result = deepestLeavesSum(new TreeNode(5, new TreeNode(6)));
    expect(result).toBe(6);
  });

  it('return val for a tree of height 2 with only right tree', () => {
    const result = deepestLeavesSum(new TreeNode(5, null, new TreeNode(6)));
    expect(result).toBe(6);
  });

  it('return val for a tree of height 2 with both trees', () => {
    const result = deepestLeavesSum(new TreeNode(5, new TreeNode(1), new TreeNode(6)));
    expect(result).toBe(7);
  });

  it('return val for a tree of height 3 with uneven trees', () => {
    const result = deepestLeavesSum(
      new TreeNode(5,
        new TreeNode(1),
        new TreeNode(6,
          null,
          new TreeNode(9))));
    expect(result).toBe(9);
  });

  it('return val for a tree of height 4 with some equally deep values', () => {
    const result = deepestLeavesSum(
      new TreeNode(1,
        new TreeNode(2,
          new TreeNode(3,
            new TreeNode(5))),
        new TreeNode(6,
          null,
          new TreeNode(7,
            null,
            new TreeNode(8)))));
    expect(result).toBe(13);
  });

  it('matches the leetcode example', () => {
    const result = deepestLeavesSum(
      new TreeNode(1,
        new TreeNode(2,
          new TreeNode(4,
            new TreeNode(7)),
          new TreeNode(5)),
        new TreeNode(3,
          null,
          new TreeNode(6,
            null,
            new TreeNode(8)))));
    expect(result).toBe(15);
  });
});
