import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const data = await resolveValue(10);
    expect(data).toBe(10);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError("Works")).toThrow("Works");
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError(undefined)).toThrow("Oops!");
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(() => rejectCustomError()).rejects.toThrowError(MyAwesomeError);
  });
});
