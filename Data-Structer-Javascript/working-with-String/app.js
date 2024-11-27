

// const airPlane = "Tap Air portugal";

// const plane = "A320";

// // console.log(airPlane.slice(0, airPlane.indexOf(' ')));

// // console.log(airPlane.slice(airPlane.lastIndexOf(' ') + 1));

// const checkMiddleSeat = (seat) =>{
//    const s = seat.slice(-1);
//    if(s === "B" || s === "E") console.log("You got the middle seat ")
//       else console.log('You got Lucky')
// };

// // checkMiddleSeat('11B');
// // checkMiddleSeat('11C');
// // checkMiddleSeat('11E');

// const passenger = "jOnas";
// const lowerCase = passenger.toLowerCase();
// const correctCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
// console.log(correctCase);

// const email = 'hello@jonas.io';
// const loginEmail = 'HELLO@JONAS.IO \n';

// const loweLoginEmail = loginEmail.toLowerCase();
// const trimedEmail = loweLoginEmail.trim();
// // console.log(email === trimedEmail);

// // console.log(trimedEmail)
// const normalizeEmail = loginEmail.toLowerCase().trim();
// // console.log(normalizeEmail);

// const priceGB = '288,97&';
// const priceUS = priceGB.replace('&', "$").replace(",",".");
// // console.log(priceGB,priceUS);

// const announcement = 'All passengers coming to boarding door 23. Boarding door 23';

// // console.log(announcement.replace('door',"gate"));
// // console.log(announcement.replaceAll('door',"gate"));

// const checkBaggage = (items)=>{
//    const beggage = items.toLowerCase();
//    beggage.includes('knief') || beggage.includes('gan') ?
//    console.log('You are not allowed'):
//    console.log("Welcome to board")
// };

// // checkBaggage("I have a no any kind of knief or anything else");

// const str = 'a+very+nice+string';
// str.split('+');
// console.log(str.split('+'));

// const [firstName, lastName] = 'Layek miah'.split(' ');

// const newName = ['Mr.',firstName,lastName.toUpperCase()].join(' ');
// // console.log(`Mr. ${firstName} ${lastName.toUpperCase()}`)
// // console.log(newName);

// const upperCase = (names) =>{
//    const name = names.split(' ');
//    const uperName = [];
//    for(let n of name){
//       uperName.push(n.replace(n[0],n[0].toUpperCase()));
//    }
//    console.log(uperName.join(' '))
// }

// upperCase('my name is layek miah i am from bangladesh');


// // Pading It's more important Read it
// const newpassenger = 'Go to the gate 23!';

// console.log(newpassenger.padStart(25 ,"+").padEnd(30,'+'));

// const maskCreditCard = (number)=>{
//    const str = number + '';
//    const last = str.slice(-4);
//    return last.padStart(str.length, '*');
// };

// const myCard = maskCreditCard(12347298635234);
// const herCard = maskCreditCard('3436548658764356576468576');
// console.log(herCard)
// console.log(myCard)

// // Repeat;

// const message = "Bad weather... All depurture delayed...";
// console.log(message.repeat(10));

// const planeInlines = function(n){
//    console.log(`There are ${n} plane in line ${'✈'.repeat(n)}`)
// };

// planeInlines(5);
// planeInlines(10);
// planeInlines(4);

// const chamelCaseMake = (string)=>{
//    const str = string.split('\n');
//    console.log(str)
// }

// const input = document.querySelector('#textArea');

// const button = document.querySelector('#btn');

// button.addEventListener("click", ()=>{
//    const userIn = input.value;
//    const words = userIn.toLowerCase().trim().split('\n');
   
//    for(let word of words){
//       const [first,second] = word.split("_");
      
//       const chamelCase = `${first}${second.replace(
//          second[0],
//          second[0].toUpperCase()
//       )}`
//       console.log(chamelCase)
//    }
// })


const flights = "_Delayed_ Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_ Arrival;hel7439299980;fao93766109;12:05+_ Departure; fao93766109;lis2323639855;12:30;";

// Delayed Deperture FAO TXL (11h25);
//         Arrival BRU FAO (11h45);
// Delayed Arrival HEL FAO (11H05);
//        Departure FA LTS (12h05)

const flightSplit = flights.split('+');

for(let flight of flightSplit){
   const [type, from, to, time] = flight.split(';');
   
   const output = `${type.startsWith('_Delayed') ?
       "🔴": ''} ${type.replaceAll(
         '_', "")} ${from.slice(0,3).toUpperCase()
         } ${to.slice(0,3).toUpperCase()
         } (${time.replace(':','h')})`.padStart(36);
   console.log(output)
}











// const getCode =  str => str.slice(0,3).toUpperCase()
// // console.log(flights.split('+'))
// for(let flight of flights.split('+')){
//    const [type, from , to , time ] = flight.split(';');
   
//    const output = `${type.startsWith('_Delayed') ? '🔴': ''}
//    ${type.replaceAll("_", '')} ${getCode(from)}
//     ${getCode(to)} (${time.replace(":","h")})`;
//    console.log(output);
// }