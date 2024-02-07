import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const rawInput = { a: 3, b: 2, action: Action.Add };
    expect(simpleCalculator(rawInput)).toBe(5);
  });

  test('should subtract two numbers', () => {
    const rawInput = { a: 10, b: 2, action: Action.Subtract };
    expect(simpleCalculator(rawInput)).toBe(8);
  });

  test('should multiply two numbers', () => {
    const rawInput = { a: 10, b: 10, action: Action.Multiply };
    expect(simpleCalculator(rawInput)).toBe(100);
  });

  test('should divide two numbers', () => {
    const rawInput = { a: 25, b: 5, action: Action.Divide };
    expect(simpleCalculator(rawInput)).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const rawInput = { a: 2, b: 3, action: Action.Exponentiate };
    expect(simpleCalculator(rawInput)).toBe(8);
  });

  test('should return null for invalid action', () => {
    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
  });
});
