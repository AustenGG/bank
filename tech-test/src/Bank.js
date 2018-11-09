'use strict';

function Bank() {
   this.balance = 100;
  
 }

 Bank.prototype.getCurrentBalance = function() {
    return this.balance;
  };
