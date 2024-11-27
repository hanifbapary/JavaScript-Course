const container=document.querySelector('.container');
const loginLink=document.querySelector('.loginLink');
const signupLink=document.querySelector('.signupLink');
signupLink.addEventListener('click',()=>{
   container.classList.add('active')
})
loginLink.addEventListener('click',()=>{
   container.classList.remove('active')
})