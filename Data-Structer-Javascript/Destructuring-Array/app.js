
// // 'use strict';
// const arr = [1,2,3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x)


// // Recevied 2 return value from Function
// const [starter, main] = resturent.order(3, 0);
// console.log(starter, main)

// Destructure from the arrays
// const [first,second] = resturent.categroies;

// // Destructer from the arrys But from fist middle or anywher 
// const [one, , three] = resturent.categroies;

// // Switch categories
// let [main, , secondary] = resturent.categroies;

// This waya somoe dificult We have easy waya in the below
// const temp = main;
// main = secondary;
// secondary = temp;

// Esayest waya to switch We alawes use this waya to switching variable
// we can switch by functin methods inside object
[main, secondary] = [secondary, main]
console.log(main,secondary)

// Nested Array
// Important note that const [a, b, c] it is a one kind of variable
// const nested = [2, 4, [5, 6]];

// it was very easy but I if want to destructer all indidual value What can i do We Destructer inside destrucher

// const [i, , j] = nested;

// const [a, , [c, d]] = nested;
// console.log(a, c , d)

// Default values
// const [a, b , c] = [8, 9];
// // actual  Default values
// const [e= 1, f= 1 , g= 1] = [8, 9];
// It uses when we take data from api
// console.log(e, f , g);

// // Object Destructuring Topic




// resturent2.orderDelivery({
//    time:"22:30",
//    address:'via dol sole, 21',
//    mainIndex:2,
//    starterIdx:2
// })











// const  {name, openingHourse, categroies} = resturent;
// console.log(name,openingHourse, categroies);

// const {name: resturentNaem, openingHourse: hourse, categroies: tags} = resturent;
// console.log(resturentNaem)

// Nested Object
// const {saterday: {open,close}} = openingHourse;
// const {saterday: {open:o,close:p}} = openingHourse;
// console.log(o, p)
// console.log(open, close)
// // Destructur values
// const {menu = ['Layek'], startMenu: starter = []} = resturent;
// // console.log(menu, starter)

// // Mutating variables
// let a = 111;
// let b = 999;

// const obj ={a: 23, b: 7, c: 14};

// ({a, b} = obj);
// console.log(a,b)

