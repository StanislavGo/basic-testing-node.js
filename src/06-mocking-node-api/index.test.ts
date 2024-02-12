import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

jest.useFakeTimers();

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const callback = jest.fn();
    const timeout = 1000;

    doStuffByTimeout(callback, timeout);
    jest.advanceTimersByTime(timeout);

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), timeout);
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn()
    const timeout = 1000;

    doStuffByTimeout(callback, timeout);
    jest.advanceTimersByTime(timeout);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const callback = jest.fn()
    const timeout = 1000;

    doStuffByInterval(callback, timeout);
    jest.advanceTimersByTime(timeout);

    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), timeout);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
