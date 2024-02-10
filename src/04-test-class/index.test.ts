import { getBankAccount } from '.';

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
    // Write your test here
  });

  test('should transfer money', () => {
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
