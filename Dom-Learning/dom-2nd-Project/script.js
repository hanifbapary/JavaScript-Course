"use strict";

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal')
const openModalBtns= document.querySelectorAll('.show-modal');
// console.log(openModalBtns)
const openmodal = ()=>{
   modal.classList.remove('hidden')
   overlay.classList.remove('hidden')
}
for(let i = 0; i < openModalBtns.length; i++){
   openModalBtns[i].addEventListener('click',openmodal)
}

const closeModal =()=>{
   modal.classList.add('hidden')
   overlay.classList.add('hidden')
}
closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// document.addEventListener('keydown', (e)=>{
//    if(e.key === 'Escape'){
//       if((!modal.classList.contains('hidden'))){
//          closeModal();
//          console.log(e.key)
//       }
//    }
// })
document.addEventListener('keydown', (e)=>{
   if(e.key === 'Escape' && !modal.classList.contains('hidde')){
         closeModal();
   }
})
