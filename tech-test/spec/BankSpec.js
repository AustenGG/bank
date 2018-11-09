describe('Balance', function() {

   var bank;

   beforeEach(function() {
     bank = new Bank();

   });

   it('starts at 100 ', function() {
     expect(bank.getCurrentBalance()).toEqual(100);
   });

   it('Adds funds (10)', function() {
     bank.deposit(10);
     expect(bank.getCurrentBalance()).toEqual(110);
   });

   it('Withdraws funds (10)', function() {
     bank.withdrawal(10);
     expect(bank.getCurrentBalance()).toEqual(90);
   });

   it('Prints balance', function() {
     bank.statement();
     expect(bank.statement()).toEqual("--STATMENT-- Current balamce: 100");
   });

   it('Has empty transactions array as default', function() {
     expect(bank.getTransactions()).toEqual([]);
   });

   describe('Statement', function() {

      var bank;

      beforeEach(function() {
        bank = new Bank();
      });

   it('Adds a transaction type to the transactions array', function() {
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
     bank.addTransactions("Withdrawal")

     expect(bank.getTransactions()).toContain("Transaction method: Withdrawal -- Date: " + today +  " -- Balance: £100");
   });

   it('Prints populated array as a statement', function() {
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
     bank.addTransactions("Deposit")
     expect(bank.getTransactions()).toEqual(["Transaction method: Deposit -- Date: " + today +  " -- Balance: £100"]);
   });

  });

 });
