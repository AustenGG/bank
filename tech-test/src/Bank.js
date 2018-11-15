'use strict';

function Bank() {
   this.balance = 100;
   this.Transactions = [];
 }

  Bank.prototype.getCurrentBalance = function() {
    return "£" + this.balance;
  };
  Bank.prototype.deposit = function(value) {
     this.balance += value;
  }

  Bank.prototype.withdrawal = function(value) {
     this.balance -= value;
  }

  Bank.prototype.statement = function() {
     var balance = this.balance;
     return "--STATMENT-- Current balamce: " + balance;
  }

  Bank.prototype.getTransactions = function() {
    return this.Transactions;
  };

  Bank.prototype.addTransactions = function(transactionType) {
    var currentB = this.balance;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }
    today = dd + '/' + mm + '/' + yyyy;

    this.Transactions.push("Transaction method: " + transactionType + " -- Date: " + today + " -- Balance: " + "£" + currentB);

  };
