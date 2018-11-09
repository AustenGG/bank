'use strict';

function Bank() {
   this.balance = 100;

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
