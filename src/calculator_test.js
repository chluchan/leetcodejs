import {Calculator} from './calculator';

describe('Calculator', () => {
  it('should ad two numbers', () => {
    const calculator = new Calculator();
    const result = calculator.add(1, 5);
    expect(result).toBe(6);
  });
});
