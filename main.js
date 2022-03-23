function computerPlay() {
    // randomly generate an int between 0-2 for the computer's choice
    let gameChoices = ["rock", "paper", "scissors"];
    return gameChoices[Math.floor(Math.random() * 2.9)];
  }


function rockPaperScissors(player, computer){
        // evaluate game outcome based on player and computer choice
        if((player==='rock'&&computer=='rock') || (player==='paper'&&computer=='paper') || (player==='scissors'&&computer=='scissors')){
          return `Hmmmmm, it's a tie you both chose ${computer}.`
        }else if((player==='rock'&&computer=='scissors') || (player==='paper'&&computer=='rock') || (player==='scissors'&&computer=='paper')){
          return `You won! Amazing. You chose ${player} and the dumb computer chose ${computer}.`
        }else if((player==='scissors'&&computer=='rock') || (player==='rock'&&computer=='paper') || (player==='paper'&&computer=='scissors')){
          return `Oh no! You lost. You chose ${player} and the computer chose ${computer}.`
        }else{
          return "error"
        }
}

function playGame(playerChoice){
  // generate computer choice, prompt user for their choice, evaluate outcome, and return results
  let computerChoice = computerPlay();
  playerChoice = playerChoice.toLowerCase();

  let results = rockPaperScissors(playerChoice, computerChoice);


  const restultOutput = document.querySelector('#results');
  restultOutput.textContent = results

  console.log(results)
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

// loop through each button and add event listener
const choiceSet = ["rock", "paper", "scissors"]
for(let i=0; i<choiceSet.length; i++){
  const btn = document.getElementById(choiceSet[i]);
  btn.addEventListener('click', () => {
    // trigger game on selection
    playGame(choiceSet[i])
  });
}
