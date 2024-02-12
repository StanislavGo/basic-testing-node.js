import { /* readFileAsynchronously,*/ doStuffByTimeout, /* doStuffByInterval */ } from '.';

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

    const setTimeoutMock = jest.spyOn(global, "setTimeout");

    doStuffByTimeout(callback, timeout);

    jest.advanceTimersByTime(timeout);

    expect(setTimeoutMock).toHaveBeenCalledTimes(1);
    expect(setTimeoutMock).toHaveBeenCalledWith(expect.any(Function), timeout);

    setTimeoutMock.mockRestore();
  });

  test('should call callback only after timeout', () => {
    // const callback = jest.fn()
    // const timeout = 1000;

    // doStuffByTimeout(callback, timeout);
    // jest.advanceTimersByTime(timeout);

    // expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(callback).toHaveBeenCalledTimes(1);
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
    // const callback = jest.fn()
    // const interval = 1000;

    // doStuffByInterval(callback, interval);
    // jest.advanceTimersByTime(interval);

    // expect(setInterval).toHaveBeenCalledWith(expect.any(Function), interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // const callback = jest.fn()
    // const interval = 1000;
    // const numberOfIntervals = 4;

    // doStuffByInterval(callback, interval);
    // jest.advanceTimersByTime(interval * numberOfIntervals);

    // expect(setInterval).toHaveBeenCalledTimes(1);
    // expect(callback).toHaveBeenCalledTimes(numberOfIntervals);
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
