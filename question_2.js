let balance = 0.0;


function checkBalance() {
  console.log("Your current balance is: $" + balance.toFixed(2));
  return balance;
}


function deposit(amount) {
  if (amount > 0) {
    balance += amount;
    console.log("Deposited $" + amount.toFixed(2) + ". Your new balance is $" + balance.toFixed(2));
  } else {
    console.log("Deposit amount must be positive.");
  }
}


function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
    console.log("Withdrew $" + amount.toFixed(2) + ". Your new balance is $" + balance.toFixed(2));
  } else {
    console.log("Insufficient funds.");
  }
}


function displayRemainingBalance() {
  if (balance > 0) {
    console.log("You have $" + balance.toFixed(2) + " remaining.");
  } else {
    console.log("Your balance is $0.00 or less.");
  }
}



balance = 500.0; 
checkBalance(); 

deposit(100);    
withdraw(50);    
displayRemainingBalance();
