import { SynchronizationFailedError, getBankAccount } from '.';

jest.mock('lodash', () => ({
  random: jest.fn(),
}));

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(getBankAccount(1000)).toEqual({"_balance": 1000});
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const bankAccount = getBankAccount(500);
    expect(() => bankAccount.withdraw(550)).toThrowError("Insufficient funds: cannot withdraw more than 500");
  });

  test('should throw error when transferring more than balance', () => {
    const firstAccount = getBankAccount(100);
    const secondAccount = getBankAccount(5);
    expect(() => firstAccount.transfer(1000, secondAccount)).toThrowError("Insufficient funds: cannot withdraw more than 100");
  });

  test('should throw error when transferring to the same account', () => {
    const firstAccount = getBankAccount(100);
    expect(() => firstAccount.transfer(20, firstAccount)).toThrowError("Transfer failed");
  });

  test('should deposit money', () => {
    const bankAccount = getBankAccount(100);
    const newBalance = bankAccount.deposit(50).getBalance();
    expect(newBalance).toBe(150);
  });

  test('should withdraw money', () => {
    const bankAccount = getBankAccount(100);
    const withdrawSomeMoney = bankAccount.withdraw(25).getBalance();
    expect(withdrawSomeMoney).toBe(75);
  });

  test('should transfer money', () => {
    const firstAccount = getBankAccount(100);
    const secondAccount = getBankAccount(5);
    firstAccount.transfer(20, secondAccount);
    const balanceOfSecondAccount = secondAccount.getBalance();
    expect(balanceOfSecondAccount).toBe(25);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(100);
    jest.spyOn(account, "fetchBalance").mockResolvedValueOnce(10);
    await account.synchronizeBalance();
    expect(typeof account.getBalance()).toBe("number");
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);

    jest.spyOn(account, "fetchBalance").mockResolvedValueOnce(50);
    await account.synchronizeBalance();

    expect(account.getBalance()).toBe(50);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);

    jest.spyOn(account, "fetchBalance").mockResolvedValueOnce(null);
    await expect(account.synchronizeBalance()).rejects.toThrow(SynchronizationFailedError);   
  });
});