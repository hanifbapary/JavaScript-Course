// const game = {
//    team1: 'Bayern Munich',
//    team2: 'Borrussia Dortmund',
//    players: [
//    [
//    'Neuer',
//    'Pavard',
//    'Martinez',
//    'Alaba',
//    'Davies',
//    'Kimmich',
//    'Goretzka',
//    'Coman',
//    'Muller',
//    'Gnarby',
//    'Lewandowski',
//    ],
//    [
//    'Burki',
//    'Schulz',
//    'Hummels',
//    'Akanji',
//    'Hakimi',
//    'Weigl',
//    'Witsel',
//    'Hazard',
//    'Brandt',
//    'Sancho',
//    'Gotze',
//    ],
//    ],
//    score: '4:0',
//    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//    'Hummels'],
//    date: 'Nov 9th, 2037',
//    odds: {
//    team1: 1.33,
//    x: 3.25,
//    team2: 6.5,
//    },
// };

// for(let [key, valu] of Object.entries(game.scored)){
//    console.log(`Goal ${Number(key) + 1}: ${valu}`)
// }

// let totalScore = 0;
// let avgScore = 0;
// for(let [, value] of Object.entries(game.odds)){
//    totalScore += value
//    // avgScore = totalScore / 
// }
// console.log(totalScore,avgScore)

// const oddNum = game.odds
// let allScore = 0;
// let oddCount =0;
// for(let odd in oddNum){
//    allScore += oddNum[odd];
//    oddCount++;
// }
// const averageScore = allScore / oddCount;
// console.log(averageScore);

// for(let key in oddNum){
//    const teamName = key === 'team1'? game.team1 : key === 'team2' ? game.team2 : 'draw';
//    console.log(`odd of ${teamName === 'draw'? 'draw': 'victory ' + teamName}: ${oddNum[key]}`)
// }

// const [players1, players2] = game.players;

// const [gk, ...feildPlayer] = players1;
// console.log(gk, feildPlayer);

// const allPlayers = [...players1, ...players2];

// console.log(allPlayers);

// const players1Final = [...players1,'Thiago', 'Coutinho','Perisic'];
// console.log(players1Final);

// const {team1, x: draw, team2} = game.odds;

// const printGoals = (...players)=> {
//    console.log(`${players.length} goals were scored`)
// }

// printGoals( 'Davies', 'Muller', 'Lewandowski' , 'Kimmich');

// printGoals('Lewandowski' , 'Kimmich');

// printGoals(...game.scored);

// team1 < team2 && console.log('team 1 is more likely to win');
// team1 > team2 && console.log('team 2 is more likely to win');

// const obj = {
//    name:"Layek Miah",
//    age:22,
//    isFollow: true
// }

// const person ={
//    intro: obj,
//    villiage: "Khudirai",
//    town:"Sunamgonj",
//    friends:{
//       first:"Salman",
//       second:"Naim",
//       third:"Bul bul"
//    },
//    bio(){
//       console.log(`My name is ${this.intro.name}`)
//    }
// }

// person.bio()
// const user = {
//    profile:{

//    }
// };

// const myObj ={
//    name: 'Rubia kanom',
//    village : "JoyShiddi",
//    brothers : 3,
//    sister : 2
// }

// for(let [key , value] of Object.entries(myObj)) console.log(key,value);

// for(let obj in myObj){
//    console.log(obj, myObj[obj])
// }


// const orderSet = new Set([
//    'pizza',
//    'pasta',
//    'pizza',
//    'pasta',
//    'murgi',
//    'murga',
//    'murgi'
// ]);
// console.log(orderSet)
// orderSet.delete('pasta')
// console.log(orderSet);

// console.log(orderSet.has('pizzer'));

// const newColOfSet = new Set();

// newColOfSet.add('satarday');
// newColOfSet.add("Sunday");
// newColOfSet.add("Monday");
// newColOfSet.add('Tuseday');

// newColOfSet.delete('satarday')
// console.log(newColOfSet);

// for(let set of newColOfSet) console.log(set);

// const staff = ['waiter','chefe','waiter','manager','chef','manager'];

// const staffSet = new Set(staff);

// const updateStaff = [...new Set(staff)];
// console.log(updateStaff);

const array = ['waiter','chefe','waiter','manager','chef','manager'];

const maps = new Map([
   ["apple",500],
   ["orange",350],
   ["pinaple", 400],
   ["mango", 200]
]);

maps.set('apple', 380);
// console.log(maps);

// console.log(maps.get("apple"));

const rest = new Map();

rest.set('Name','Layek Miah');
rest.set('age', 22);
rest.set('village', "khudirai")
rest.set('menu', ["Beef",'chicken','Mutton','tikka']);
rest.set(true, 'We are open');
rest.set(false, 'We are now close');
rest.set(null, 'thre is no value')
rest.delete('age');
// rest.clear()
// console.log(rest.size)

// console.log(rest.get('menu'));
// console.log(rest.get('village'));
// console.log(rest.get(true));

// console.log(rest.has('Name'));

const quize = new Map([
   ['question', "What is the best programing language in the world"],
   [1, "C"],
   [2,"Java"],
   [3, "Python"],
   [4, 'Javascript'],
   ['correct', 4],
   [true, 'correct'],
   [false, 'Try again']
]);

// console.log(quize.get('question'))
for(let [key , value] of quize){
   if(typeof key === 'number'){
      //  console.log(`Answer ${key}: ${value}`);
   }
}
// const answer = Number(prompt("Your Answer"));

// console.log(quize.get(quize.get('correct') === answer))

const gameEvents = new Map([
   [17, '⚽ GOAL'],
   [36, '� Substitution'],
   [47, '⚽ GOAL'],
   [61, '� Substitution'],
   [64, '� Yellow card'],
   [69, '� Red card'],
   [70, '� Substitution'],
   [72, '� Substitution'],
   [76, '⚽ GOAL'],
   [80, '⚽ GOAL'],
   [92, '� Yellow card'],
]);


const events = [...new Set(gameEvents.values())];
gameEvents.delete(64)
// console.log(events)

// padding ;

const name = "Layek";

// console.log(name.padStart(10,'x').padEnd(15, 'P'));

const maskCreditCard = function(number){
   const str = number + '';
   const last = str.slice(-4);
   // console.log(last.padStart(str.length, '*'));
};

// maskCreditCard(4623729373);
// maskCreditCard(362378238763);
// maskCreditCard('8736876486871268745821648763982');


const maskCreditCard2 = function(number){
   const str = String(number);
   const first = str.slice()
   // console.log(first.padEnd(str.length,'*'));
}
maskCreditCard2(367374528763);

const chamelCase = function(variable){
   const arr = variable.replace('_', ' ').split(' ');
   let chamel = [];
   for(let cases of arr){
      chamel.push(cases[0].toUpperCase() + cases.slice(1));
   }
   return chamel.join('')
}
 
const variableNew = chamelCase("underscore_case");
// console.log(variableNew)


// const form = document.querySelector('#button');
// const textArea = document.querySelector('#var');



// form.addEventListener('click', (e)=>{
//    e.preventDefault();
//    const value = textArea.value;
//    const rows = value.split('\n');
//    for(let [i,row] of rows.entries()){
//       const [first, second] = row.toLowerCase().trim().split('_')
//       const output = `${first}${second.replace(
//          second[0],
//          second[0].toUpperCase()
//       )}`
//       console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//    }
// })


