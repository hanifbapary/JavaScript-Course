'use strict';

const arr = [8,3,5,7];

const badNewArr = [1,3, arr[0], arr[1], arr[2],arr[3]];
// console.log(badNewArr);

const newArr = [4,5,2, ...arr];
// console.log(newArr);
// console.log(...newArr);

const resturent = {
   name: 'Classico italinio',
   location: 'via angelo tavati 23 Firenze Italy',
   categroies: ['Itialian', 'pizzeria', 'vegtrain', 'organic'],
   startMenu:['porota','small fish','Mutton','beef','chicken','gril','nan'],
   mainMenu: ['pizza', 'pasta', 'risoto'],
   order: function(starterIdx, mainIdx){
      return [this.startMenu[starterIdx] , this.mainMenu[mainIdx]]
   }
};

// It give me 2 array of one
const newMenu = [resturent.mainMenu, 'Elisha', 'egg'];
// It give us a new arry with that element
const newMenu2 = [...resturent.mainMenu, 'Elisha', 'egg'];
// console.log(newMenu)

// Two Important use case of spread operator;

// 1. shallow copyes of array
const mainMenuCopy = [...resturent.mainMenu]; // just it we creat a copy of main

// 2. Mearg 2 array together;

const menu = [...resturent.startMenu, ...resturent.mainMenu];
// console.log(menu);

// for(let i of menu){
//    console.log(i)
// }

// Iterables  Arrays, string, maps , sets, Not Object;
const str = 'Layek Miah';
const arr1 = [...str, 'm', 'h'];
//console.log(arr1);
//console.log(...str)
//console.log(`${...arr} hello`) // It dosen't work we can't spread a string i a template littarls;

// Create funciton for Explain Details of Spreat Operator;
const resturent2 = {
   name: 'Classico italinio',
   location: 'via angelo tavati 23 Firenze Italy',
   categroies: ['Itialian', 'pizzeria', 'vegtrain', 'organic'],
   startMenu:['porota','small fish','Mutton','beef','chicken','gril','nan'],
   mainMenu: ['pizza', 'pasta', 'risoto'],
   order: function(starterIdx, mainIdx){
      return [this.startMenu[starterIdx] , this.mainMenu[mainIdx]]
   },
   orderPasta: function(ing1, intg2, intg3){
      console.log(`Take your delcius pasta with ${ing1}, ${intg2} and ${intg3}`)
   }
};



// We can creat an array take by input from prompt
// here is Example
//const ingredients = [prompt("Write a name of food"), prompt("Another name of fav food"), prompt("Another Name of fav food")];
// console.log(ingredients);
//const pasta = resturent2.orderPasta(ingredients);
//console.log(pasta);

// In modern javascript Es6 Spread work also object Even though object are not iterbales;

const newResturent = {
   ownerName: 'Layek Miah',
   ...resturent,
   city: 'Sunamgonj'
}
console.log(newResturent);

