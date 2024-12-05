'use strict'
/*
// Funciotn deafault parameter Practice
const bookings = [];
const creatBooking = function(flightNum, numPassenger = 1, price = 400 * numPassenger){
   const booking = {
      flightNum,
      numPassenger,
      price: price * numPassenger
   }
   bookings.push(booking)
};

creatBooking("LH453", 10, 300);
creatBooking("EW345", undefined, 250);
creatBooking("EU76");

// console.log(bookings);

const greet1 = function(name = "Guest"){
   console.log(`Hello, ${name}`)
};
// greet();
// greet("Mumin Miah");

const calculatePrice = function(price, tax = 0.05){
   return price + price * tax;
};

// console.log(calculatePrice(290));
// console.log(calculatePrice(400, 0.18));

const creatOrder = function(
    product, 
    quantity = 1,
    shiping = 'standard'
   ){

   console.log(`Order created for ${quantity} x ${product} with ${shiping} shiping`)
};

// creatOrder('Shampo', 4, 'Delay');
// creatOrder('Trimer', undefined, 'Argent');
// creatOrder('T-Shirt');

const greet2 = function(name, greeting = `Hello ${name}`){ 
   console.log(greeting)
};
// greetIng("Layek maih", 'How are you');
// greetIng('Adil');

/// Passing argument value vs Reference =====================================;

const flight = 'LH4032';

const jonas = {
   name: "Jonas smachedman",
   passport:"A2B7677"
};

const checkIn = function(flightNum, passenger){
   const flight = "EW874";
   passenger.name = 'Mr.' + passenger.name;

   passenger.passport === 'A2B7677'? console.log('checkIn') : console.log("Wrong passport");
}
checkIn(flight, jonas);

const newPassport = function(person){
   person.passport = Math.floor(Math.random() * 12341424523);
};

// newPassport(jonas);
// console.log(jonas);
// checkIn(flight,jonas);

const oneWord = function(str){
   return str.replace(/ /g, '').toLowerCase();
};

const upperFirst = function(str){
   const [first, ...others] = str.split(' ');
   return [first.toUpperCase(),...others].join(' ');
};

const transfrom = function(str, callbacks){
   console.log(`orginal string ${str}`);
   console.log(`Transform String: ${callbacks(str)}`);
   console.log(`Transform funciotn name (${callbacks.name})`)
};

transfrom('javascript is the best language in the world', upperFirst);
transfrom('javascript is the best language in the world', oneWord);


const myFunction = function(){
   let name = 'My name is layek Miah'
   return function(){
      console.log("Hello Return Function", name)
   }
};

const secondtime = myFunction();
secondtime();

const multiplier = function(factor){
   return function(number){
      return number * factor
   }
};

const double = multiplier(2);
const triple = multiplier(3);

double(5);
double(5);

const handleEvent = function(type){
   return function(event){
      console.log(`Handling ${type} event:`, event)
   }
};

const clickHandeler= handleEvent('click');
// document.querySelector('button').addEventListener('click', clickHandeler);

const counterFunction = function(){
   let count = 1;
   return function(){
      return count++;
   }
};

// const callCounterFunc = counterFunction();
// console.log(callCounterFunc())
// console.log(callCounterFunc())
// console.log(callCounterFunc());

const memorize = function(fn){
   const cach = {};
   return function(arg){
      if(cach[arg]) return cach[arg];
      const result = fn(arg);
      cach[arg] = result;
      return result
   }
};

const square = memorize((n) => n * n);
console.log(square(5));
console.log(square(5));

const lufhansa = {
   airline: "Lufthansa Airline",
   itacode: "LH",
   booking:[],
   book(flightNum, name){
      console.log(`${name} booked a seat on ${this.airline} flight ${this.itacode}${flightNum}`);

      this.booking.push({flight: 
         `${this.airline} flight ${this.itacode}${flightNum}`,
          name})
   }
};

lufhansa.book(309, "Layek Miah");
lufhansa.book(218, "Jonas");
console.log(lufhansa);

const eurowings = {
   airline: "Eurowings Airline",
   itacode: 'EW',
   booking:[],
}

// Call methods
const bookOption = lufhansa.book;
// bookOption(301, "Salman Islam");

bookOption.call(eurowings, 493, "Naim islam")
bookOption.call(eurowings, 493, "Emon islam")
bookOption.apply(eurowings, [389, "Mamun Ahmed"]);

console.log(eurowings.booking);

bookOption.call({airline: "Indian Airline", itacode: 'LH', booking:[]}, 389, "Godi Media");

// Apply Methods;
const flightData = [765, "Md Salman"];
bookOption.apply(eurowings, flightData);

// Bind Methods ;
const bookLH = bookOption.bind(lufhansa);
const bookEW = bookOption.bind(eurowings);

bookLH(409, "Milon Ahmed")
bookLH(409, "kawsar Ahmed")
bookLH(409, "Rasel Ahmed")
bookLH(409, "Rushon Ahmed")

bookEW(388, "Jonas Miah")
bookEW(388, "Amdad Miah")
bookEW(388, "Naim Miah")
bookEW(388, "Sijul Miah")
bookEW(388, "Rubia Akter");

console.log(lufhansa.booking)
console.log(eurowings.booking);

lufhansa.planes = 300;
lufhansa.buyNewPlane = function(){
   console.log(this);
   this.planes++;
   console.log(this.planes)
};

// document.querySelector('button').addEventListener('click', lufhansa.buyNewPlane.bind(lufhansa));


const addTax = (price, tax) => tax + (tax * price);

console.log(addTax(200, 0.4));

const AddVat = addTax.bind(null, 0.05);
console.log(AddVat(400));

const taxAddingFucntion = function(tax){
   return function(price){
      console.log(price + price * tax)
   }
};

const calculateTax = taxAddingFucntion(0.07);
calculateTax(300)
calculateTax(250)
calculateTax(180)
calculateTax(199);

const pollApp = {
   question: "What is the best language in the world",
   option: ["0: JavaScript","1 Python", "2 C++", "3 Rust"],
   answer: new Array(4).fill(0),
   registerNewAnswer(){
      const userAnswer = Number(prompt(`${this.question}\n${this.option.join('\n')}\n (Write Option number)`));
      
      typeof userAnswer === 'number' && userAnswer < this.option.length && this.answer[userAnswer]++;
      this.displayResult();
      this.displayResult('string')
   },
   displayResult(type = 'array'){
      if(type === 'array'){
         console.log(this.answer)
      }else if(type === 'string'){
         console.log(`Poll results are: ${this.answer.join(' ')}`)
      }
   }
}

document.querySelector('button').addEventListener('click', pollApp.registerNewAnswer.bind(pollApp));


(
   function(){
      console.log('This will never run again')
   }
)();

(() => console.log('This will never run again'))();

((name) => console.log(`Hello ${name}`))("Alice")

*/

