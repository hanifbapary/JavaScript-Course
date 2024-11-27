// 'use strict';
const body = document.querySelector('body');
// body.style.backgroundColor = 'red';

// console.log("Hello world")
// Callback function uses
// const calculator = (a, b, operation)=>{
//    return operation(a, b)
// };

// const addition = (x, y)=>{
//    return x + y;
// };

// const addValue = calculator(19,14, addition);
// console.log(addValue);

// const subtraction = (c, d) =>{
//    return c - d;
// }
// const subtractionValue = calculator(20, 34, subtraction);

// console.log(subtractionValue);


// Look closer to function
// const booking = [];

// const creatBooking = function(flightNum, NumPassengers = 1 , price = 300 * NumPassengers){

//    // Es5
//    // NumPassengers = NumPassengers || 1;
//    // price = price || '199$'
   
//    // Now Es6

//    const bookings = {
//       flightNum,
//       NumPassengers,
//       price
//    }

//    console.log(bookings);
//    booking.push(bookings);
// }

// creatBooking('LH123'); 
// creatBooking('LH34', 30, 900);
// creatBooking('THL12', 18);

// // We can't skip the parameter If I need to skip I will use undefined;;
// creatBooking('AHU989U', undefined, 1000);

// Passing argument works value vs Reference;

// const flight = "LH230";

// const jonas = {
//    name: "Layek Miah",
//    passport: 'AB34343'
// }

// const checkIn = function(flightNum, passenger){
//    flightNum = 'LM838';
//    passenger.name = 'Mr. ' + passenger.name;

//    if(passenger.passport === 'AB34343'){
//       alert('Chek In')
//    }else{
//       alert('Wrong passport')
//    }
// }

// // checkIn(flight,jonas);
// // console.log(flight,jonas);


// const newPassport = function(person){
//    person.passport = Math.floor(Math.random() * 10998028);
//    // console.log(person.passport)
// }

// // newPassport(jonas);
// // checkIn(flight, jonas);

// const obj1 = {
//    name:"Layek Miah"
// }
// const objCopy = obj1;
// objCopy.name = 'Jonas My dear'
// console.log(obj1);
// console.log(objCopy)


// const modify = function(value) {
//    value.age = 22;
// }

// let person = {
//    name: "Layek Miah",
//    age : 20
// }

// const updatePerson = {...person};
// updatePerson.age = 22;
// console.log(updatePerson.age);



// First class and higher order Function;


// Callback function

// const oneWord = function(str){
//    return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirst = function(str){
//    const [First, ...others] = str.split(' ');
//    // console.log(First,others)
//    return [First.toUpperCase(), ...others].join(' ')
// }

// // console.log(upperFirst("hello wrold how are you"))
// let myname = "my name is layek maih";
// // Higher order function

// const transfrom = function(str, fn){
//    console.log(`orginal strin: ${str}`)

//    console.log(`Transform string: ${fn(str)}`)

//    console.log(`Transform by : ${fn.name}`)
// }

// transfrom('javascript is the best language', upperFirst);

// transfrom('javascript is the best language', oneWord);

// transfrom('My name is layek Miah Im from sunamgonj', upperFirst);



// js uses callbacks all the time

// const high5 = function(){
//    console.log('👋')
// };

// document.addEventListener('click', high5);

// ['jonas', 'Martha', "Adam"].forEach(high5);


// Return a new fucntion 
// const greet = function(greeting){
//    return function(name){
//       console.log(`${greeting} ${name}`)
//    }
// };

// const greeterHey = greet("Hey");

// greeterHey('Jonas');
// greeterHey("Steven");

// greet("Hello")("Layek ");


// const greetings = greet => name => console.log(`${greet} ${name}`);
// const returnFunc = greetings("Hello");

// greetings("Hi")('Mr. Layek Miah');




// The call and apply Methods;

const lufhansa = {
   airline: "Lufthansa Airline",
   itaCode: "LH",
   bookings: [],
   book(flightNum , name){
      console.log(`${name} booked a seat on ${this.airline} flight ${this.itaCode}${flightNum}`);
      this.bookings.push({flight: `${this.airline} flight ${this.itaCode}${flightNum}`, name})
   }
}
// lufhansa.book(301, "Musaid");
// lufhansa.book(234, "Sorif Uddin");

console.log(lufhansa)

const eurowings = {
   airline: "Eurowings",
   itaCode: "EW",
   bookings:[]
};

// Call methods
const bookFunc = lufhansa.book;
// bookFunc.call(eurowings, 301, "Sorif uddin");
// bookFunc.apply(eurowings, [201, "Sara wiliams"]);
// console.log(eurowings);

bookFunc.call(lufhansa, 201, "Mary Cooper");

const swiss = {
   airline:"Swiss Air Lines",
   itaCode: "LX",
   bookings: [],
}
// bookFunc.call(swiss, 583, "Mandalina")

// Applay methods;

// const flightData = [583, 'George Copper'];
// bookFunc.apply(swiss, flightData);
// console.log(swiss);

// We can use call mehtods instead of apply 

// bookFunc.call(swiss, ...flightData);


// Bind Methods

const bookEW =  bookFunc.bind(eurowings);
const bookLH = bookFunc.bind(lufhansa);
const bookLX = bookFunc.bind(swiss)

bookEW(23, "Steven Williams");

const bookEW23 = bookFunc.bind(eurowings, 23);
bookEW23("Layek Miah");
bookEW23("Mr. Musaid Mama")

// UnderStad with event listener

lufhansa.planes = 300;
lufhansa.buyPlane = function(){
   console.log(this);
   this.planes++;
   console.log(this.planes)
}

document.querySelector('.buy').addEventListener('click', lufhansa.buyPlane.bind(lufhansa));


// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100))
// console.log(addVAT(23));

const addTax = function(rate){
   return function(value){
      return value + value * rate
   }
};

const addVat = addTax(0.23);
console.log(addVat(100))
console.log(addVat(23));

const poll = {
   question: "What is the best language in the world",
   option : ["0: javaScript", "1: python", "2: C++", "3: Rust"],
}
