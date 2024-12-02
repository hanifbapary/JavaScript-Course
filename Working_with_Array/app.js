'use strict';

/*
// Simple Array Methods;
 
let arr = ['a','b','c', 'd', 'e'];
 
// console.log(arr.slice(2));
// console.log(arr.slice(-2)); // Its take last two element;
// // console.log(arr.slice(1,-2));
// console.log(arr.slice(1, -2))
// console.log([...arr]);

//splice ; // splice change the orginal array mind it;
 
const newArr = arr.splice(-2);
console.log(newArr)
console.log(arr)

const arrNew = [1,2,3,4,5];
// arrNew.splice(0, 1);
// console.log(arrNew);


// Reverse Array ;
arr = ['a','b','c', 'd', 'e']
const arr2 = ['j','i','h','g','j'];
// console.log(arr.reverse());

// console.log(arr.concat(arr2));
// console.log([...arr, ...arr2]);

// console.log(arr2.join('0')) // I can by using anything in the middle;
// console.log(arr2.join('%'))



// At Method;
const arr = [23, 11, 64];
console.log(arr.at(0));

console.log(arr[arr.length  -1]);
console.log(arr.slice(-1))
console.log(arr.at(-1));
console.log('jonas'.at(-1));
*/;


// Important section ForEach Loop;

const movements = [200, 450, -400, 3000, 650, -130, 1300];
// For
// movements.forEach(mov => mov > 0 ? 
//    console.log(`You deposit: ${mov}`)
//    : console.log(`You withdraw: ${Math.abs(mov)}`));

// for(const movement of movements){
//    movement > 0 ? console.log(`You deposit: ${movement}`)
//    : console.log(`You withdraw: ${Math.abs(movement)}`)
// }
// for(const [i, mov] of movements.entries()){
//    if(mov > 0) console.log(`Movement ${i +1} You deposit: ${mov}`)
//       else console.log(`Movement ${i + 1} You withdraw: ${mov}`)
// }
/*

ForEach with Maps and sets;

const currencies = new Map([
   ['USD', 'United states dollar'],
   ['EUR', 'Euro'],
   ['GBP', 'pound sterLing']
]);

currencies.forEach((vlaue, key, map) =>{
   console.log(`${key}: ${vlaue}`)
});

// Set;
// console.log(currenciesUnique);
const currenciesUnique = new Set(['USD','GBP','USD', 'EUR','EUR']);

currenciesUnique.forEach((value, key, map) =>{
   console.log(`${key}: ${value}`)
});

const testMap = new Map([
   ['name', "Layek Miah"],
   ['age', 22],
   ['country','Bangladesh'],
   ['isFollow', true]
]);

testMap.forEach(function(valu, key , map){
   console.log(`${key}: ${valu} => ${map}`)
});

let arr = ['a','b','a', 'd', 'b'];

let updateArray = new Set(arr);
console.log(updateArray);

updateArray.forEach((value, key, set)=>{
   console.log(`${key}: ${value}`)
})
*/;
// console.log('what the problem');
// console.log("I'm going to start new project in this time");

// Array Coding Challange;


const Juliadata = [3, 5, 2, 12, 7];
const Katedata = [4, 1, 15, 8, 3];

const JuliData2 = [9, 16, 6, 8, 3]
const kateData2 =[10, 5, 6, 1, 4]

const checkDogs = function(dogsJulia , dogsKate){
   const dogsJuliaCorrected = dogsJulia.slice();
   dogsJuliaCorrected.splice(0,1);
   dogsJuliaCorrected.splice(-2);
   const julia_Kate = [...dogsJuliaCorrected, ...dogsKate];
   julia_Kate.forEach((dogAge, i )=>{
      if(dogAge > 3){
         console.log(`Dog Number ${i + 1} is an adult, and is ${dogAge} Years Old`)
      }else {        
         console.log(`Dog Number ${i + 1} is still puppy`)
      }
   })
};

