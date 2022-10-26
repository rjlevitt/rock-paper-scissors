function computerPlay() {
    // randomly generate an int between 0-2 for the computer's choice
    let gameChoices = ["rock", "paper", "scissors"];
    return gameChoices[Math.floor(Math.random() * 2.9)];
  }

function gameResults(player, computer){
  // evaluate game outcome based on player and computer choice
  if((player==='rock'&&computer=='rock') || (player==='paper'&&computer=='paper') || (player==='scissors'&&computer=='scissors')){
    return 'tie'
  }else if((player==='rock'&&computer=='scissors') || (player==='paper'&&computer=='rock') || (player==='scissors'&&computer=='paper')){
    return 'user'
  }else if((player==='scissors'&&computer=='rock') || (player==='rock'&&computer=='paper') || (player==='paper'&&computer=='scissors')){
    return 'computer'
  }else{
    return "error"
  }
}

function printResults(player, computer){
        // evaluate game outcome based on player and computer choice
        if((player==='rock'&&computer=='rock') || (player==='paper'&&computer=='paper') || (player==='scissors'&&computer=='scissors')){
          return "Hmmmmm, it's a tie."
        }else if((player==='rock'&&computer=='scissors') || (player==='paper'&&computer=='rock') || (player==='scissors'&&computer=='paper')){
          return 'You won! Amazing.'
        }else if((player==='scissors'&&computer=='rock') || (player==='rock'&&computer=='paper') || (player==='paper'&&computer=='scissors')){
          return 'Oh no! You lost.'
        }else{
          return "error"
        }
}



function playGame(playerChoice){
  
  // generate computer choice, prompt user for their choice, evaluate outcome, and return results
  let computerChoice = computerPlay();
  playerChoice = playerChoice.toLowerCase();

  var resultImgs = document.querySelector("#result-imgs");
  resultImgs.style.display = "block"

  var userImg = document.querySelector("#user-icon");
  var computerImg = document.querySelector("#computer-icon");

  userImg.src = `./imgs/${playerChoice}.svg`
  computerImg.src = `./imgs//${computerChoice}.svg`

  // print results to the screen
  const restultOutput = document.querySelector('#results');
  restultOutput.textContent = printResults(playerChoice, computerChoice);

  return gameResults(playerChoice, computerChoice)
}


// loop through each button and add event listener
const choiceSet = ["rock", "paper", "scissors"]
let userCount = 0;
let computerCount = 0;

for(let i=0; i<choiceSet.length; i++){
  const btn = document.getElementById(choiceSet[i]);
  btn.addEventListener('click', () => {
    
    const restultOutput = document.querySelector('#results');
    restultOutput.setAttribute('style', 'color: black;');  

    let gameResult = playGame(choiceSet[i])
    
    if(gameResult==="user"){
      userCount +=1;
    }
    if(gameResult==="computer"){
      computerCount +=1;
    }

    const userScore = document.querySelector('#user-score');
    userScore.textContent = `User Score: ${userCount}`
    
    const computerScore = document.querySelector('#computer-score');
    computerScore.textContent = `Computer Score: ${computerCount}`

    if(userCount===5 || computerCount==5){
      
      if(computerCount>userCount){
        restultOutput.setAttribute('style', 'color: #f99e91;'); 
        restultOutput.textContent = "Game Over. You lost :("; 
      }else{ 
        restultOutput.setAttribute('style', 'color: #4974a4;'); 
        restultOutput.textContent = "Game Over! You beat the computer!";

      }

      userCount = 0;
      computerCount = 0;

    }  

  });
}
