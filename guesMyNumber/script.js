"use strict"

// const  qna=document.querySelector(".number")
// const gameNuber=Math.trunc(Math.random() * 20) + 1;
// qna.textContent=gameNuber;
// const check=document.querySelector('.check');
// const message=document.querySelector(".message");
// const score=document.querySelector('.score');
// let randomscore = 20;


// check.addEventListener('click', ()=>{
//    const guess=Number(document.querySelector(".guess").value);
//    // console.log(guess, typeof guess)
//    if(!guess){
//       message.textContent='⛔ No Number'
//    }else if(guess === gameNuber){
//       message.textContent='🎉 correct Number';
//       randomscore++;
//       score.textContent=randomscore;
//    }else if(guess > gameNuber){
//       if(randomscore > 1){
//          message.textContent='👋 To High'
//          randomscore--;
//          score.textContent= randomscore
//       }else{
//          message.textContent='🤦‍♀️ You lost the game'
//          score.textContent=0;
//       }
//    }else if (guess < gameNuber){
//       if(randomscore > 1){
//          message.textContent='👋 To Low'
//          randomscore--;
//          score.textContent= randomscore
//       }else{
//          message.textContent='🤦‍♀️ You lost the game'
//          score.textContent=0;
//       }
//    }
// })

// const again = document.querySelector('.again');
// again.addEventListener('click', () => {
//     randomscore = 20;
//     score.textContent = randomscore;
//     gameNuber = Math.trunc(Math.random() * 20) + 1;
//     qna.textContent = '?';
//     message.textContent = 'Start guessing...';
//     document.querySelector('.guess').value = '';
// });

// Chat gpt Code
"use strict"

// Select elements
const qna = document.querySelector(".number");
let gameNumber = Math.trunc(Math.random() * 20) + 1;
qna.textContent = gameNumber; // Initially show "?"

const body=document.querySelector('body');

const check = document.querySelector('.check');
const score = document.querySelector('.score');
let randomscore = 20;

const displayMsg=(message)=>{
   document.querySelector('.message').textContent= message;
}

// Check button event listener
check.addEventListener('click', () => {
   const guess = Number(document.querySelector(".guess").value);

   // If no number entered
   if (!guess) {
      displayMsg('⛔ No Number');

   // If the guess is correct
   } else if (guess === gameNumber) {
      displayMsg('🎉 Correct Number!');
      qna.textContent = gameNumber; // Display the correct number
      randomscore++; // Increase the score
      score.textContent = randomscore;
      body.style.backgroundColor='#42bf1e';
      // body.style.color='black'
      qna.style.width='30rem';
      qna.style.borderRadius='30px';
   // If the guess is too high
   }else if(guess !== gameNumber){
      if (randomscore > 1) {
         displayMsg(guess > gameNumber? '📈 too high':'📉too low');
         randomscore--;
         score.textContent = randomscore;
      } else {
         displayMsg('💥 You lost the game');
         score.textContent = 0;
      }
   }
});

// "Again!" button event listener
const again = document.querySelector('.again');
again.addEventListener('click', () => {
   randomscore = 20; // Reset the score
   score.textContent = randomscore;
   gameNumber = Math.trunc(Math.random() * 20) + 1; // Regenerate the random number
   qna.textContent = '?'; // Reset the number display
   displayMsg ('Start guessing...'); // Reset the message
   document.querySelector('.guess').value = ''; // Clear the input field
   body.style.backgroundColor='black'
});
