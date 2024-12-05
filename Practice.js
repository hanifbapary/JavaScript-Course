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
// },1000);

const number = [12, 30, 1000, 10 , 3, 56];
console.log(number.sort((a , b) => a - b));

const users = [
   {
      name:'Layek Miah',
      age: 32
   },
   {
      name :'Rakib',
      age : 18,
   },
   {
      name:'Musa islam',
      age: 20,
   }
];
users.sort((a, b) => b.name.localeCompare(a.name));
console.log(users)       


const arr = [1, 2 , [3, 5], 6, 7];
const copy = [arr.flat()];





