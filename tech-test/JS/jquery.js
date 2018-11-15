$(document).ready(function() {
  var bank = new Bank();

  $('#Balance').click(function(){
    $('#currentbal').text(bank.balance + " GBP");
  });

  $('#Deposit').click(function(){
    var amount = $('#value').val();
    var integer = parseInt(amount, 10); // converts string to integer (base 10)
    bank.addTransactions("Deposit", integer)

    bank.deposit(integer);
    $('#currentbal').text(bank.balance + " GBP");
  });

  $('#Withdraw').click(function(){
    var amount = $('#value').val();
    var integer = parseInt(amount, 10); // converts string to integer (base 10)
    bank.addTransactions("Withdraw", integer)
    bank.withdrawal(integer);
    $('#currentbal').text(bank.balance + " GBP");
  });

  $('#Statement').click(function(){
    alert(bank.Transactions);
  });

});
