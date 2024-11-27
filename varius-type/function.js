"use strict";
// function fruitProcesor(apples,oranges){
//    const juce=`Juice with ${apples} apples and ${oranges} oranges`;
//    return juce
// }
// const appleJuce=fruitProcesor(4, 9);
// console.log(appleJuce)

// const orangeJuce=fruitProcesor(5,3);
// console.log(orangeJuce)

// console.log(fruitProcesor(10,70))

// console.log(calcAge(2002))
// function calcAge(birthYear){
//    return 2024 - birthYear;
// }
// console.log(caclAge2(1895))
// const caclAge2=function(birthYear){
//    return 2024 - birthYear
// }
// const myAge=caclAge2(1991);
// console.log(myAge)

// I can't call expression function before initialization ;

// Arrow Function
// function cutFuit(fruit){
//    return fruit * 4
// }
// function fruitProcesor(apples,oranges){
//    const applePeices= cutFuit(apples);
//    const orangpeices=cutFuit(oranges)
//    return `Juice with ${applePeices} a peice of apples and ${orangpeices} a peice of oranges`;
// }
// console.log(fruitProcesor(10,3))

// Q1:
// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223

// function reverNumber(num){
//    num = num + "";
//    const output=num.split("").reverse().join('');
//    return output
// }
// console.log(reverNumber(32243))

// Qna2:
// Write a JavaScript function that checks whether a passed string is a palindrome or not?

// let checkPalindrom= (str)=>{
//    str = str + ''
//    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

//    return str === str.split("").reverse().join("");
// }
// console.log(checkPalindrom("level_"))

// function order(str){
//    return str.split("").sort().join("");
// }
// console.log(order("order"))


// const calcAge=function (year){
//    return 2024 - year
// }
// const retarmentCal=function (birthYear, firstname){
//    const age = calcAge(birthYear)
//    const retare= 65 - age;
//    if(retare > 0){
//       console.log(`${firstname} is retire in ${retare} years`)
//       return retare
//    }else{
//       console.log(`${firstname} has already retire 🎉`)
//       return -1
//    }
// }
// retarmentCal(1955,"Jonas")

//Qna Part 2 Qna 1:

// 

function wordCount(string) {
   const words = string.trim().split(/\s+/);
   return words.length;
 }
 
 // Example usage
const text ="In the digital age, answers are just a click away. This ease of access discourages deep thought and patience. Instead of engaging with complex concepts or spending time solving problems, we often opt for quick, surface-level solutions. This dependence on the Internet undermines our problem-solving skills and ability to engage with ideas at a deeper level."
 const count = wordCount(text);
 console.log(`Word count: ${count}`);
 