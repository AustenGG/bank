'use strict';

function Bank() {
   this.balance = 100;
   this.Transactions = [];
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
     return "--STATMENT-- Current balamce: " + balance;
  }

  Bank.prototype.getTransactions = function() {
    return this.Transactions;
  };

  Bank.prototype.addTransactions = function(transactionType, date) {
    var currentB = this.balance;
    this.Transactions.push("Transaction method: " + transactionType + " -- Date: " + date + " -- Balance: " + "£" + currentB);

  };
