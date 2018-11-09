describe('Balance', function() {

   var bank;

   beforeEach(function() {
     bank = new Bank();
   });

   it('starts at 100 ', function() {
     expect(bank.balance).toEqual(100);
   });
 });
