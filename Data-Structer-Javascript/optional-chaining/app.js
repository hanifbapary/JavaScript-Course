const person = {
   name:"Layek Miah",
   age:22,
   isFollow: true,
   brtc: 2001
}
//for(let per in person){
  // console.log(`${per} = ${person[per]}`)
//}
//for(let i of Object.keys(person)){
   //console.log(i)
//}

const openingHourse ={
   saterday: {
      open:10,
      close:8
   },
   sunday: {
      open:12,
      close: 9
   },
   moneday: {
      open:7,
      close: 3
   }
};

const properties = Object.keys(openingHourse);

console.log(`we are opened on ${properties.length} days`);

const value = Object.values(openingHourse);
console.log(value);

const index = Object.entries(openingHourse);

for(let [key, {open, close}] of index){
   console.log(`On ${key} we open at ${open} and close ${close}`)
}
