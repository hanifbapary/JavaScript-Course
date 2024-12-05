'use strict';

// account Data;
const account1 = {
   owner: 'Jonas Schmedtmann',
   movements: [12342131,200, 450, -400, 3000, -650, -130, 70, 1300],
   interestRate: 1.2, // %
   pin: 1111,
};
 
 const account2 = {
   owner: 'Jessica Davis',
   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
   interestRate: 1.5,
   pin: 2222,
};
 
 const account3 = {
   owner: 'Steven Thomas Williams',
   movements: [200, -200, 340, -300, -20, 50, 400, -460],
   interestRate: 0.7,
   pin: 3333,
};
 
 const account4 = {
   owner: 'Sarah Smith',
   movements: [430, 1000, 700, 50, 90],
   interestRate: 1,
   pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Display Movements function on web page

const displayMovements = function(movements, sort = false){
   containerMovements.innerHTML = '';

   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
   movs.forEach((mov , i) =>{
      const type = mov > 0 ? 'deposit' : 'withdrawal';
      const html = `
         <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;
      containerMovements.insertAdjacentHTML('afterbegin', html)
   })
}
// displayMovements(account1.movements);

// Display balance funciton
const displaybalance = function(acc){
   acc.balance = acc.movements.reduce((acc, curr) => acc + curr,0);
  
  labelBalance.textContent = `${acc.balance}€`;

};

// displaybalance(account1.movements);

// display balance summary;
const displayBalanceSummary = function(acc){
   const income = acc.movements.filter(mov => mov > 0)
                           .reduce((acc, curr) => acc + curr, 0);
   labelSumIn.textContent = income;

   const out = acc.movements.filter(mov => mov < 0)
                        .reduce((acc, curr) => acc + curr , 0);
   labelSumOut.textContent = Math.abs(out);

   const interest = acc.movements.filter(mov => mov > 0)
                              .map(deposit => deposit * acc.interestRate / 100)
                              .filter(deposit => deposit > 1)
                              .reduce((acc, curr) => acc + curr , 0)
   labelSumInterest.textContent = Math.round(interest);
}
// displayBalanceSummary(account1.movements);

// creat username or username property;
const creatUserName = function(accounts){
   accounts.forEach(account => {
      account.username = account.owner.toLowerCase().split(' ').map(fletter => fletter[0]).join('');
   })
}
creatUserName(accounts);

// Update UI function
const updateUI = function(curAcc){
      // Display Balance
      displaybalance(curAcc);
      // Display movments
      displayMovements(curAcc.movements)
      // Dsplay summary
      displayBalanceSummary(curAcc);
}

// Try to implement login function;
let currentAccount;

btnLogin.addEventListener('click', function(e){
   e.preventDefault()
   
  currentAccount = accounts.find(acc =>  acc.username === inputLoginUsername.value);
//   console.log(currentAccount)

  if(currentAccount?.pin === Number(inputLoginPin.value)){
      // Display Ui and message
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
      containerApp.style.opacity = 1;

      //clear the input feilds;
      inputLoginUsername.value = inputLoginPin.value = ''
      inputLoginPin.blur();

      // Update Ui function 
      updateUI(currentAccount)
  }

});


btnTransfer.addEventListener('click', function(e){
   e.preventDefault();
   const amount = Number(inputTransferAmount.value);

   const recevierAccount =accounts.find(acc =>  acc.username === inputTransferTo.value) ;

   inputTransferAmount.value = inputTransferTo.value = '';

   if(amount > 0 && recevierAccount && 
      currentAccount.balance >= amount && 
      recevierAccount?.username !== currentAccount.username){

      // Doing the transfer
      currentAccount.movements.push(-amount);
      recevierAccount.movements.push(amount);

      // updtae UI
      updateUI(currentAccount)
   }
});

// Apply for loan Functionality;
btnLoan.addEventListener('click', function(e){
   e.preventDefault();

   const amount = Number(inputLoanAmount.value);

   if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
      // add movement;
      currentAccount.movements.push(amount);

      // update UI
      updateUI(currentAccount)
   };
   inputLoanAmount.value = '';
})

// close buttton function
btnClose.addEventListener('click', function(e){
   e.preventDefault();

   if(inputCloseUsername.value === 
      currentAccount.username &&  
      Number(inputClosePin.value) === 
      currentAccount.pin){
      const index = accounts.findIndex(acc => acc.username === currentAccount.username)
      console.log(index)

      accounts.splice(index, 1);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started'
   };
   inputCloseUsername.value = inputClosePin.value = '';
});

// Button sort;
let sorted = false;
btnSort.addEventListener('click', function(e){
   e.preventDefault();
   displayMovements(currentAccount.movements, !sorted);
   sorted = !sorted
});

labelBalance.addEventListener('click', function(){
   const movmentsUI = Array.from(document.querySelectorAll('.movements__value'));
   console.log(movmentsUI.map(el => el.textContent.replace('E', '')))
})