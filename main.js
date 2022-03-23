function computerPlay() {
    // randomly generate an int between 0-2 for the computer's choice
    let gameChoices = ["rock", "paper", "scissors"];
    return gameChoices[Math.floor(Math.random() * 2.9)];
  }


function rockPaperScissors(player, computer){
        // evaluate game outcome based on player and computer choice
        if((player==='rock'&&computer=='rock') || (player==='paper'&&computer=='paper') || (player==='scissors'&&computer=='scissors')){
          return "tie"
        }else if((player==='rock'&&computer=='scissors') || (player==='paper'&&computer=='rock') || (player==='scissors'&&computer=='paper')){
          return "user"
        }else if((player==='scissors'&&computer=='rock') || (player==='rock'&&computer=='paper') || (player==='paper'&&computer=='scissors')){
          return "computer"
        }else{
          return "error"
        }
}

function playGame(){
  // generate computer choice, prompt user for their choice, evaluate outcome, and return results
  let computerChoice = computerPlay();
  let playerChoice = window.prompt("Please choose either 'Rock', 'Paper', or 'Scissors'");
  playerChoice = playerChoice.toLowerCase();

  console.log("Computer Choice: " + computerChoice);
  console.log("Player Choice: " + playerChoice);

  let results = rockPaperScissors(playerChoice, computerChoice);
  return results
}

function fullGame(){

  console.log("Let's Play Rock Paper Scissors!");
 
  // keep track of user and computer score
  let userCount = 0;
  let computerCount = 0;

  for(let i=0; i<5; i++){
    // loop through game play

    let gameResults=playGame();

    if(gameResults==="user"){
      userCount +=1;
    }
    if(gameResults==="computer"){
      computerCount +=1;
    }

    console.log(gameResults)
  }

  // print final tallies
  console.log("User score: " + userCount);
  console.log("Compter score: " + computerCount);

}

// play game
fullGame()