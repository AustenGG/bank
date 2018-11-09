'use strict';

function Bank() {
   this.balance = 100;
   this.transactions = []
 }

  Bank.prototype.getCurrentBalance = function() {
    return this.balance;
  };
  Bank.prototype.deposit = function(value) {
     this.balance += value;
  }

  Bank.prototype.withdrawl = function(value) {
     this.balance -= value;
  }

  Bank.prototype.statement = function() {
     var balance = this.balance;
     return "--STATMENT-- Current balamce: " + balance
  }

  Bank.prototype.getTransactions = function() {
    return this.transactions;
  };

  Bank.prototype.addTransactions = function(transactionType) {
    this.transactions.push(transactionType)
  };
