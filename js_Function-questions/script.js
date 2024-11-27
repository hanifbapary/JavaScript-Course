//* 1. Cahrecter counter function;
//* 2. word counter function;
//* 3. Number reverse function;
//* 4. palindrom checking function;
//* 5. Alpha order function;
//* 6.wirte a js function That a string first word uppercase?
//* 7.Creat a function to find largest word in a string
//* 8. Creat a js function for count number of vowel in a string?
//* 9. Check a number is prime or not?
//* 10. Check data type by using function?
//* 11. Write a JavaScript function which returns the n rows by n columns identity matrix.
// Qna 1:
// wiht spaces
// function CahrCounter(str){
//    return str.length
// }
// console.log(CahrCounter("Hello js how are you"));

// //without spaces
// function charcountWithoutspaces(str){
//    return str.replace(/\s/g, "").length
// }
// console.log(charcountWithoutspaces("Hello js how are you"));

//*Qna 2: word counter function
// const text="My Name is           layek miah I'm the owner of my travel bussnes";

// const wordCounter=(text) =>{
//    const words= text.trim().split(/\s+/);
//    return words.length
// }
// console.log(wordCounter(text))

//*Qna 3: Numbers Reverse function
// function numReverse(num){
//    num += '';
//    return num.split("").reverse().join("");
// }
// console.log(numReverse(34223));
 
//* Qna 4: Palindrom checking function
// const palindrom=(str)=>{
//    str += '';
//    str = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
//    if(str === str.split('').reverse().join('')){
//       console.log("Yes it is a palindrom word")
//    }else{
//       console.log("NO it is not a palindrom word")
//    }
// }
// console.log(palindrom("Level"))

//*Qna 5; Aplpha order function
// function alphaoerder(str){
//    return str.toLowerCase().split('').sort().join('')
// }
// console.log(alphaoerder("My name is layek maihj"))

//*Qna 6: wirte a js function That a string first word uppercase
// const uppercase=(str) =>{
//    let arry=str.split(' ');
//    let finalArry=[];
//    for(let i of arry){
//       finalArry.push(i.charAt(0).toUpperCase() + i.slice(1))
//    }
//    return finalArry.join(' ')
// }
//  console.log(uppercase("the chair is barown"))

//* 7.Creat a function to find largest word in a string?

// function findLearge(str){
//     let word= str.split(' ');
//     let longest="";

//     for(let i of word){
//         if(word.length > longest.length){
//             longest = i
//         }
//     }
//     return longest
// }
// console.log(findLearge("Layek Miah is the owner of a travesls"))

// const find_Learge=(str)=>{
//     let array=str.match(/\w[a-z]{0,}/gi);
//     let longest=[0];

//     for(let i = 1; i < array.length; i++){
//         if(array[i].length > longest.length){
//             longest = array[i]
//         }
//     }
//     return longest
// }
// console.log(find_Learge("I love Javascript to make a website"))

//* 8. Creat a js fucntion for count number of vowel in a string?
// const vowelCounter=(string)=>{
//     string = string.toLowerCase()
//     let count=0;
//     for(let str of string){
//        if(str === "a" ||
//           str === "e" ||
//           str === "i" ||
//           str === "o" ||
//           str === "u"
//        ){
//           count ++
//        }
//     }
//     return count
//  }
//  console.log(vowelCounter("The quick brown fox"));

//* 9. Check a number is prime or not? //

// function isPrime(num){
//     if(num <= 1) return false;
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0) return false
//     }
//     return true
// }
// console.log(isPrime(17))

//* 10. Check data type by using function?
// function typeCheck(val){
//     return typeof val
//  }
//  console.log(typeCheck(function(){}))

//* 11. Write a JavaScript function which returns the n rows by n columns identity matrix.

// function makeMatrix(num){
//    let Martrix=[]

//    for(let i = 0; i < num; i++){
//       let row=[];
      
//       for(let j =0; j < num; j++){
//          row.push(i === j ? 1: 0);
//       }
//       Martrix.push(row)
//    }
//    return Martrix
// }
// console.log(makeMatrix(5))

//* 12. 