const orderSet = new Set([
   'pasta', 
   'pizza', 
   'pizza', 
   'ristotto', 
   'pasta', 
   'pizza',
   'barbikueb'
])
console.log(orderSet.size);

// console.log(orderSet.has('pizza'))

// console.log(new Set('string'));

// orderSet.add('garlic')
// console.log(orderSet.has('bread'));
// orderSet.add('Hello');
orderSet.add('tomato')

orderSet.delete('barbikueb')
// orderSet.clear(); // Its use for clear all the Set value
console.log(orderSet);

for(let order of orderSet) console.log(order);

const staff = ["waiter","chef","waiter","Manager","chef","waiter"];

console.log(staff);

const newSet = new Set(staff);// this is an Set of staff array;

// But when we will want that an new array with unuque value;
const updateStaff = [...new Set(staff)]
console.log(updateStaff);

const emptySet = new Set();
emptySet.add('Hello')
emptySet.add('Hello My dear')
emptySet.add('what')
console.log(emptySet);

const sets = new Set(['a','b','c']);

let text = "";

if(sets.has('d')) console.log('We have been the d element')
else console.log("We are not able to find it");