// const calcAverageHumanAge = function(ages){
//   const humanAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
//   console.log(humanAge);
//   const adults = humanAge.filter(age => age >= 18);
//   console.log(adults);
//   const average = adults.reduce((acc, currAge) => acc + currAge,0) / adults.length;
//   return average
// };
// const calcAverageHumanAge = (ages)=>{
//    const average = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
//       .filter(age => age >= 18)
//       .reduce((acc, curr, i , arr) => acc + curr / arr.length ,0);
//       return average
// }
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

 
/*
const maparr = [3,1,4,3,2];
const newArryByMap = maparr.map(curr => {
   return curr * 2;
});
 
console.log(maparr)
console.log(newArryByMap);

const arrbyFilter =maparr.filter(current =>{
   return current > 2
});
console.log(arrbyFilter);

const sumbyReduce = maparr.reduce((acc, curr) =>{
   return acc + curr;
});
console.log(sumbyReduce);
*/


/*
// const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
const euroToUsd = 1.1;

// const movementUsd = movements.map(function(mov){
//    return (mov * euroToUsd).toFixed(1)
// });
const movementUsd = movements.map(mov => mov * euroToUsd);
// console.log(movements)
// console.log(movementUsd);

const moveEuroToUsd = []
for(const mov of movements){
   moveEuroToUsd.push(mov * euroToUsd)
};
// console.log(moveEuroToUsd);

const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);



// Reduce Methods;

const balance = movements.reduce((acc, curr, i , arr) => acc + curr ,0);
console.log(balance);

const largestNumber = movements.reduce((acc, curr) => curr > acc ? curr : acc ,movements[0]);
console.log(largestNumber)
*/

// Chaning 
// const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
const euroToUsd = 1.1;
const totalDepositUSD = movements.filter(move => move > 0)
                        .map(move => move * euroToUsd)
                        .reduce((acc, move) => acc + move, 0);
// console.log(totalDepositUSD);

console.log('')
// Find Methods in Array ;

// const firstWithdrwals = movements.find(move => move < 0);
// console.log(firstWithdrwals)

// Find methods Example 

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

// We recieved just one object This is very useful
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// let account;
// for(const acc of accounts){
//    if(acc.owner === 'Jessica Davis') account = acc
// };
// console.log(account );

const account = accounts.filter(acc => acc.owner === 'Jessica Davis');
// console.log(account);

console.log("Hello");

// some Methods
console.log(movements);
// console.log(movements.includes(-130));
console.log(movements.some(mov => mov === -300));

const anyDeposit = movements.some(mov => mov > 1500);
console.log(anyDeposit);

// Every;

console.log(movements.every);


// flat flatMap

const arr = [[1,2,3], [4,5,6], 7, 8];
console.log(arr.flat());
const nestedToOne = arr.flat();

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// Calculate overalBalance of all account movments;
const accountMovements = accounts.map(acc => acc.movements);

const allMovments =accountMovements.flat();
const summOfMovments = allMovments.reduce((acc, curr) => acc + curr ,0);
console.log(summOfMovments);

const overalBalance = accounts.map(acc => acc.movements)
                      .flat()
                      .reduce((acc, mov) => acc + mov , 0);

console.log(overalBalance);

// Flat Map;
const overalBalance2 = accounts.flatMap(acc => acc.movements)
                      .reduce((acc, mov) => acc + mov , 0);

console.log(overalBalance);

const owner = ['Jonas', 'Zach', 'Adam', "Martha"];
console.log(owner.sort());
// console.log(movements.sort());

// return < 0 A, B;
// return > 0 B, A
console.log(movements)
// movements.sort((curr , next) =>{
//    console.log(curr, '=>', next)
//    if(curr > next) return -1;
//    if(next > curr) return 1;
// });
movements.sort((a, b) => b - a)

console.log(movements)
 

// More ways of creating adn filling array 

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
x.fill(1  )
console.log(x)