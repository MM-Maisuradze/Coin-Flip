let img1 = document.querySelector('#heads-tails');
let heads = document.querySelector('.heads');
let tails = document.querySelector('.tails');
let resetbt = document.querySelector('.resetbt');
let computerMove = '';

const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
};

check();

heads.addEventListener("click", function(){
  playGame('heads')})
tails.addEventListener("click", function(){
  playGame('tails')})
resetbt.addEventListener("click", function(){
  reset();
})  

function playGame(guess) {
  const randomNumber = Math.random();
  let result = ''; 

  if(randomNumber < 0.5){
    computerMove = 'heads'
  } else{
    computerMove = 'tails'
  }

  if(guess === computerMove){
    result = 'You win!'
  } else{
    result = 'You lose!'
  }

  if(guess === computerMove) {
    score.wins ++;
  }else{
   score.losses ++;
  }
  check();
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.message')
  .innerHTML = `Computer choose ${computerMove}.
  ${result}
  Wins: ${score.wins}, Losses ${score.losses}`
}



function reset(){
  score.wins = 0;
  score.losses = 0;
  localStorage.removeItem('score');
  document.querySelector('.message')
  .innerHTML = `Wins: ${score.wins}, Losses ${score.losses}`
}

function check(){
  if (computerMove === 'heads') {
    img1.src = '10gel-heads.png';
    img1.style.width = '80px';
  } else{
    img1.src = '10gel-tails.png';
    img1.style.width = '80px';
  }
}