// const mapTest = new Map([
//    ['USD', "United states of america"],
//    ['EUR', 'Europ states Euro'],
//    ['GBP', "Poun of United kingdom"]
// ]);

// mapTest.forEach((value , key, arr) =>{
//    console.log(`${key} => ${value} `)
// });

// const setsTest = new Set(['USD', 'BDT', 'EURO', 'USD', 'EURO', 'RIAL', 'BDT']);

// setsTest.forEach((valu, key, arr) =>{
//    console.log(`${valu}`)
// });

// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(1, -2))

// const juliaData = [3, 5, 2, 12, 7];
// const juliaDat1 = [9, 16, 6, 8, 3];
// const kateData = [4, 1, 15, 8, 3];
// const kateData1 = [10, 5, 6, 1, 4]

// const checkDogs = function(dogsJulia, dogsKate){
//    const juliaCorrect = dogsJulia.slice(1, -2);
//    const bothDogAges = juliaCorrect.concat(dogsKate);
//    // console.log(bothDogAges)
//    bothDogAges.forEach((age, i )=> {
//       console.log(age)
//       if(age >= 3){
//          console.log(`Dog Number ${i + 1} is an aduld  and is ${age}`)
//       }else(console.log(`Dog Number ${i + 1} is Still puppy`));
//    })
// };
// checkDogs(juliaData, kateData);

// const calcAverageHumanAge = function(ages){
//    const average = ages.map(age => age < 2 ? 2 * age : 16 + age * 4)
//                         .filter(age => age >= 18)
//                         .reduce((acc, curr, i , arr) => acc + curr / arr.length, 0);
//    return average;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// const maparr = [3,1,4,3,2];

// const newMapArray = maparr.map(value =>{
//    return value * 2
// });
// console.log(newMapArray);

// const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// const firstWithdrwals = movements.find(mov => mov < 0);
// console.log(firstWithdrwals);
// const firstDeposit = movements.find(mov => mov > 0);
// console.log(firstDeposit);

// setTimeout(()=>{
//    console.log("Hello")
// },1000)

/*
const arr = [1, 2, [3, 4, 5, ], 6, 7, 8];
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
const newArr = arrDeep.flat(2)
console.log(newArr);

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

// const allAccountMovements = accounts.map(acc => acc.movements);
// console.log(allAccountMovements)
const allMovments = accounts.flatMap(acc => acc.movements);
console.log(allMovments);
const summOfMovments = allMovments.reduce((acc, curr) => acc + curr , 0);
console.log(summOfMovments);

const sumOfAllAccountMovments = accounts.flatMap(acc => acc.movements)
   .reduce((acc, curr) => acc + curr, 0);

console.log(sumOfAllAccountMovments);

const fruits = ['apple', 'orange', 'mango', 'lichi', 'malta', 'goava'];
console.log(fruits.sort());
const fruits2 = ['apple', 'Orange', 'mango', 'Lichi', 'Malta', 'goava'];
console.log(fruits2.sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())));

const numbers = [1, 100, 10, 3, -200, 9, 70, 34, 200, 1000];
console.log(numbers.sort((a, b) => b - a))

*/;

const dogs = [
   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
   { weight: 8, curFood: 200, owners: ['Matilda'] },
   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
   { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. 
dogs.forEach(dog => dog.recFood = Math.floor(dog.weight ** 0.75 * 28));

console.log(dogs);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);

console.log(`Sarah Dog eating too ${dogSarah.curFood > dogSarah.recFood ? 'Much' : 'Little'}`);

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle)

console.log(`${ownersEatTooMuch.join(' and ')} Dog Eat to Much`)
console.log(`${ownersEatTooLittle.join(' and ')} Dog Eat to little`);

console.log(dogs.some(dog => dog.curFood === dog.recFood));

console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood <  dog.recFood * 1));

const copyOfDog = dogs.slice().sort((a, b) => a.curFood - b.curFood);

console.log(copyOfDog);


