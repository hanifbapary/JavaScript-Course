// 'use strict'
// const body = document.querySelector('body')
// const guessStyle=document.querySelector('.guess')
// const checkBtn = document.querySelector('.check');
// const message = document.querySelector('.message');
// const score = document.querySelector('.score');
// const resultNumber = document.querySelector('.number');
// let gameNumber = Math.trunc(Math.random() * 20) + 1;
// let randomscore = 20;
// // resultNumber.textContent=gameNumber;
// let highScore = 0;

// checkBtn.addEventListener('click', ()=>{
//    const guess=Number(document.querySelector('.guess').value);
//    // if there is no input value
//    if(!guess){
//       message.textContent='⛔ No Number'
//       // if number is correct
//    }else if(guess === gameNumber){
//       message.textContent='🎉 correct Number'
//       randomscore++;
//       score.textContent=randomscore
//       resultNumber.textContent=guess;
//       body.classList.add('body-winnig-color');
//       guessStyle.style.backgroundColor='transparent'
//       resultNumber.style.width='150px'
//       checkBtn.disabled=true;
//       checkBtn.style.cursor='not-allowed'
//       if(randomscore > highScore){
//          highScore = randomscore;
//          document.querySelector('.highscorenum').textContent=highScore;
//       }
//       // if the guss to high
//    }else if(guess > gameNumber){
//       if(randomscore > 1){
//          message.textContent='📈 too high'
//          randomscore--;
//          score.textContent=randomscore;
//       }else{
//          message.textContent='🤦‍♂️ You lost the game'
//          score.textContent=0;
//          checkBtn.disabled=true;
//          checkBtn.style.cursor='not-allowed'
//       }
//       // if the guess to low
//    }else if(guess < gameNumber){
//       if(randomscore > 1){
//          message.textContent=" 📉 to low"
//          randomscore--;
//          score.textContent=randomscore;
//       }else{
//          message.textContent='🤦‍♂️ You lost the game'
//          score.textContent=0;
//          checkBtn.disabled=true;
//          checkBtn.style.cursor='not-allowed'
//       }
//    }
// })

// //Again paly button 
// const againBtn=document.querySelector('.again');

// againBtn.addEventListener('click', ()=>{
//    resultNumber.textContent= '?'
//    randomscore = 20;
//    score.textContent= randomscore;
//    message.textContent='Start guessing....';
//    gameNumber=Math.trunc(Math.random() * 20) + 1;
//    document.querySelector('.guess').value= '';
//    body.classList.remove('body-winnig-color')
//    resultNumber.style.width='100px'
//    checkBtn.disabled=false;
//    checkBtn.style.cursor='pointer'
   
// })

'use strict';

//Dom Elements ;
const body = document.querySelector('body');
const resultNum = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highScoreDisplay = document.querySelector('.highscorenum');
const againBtn = document.querySelector('.again');

// Initial variables
let gameNumber = Math.trunc(Math.random() * 20) + 1;
let randomScore = 20;
let highScore = 0;

// Helping function;
const displayMsg = (msg) => message.textContent = msg;
const updateScore= () => scoreDisplay.textContent = randomScore;
const updateHighScore = () => highScoreDisplay.textContent = highScore;

// Reset button 
againBtn.addEventListener('click', () =>{
   gameNumber = Math.trunc(Math.random() * 20) + 1;
   resultNum.textContent = '?';
   checkBtn.disabled = false;
   checkBtn.style.cursor = 'pointer'
   resultNum.style.width = '100px';
   displayMsg('start Gusseing....')
   randomScore = 20;
   updateScore()
   guessInput.value = '';
   body.classList.remove('body-winnig-color')
})

// Check button EventListern;
checkBtn.addEventListener('click', () => {
   const userGuess = Number(guessInput.value);
   if(!userGuess){
      displayMsg('⛔ No Number')
      // if Number is correct
   }else if(userGuess === gameNumber){
      displayMsg('🎉 correct Number');
      resultNum.textContent = gameNumber;
      body.classList.add('body-winnig-color');
      guessInput.style.backgroundColor = 'transparent'
      checkBtn.disabled = true;
      checkBtn.style.cursor = 'not-allowed'
      resultNum.style.width = '150px';

      randomScore++;
      updateScore()

      if(randomScore > highScore){
         highScore = randomScore;
         updateHighScore();
      }
      // if number is other
   }else if( userGuess !== gameNumber){
      displayMsg(userGuess > gameNumber? '📈 to high': '📉 too low');
         randomScore--;
         updateScore()
      if(randomScore <= 0){
         displayMsg('😥 You lost the game');
         scoreDisplay.textContent = 0;
         checkBtn.disabled = true;
         checkBtn.style.cursor = 'not-allowed'
      }
   }
})

