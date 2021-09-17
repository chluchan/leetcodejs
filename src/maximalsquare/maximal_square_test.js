import {maximalSquare} from './maximal_square';

describe('maximal square', () => {
  it('has a sum of zero for empty matrix', () => {
    const matrix = [];
    expect(maximalSquare(matrix)).toBe(0);
  });

  it('a matrix of size 1 with 1 is 1', () => {
    const matrix = [['1']];
    expect(maximalSquare(matrix)).toBe(1);
  });

  it('a matrix with 1 row can have size 0', () => {
    const matrix = [['0']];
    expect(maximalSquare(matrix)).toBe(0);
  });

  it('a matrix with 1 long row can have size 1', () => {
    const matrix = [['0', '1']];
    expect(maximalSquare(matrix)).toBe(1);
  });

  it('can find a sum of 4 in a 2x3 matrix', () => {
    const matrix = [['0', '1'],
                    ['1', '1'],
                    ['1', '1']];
    expect(maximalSquare(matrix)).toBe(4);
  });

  it('can find a sum of 4 in a 3x2 matrix', () => {
    const matrix = [['0', '1', '1'],
                    ['1', '1', '1']];
    expect(maximalSquare(matrix)).toBe(4);
  });

  it('can find a sum of 9 in a 7x7 matrix', () => {
    const matrix = [['0', '1', '1', '0', '1', '1', '0'],
                    ['1', '1', '1', '0', '1', '1', '0'],
                    ['1', '0', '0', '0', '0', '1', '0'],
                    ['1', '1', '0', '1', '1', '1', '0'],
                    ['1', '1', '1', '1', '1', '1', '0'],
                    ['1', '1', '1', '1', '1', '1', '0'],
                    ['1', '1', '0', '1', '0', '1', '0']];
    expect(maximalSquare(matrix)).toBe(9);
  });
});
