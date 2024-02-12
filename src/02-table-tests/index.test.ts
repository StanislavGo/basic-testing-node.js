import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 10, b: 4, action: Action.Subtract, expected: 6 },
    { a: 5, b: 4, action: Action.Multiply, expected: 20 },
    { a: 25, b: 5, action: Action.Divide, expected: 5 },
    { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
    { a: "a", b: 3, action: Action.Exponentiate, expected: null },
    { a: 2, b: 3, action: "divide", expected: null },
];

describe('simpleCalculator', () => {
  testCases.forEach(({a, b, action, expected}) => {
    it("should return $expected for $action of $a and $b", () => {
      const rawInput = { a: a, b: b, action: action };
      expect(simpleCalculator(rawInput)).toBe(expected);
    });
  });
});
