'use strict';

// console.log(3 || 'jonas');
// console.log('jonas' || 3);

// use any data type ; return any data taype; It's called short-circuting
const str = "" || "Layek";
// console.log(str);

// console.log(undefined || null);

let num = 0;

const orr = num || 5;
const nulish = num ?? 3;
// console.log(nulish);

// Logical asignment operator ;
const rest1 = {
   name:'chapri',
   numGust : 0
}
const rest2 = {
   name: "La pizza",
   owner: "Layek Miah"
}

// rest1.numGust = rest1.numGust || 10;
// rest2.numGust = rest2.numGust || 10;

// rest1.numGust ||= 10; // This is called logical asignment
// rest2.numGust ||= 10;

rest1.numGust ??= 10; // Nulish coalecing asignment opearator;
rest2.numGust ??= 10;

rest2.owner = rest2.owner && '<anonymous>'
console.log(rest1, rest2)

