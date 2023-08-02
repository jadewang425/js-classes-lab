class BankAccount {
    constructor(ownerName, balance, acctNum) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }
    deposit(deposit) {
        this.balance += deposit;
    };
    withdraw(withdraw) {
        if (withdraw <= this.balance || ) {
            this.balance -= withdraw;
        } else {
            console.log('Not enough balance!');
        }
    };
}

class CheckingAccount extends BankAccount{
    constructor(overdraftEnabled) {
        this.overdraftEnabled = overdraftEnabled;
    }
}

class SavingAccount extends BankAccount{
    disallowWithdrawls() {}
}