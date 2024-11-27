// 


// const mapWithArray = new Map([
//    ['apples',500],
//    ['Pinaple',300],
//    ['orange',600,'Milk',30]
// ]
// )
// console.log(mapWithArray)

// const rest = new Map();

// rest.set('name',"Layek Miah");
// rest.set("age",22),
// rest.set("District","sunamgonj");

// rest.set("categories",['chicken','Beef','tandori','gril'])
// .set('Open',11)
// .set('close',23)
// .set(true,"We are open")
// .set(false,'We are close in this time')


// console.log(rest.get(false))
// console.log(rest.get(true))
// console.log(rest.get('Open'))
// console.log(rest.get('close'));


// const time = 8;

// console.log(rest.get(time > 'Oepn' && time < 'close'));

// console.log(rest.has('Open'));

// rest.delete("age");
// console.log(rest)

// Map Mathods some uses;

const question = new Map([
   ['question',"What is the best programing language in the world"],
   [1,'C'],
   [2,"Java"],
   [3,"JavaScript"],
   ['correct',3],
   [true, 'correct'],
   [false,'Try again'],
]);



// console.log(question)

// Convert object to map

const person = {
   name:'Layek Miah',
   age:22,
   villiage:"Khudirai",
   dream:"Enginer"
}
// console.log(person);

const objMap = new Map(Object.entries(person));

// console.log(objMap);

for(const [key, value] of objMap){
   // console.log(value)
}

for(const [key , value] of Object.entries(person)){
   // console.log(value)
}

// console.log(question.get('question'))
// for(const [key, value] of question){
//    if(typeof key === 'number'){
//       console.log(`answer ${key}: ${value}`)
//    }
// }

// const answer = Number(prompt('Your answer'));

// console.log(question.get(question.get('correct') === answer))

// Convert map to array 

const mapToArr = [...question];
console.log(mapToArr);

// Object to map
// const person = {
//    name: "Harami",
//    village: "sinsapur",
//    age:22,
// }
// const newMap = new Map(Object.entries(person));
// console.log(newMap)