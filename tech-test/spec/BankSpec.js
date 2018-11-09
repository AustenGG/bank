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
     bank.withdrawl(10);
     expect(bank.getCurrentBalance()).toEqual(90);
   });

   it('Prints Statement', function() {
     bank.statement();
     expect(bank.statement()).toEqual("--STATMENT-- Current balamce: 100");
   });

   it('Has empty transactions array as default', function() {
     expect(bank.getTransactions()).toEqual([]);
   });

   it('Adds a transaction type to the transactions array', function() {
     bank.addTransactions("Deposit", "09112018")
     expect(bank.getTransactions()).toEqual(["Transaction method: Deposit -- Date: 09112018 -- Balance: £100"]);
   });


 });
