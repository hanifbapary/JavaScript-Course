// const years=[2001 , 2004 , 1998, 1970];

// const heros=["Ironman","Superman","Hitman","Arman","jarman","karman"];

// heros.push("Layek")
// heros.unshift("MyName");
// heros.shift()
// heros.pop()
// const arrSlice=heros.slice(1, 3)
// heros.splice(2, 0, "Balman")
// const arrStr=heros.toString()
// console.log(arrStr)
// console.log(heros)

// console.log(heros.includes('jarman'))

// const strudentMark=[85 , 97 , 44 , 37, 76 , 60];
// let sum=0;
// for(let i of strudentMark){
//    sum += i
// }
// const avgMark=sum / strudentMark.length;



// const proPrice=[250 , 654, 360 ,450, 258];
// const offerPrice=[]

// for(let i = 0; i < proPrice.length; i++){
//    let offer = proPrice[i] * 0.1;
//    proPrice[i] -= offer
// }
// console.log(proPrice)
  

// function caclTip(bill){
//    return bill >= 50 && bill <= 300? bill * .15: bill * .2;
// }

// const bills =[125, 555, 44];

// const tips=[caclTip(bills[0]),caclTip(bills[1]) , caclTip(bills[2])];
// console.log(bills, tips)

// const totalBills=bills + tips;
// console.log(totalBills)

// const Layek={
//    firstName:"Layek",
//    lastName:"Miah",
//    age:2037 - 2001,
//    job:"Developer",
//    freinds:["Michel","Jonas","bunas"]
// }
// Layek.lastName = "Ahmed"
// Layek.fatherName="Sabaz Ali";
// Layek.motherName="Nurzahan Begum"
// console.log(Layek)

// const intrestedIn=prompt("What you want know about layek Miah jus wirte of this , firstName,lastName, age,job, freinds");

// console.log(Layek[intrestedIn])

// const Layek={
//    firstName:"Layek",
//    lastName:"Miah",
//    job:"Developer",
//    birthyear:1991,
//    isDrivinglicense:false,
//    freinds:["Michel","Jonas","bunas"],
//    caclcAge:function(){
//     this.age = 2024 - this.birthyear;
//     return this.age;
//    },
//    // caclcAge:function(){
//    //    return 2024 - this.birthyear
//    // }
//    getSummery: function(){
//       return `${this.firstName} ${this.lastName} is a ${this.caclcAge()} years old ${this.job} and he has ${this.isDrivinglicense? "a": "no"} driving license.`
//    }
// }

// console.log(Layek.getSummery())

// const mark={
//    firstName:"Mark",
//    lastName:"Miller",
//    mass:10,
//    height:2,
//    caclBMI:function(){
//       return this.mass / this.height ** 2;
//    }
// }
// const jhon={
//    firstName:"Jhon",
//    lastName:"Smith",
//    mass:78,
//    height:1.95,
//    caclBMI:function (){
//       return this.mass / this.height ** 2
//    }
// }

// if(mark.caclBMI() > jhon.caclBMI()){
//    console.log(`Mark's BMI(${mark.caclBMI()}) is heigher than Jhons(${jhon.caclBMI()})`)
   
// }else if(jhon.caclBMI() > mark.caclBMI()){
//    console.log(`Jhon's BMI(${jhon.caclBMI()}) is heigher than Marks(${mark.caclBMI()})`)
// }

// const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
// const tips=[];
// const totals=[]

// function caclTip(bill){
//   return bill >= 50 && bill <= 300? bill * .15: bill * .2;
// }
// for(let i of bills){
//    const tip=caclTip(i);
//    tips.push(tip)
//    totals.push(tip + i)
// }
// console.log(bills,tips,totals)


// function caclcAbg(arr){
//    let sum = 0;
//    for(let i of arr){
//       sum += i;
//    }
//    return sum / arr.length
// }
// console.log(totals,caclcAbg(totals))




// const birthyear=[1991, 2007, 1969, 2020];
// const ages=[]
// for(let i of birthyear){
//    ages.push(2037 - i)
// }

// console.log(ages)


// function checkVowel(str){
//    newstr=str.toLowerCase()
//    let count=0;
//    for(let i = 0; i < newstr.length; i++){
//       if(
//          newstr[i] === "a" ||
//          newstr[i] === "e" ||
//          newstr[i] === "i" ||
//          newstr[i] === "o" ||
//          newstr[i] === "u"
//       ){
//          count++
//       }
//    }
   
//    return count
// }

// console.log(checkVowel(""));

// const heros=["Ironman","spiderman","hiteman","amirman"];
// const price=[200,564,21,32]

// const myFunction=price.map((val)=>{
//   return  val * val
// })

// console.log(myFunction)

// console.log(typeof(null))
