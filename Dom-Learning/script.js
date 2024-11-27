// const title=document.getElementById('title');
// title.setAttribute('class','test heading')
// title.style.backgroundColor="green"
// title.style.padding='20px';
// title.style.color='#fff';
// title.style.borderRadius='10px'

// query selector uses
// document.querySelector("p")

// const myUl=document.querySelector('ul')
// myUl.style.border='2px solid green';
// myUl.style.padding='10px';
// myUl.style.listStyle='inside';

// const turnGreen=myUl.querySelector('li');
// turnGreen.style.backgroundColor='green';
// turnGreen.style.listStyle='none';
// turnGreen.style.padding='10px';
// turnGreen.style.borderRadius='10px';
// turnGreen.innerText="First item"

//querySelectorAll uses;

// const turnRed= document.querySelectorAll('li');

// const nodeToArry=Array.from(turnRed) // node to arry done

//We can run only forEach loop in nodelist If i want to use Map or anything else I need to convert it array first;

// turnRed.forEach((val)=>{
//    val.style.backgroundColor='green';
//    val.style.padding='10px 20px';
// });

// nodeToArry.map((val)=>{
//    val.style.backgroundColor='green';
//    val.style.padding='10px 20px';
// });

// turnRed.setAttribute('class','list')

// const listItem=document.getElementsByClassName('list-item');

// HTML Collection convert to arry
// const htmlColToArray=Array.from(listItem);
// console.log(htmlColToArray)

//It dosen't work becasue html collection don't have any type of loop function We need to convert it arry then we can run loop in this html collection
// listItem.forEach((val)=>{
//    console.log(val)
// })

//* How to creat Element in Dom

// const parent=document.querySelector('.parent');

// for(let i = 0; i < parent.children.length; i++){
//    console.log(parent.children[i].innerHTML)
// }

// parent.children[1].style.color='red';
// parent.children[2].style.fontSize='30px'

// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

// const dayOne=document.querySelector('.day');
// console.log(dayOne)

//We can acces parent Element from child ;
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

// console.log("NODES:", parent.childNodes)

// const div = document.createElement("div");
// console.log(div);
// div.className = "main";
// div.id = "myId";
// //div.innerText="It is one of the most beautiful countries in the world";
// const addText = document.createTextNode(
//   "It is one of the most countries in the world"
// );
// //Function making by created new Element Mind it
// div.setAttribute("title", "genarate title");
// div.appendChild(addText);
// div.style.backgroundColor = "green";
// div.style.padding = "20px";

// document.body.appendChild(div);


//* Edit and Remove Element







// My practice
// const myUl=document.querySelector('.list-child');
// const parent=myUl.parentElement;

// const newLi=document.createElement('li');
// const addText=document.createTextNode("Java");
// newLi.appendChild(addText)
// parent.appendChild(newLi)


// My making list ading function
// function addNewList(add){
//    const parent=document.querySelector('.language');
//    const addNewali=document.createElement('li');
//    const addText= document.createTextNode(add)
//    addNewali.appendChild(addText);
//    parent.appendChild(addNewali)
// }
// addNewList("python")
// addNewList("java")
// addNewList("Mongo")
// addNewList("laeyk maih")

// now easy waya to add lsit in element;
// function language(addlang){
//    const li = document.createElement('li');
//    li.innerHTML= addlang;
//    document.querySelector(".language").appendChild(li)
// }
// language("python")
// language("Java");
// End my practice;

const optimizeAdd=(addlang)=>{
   const li = document.createElement("li");
   // li.className='list-item'
   li.appendChild(document.createTextNode(addlang));
   document.querySelector(".language").appendChild(li)
   // console.log(li)
}
optimizeAdd("Python")
optimizeAdd("Mongo")
optimizeAdd("C++")

//value edit
const secondLang=document.querySelector('li:nth-child(2)');
// secondLang.innerHTML='mongo db'

//another good waya;
const newLi=document.createElement('li');

secondLang.replaceWith(newLi)

 const firstLang=document.querySelector('li:first-child');
 console.log(firstLang)
 firstLang.outerHTML="<li>TypeScirpt</li>"


 // Remove
 const lastLang=document.querySelector('li:last-child');
 lastLang.remove()