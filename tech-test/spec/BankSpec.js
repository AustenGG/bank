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

 });
