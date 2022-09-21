// Business Logic

function Game() {
  this.roundNumber = 1;
  this.player1Score = 0;
  this.player2Score = 0;
  this.playerOne = {};
  this.playerTwo = {};
  this.activePlayer = null;
  }

/*Game.prototype.switchTurn = function() {
  if (this.turn) {
    //player one turn
  } else {
    //player two turn
  }
};*/

function Player(name, playerNumber) {
  this.playerName = name;
  this.playerNumber = playerNumber;
  this.turn = false;
  this.currentScore = 0;
  this.lastRoll= 0;
}

Player.prototype.diceRoll = function() {
  let rollResult = Math.floor(Math.random() * 6 + 1);
  if (rollResult === 1) {
    this.currentScore = 0;
    console.log("You have rolled a one. Your turn is over!");  
    this.switchTurn;
  } else {
    this.currentScore += rollResult;
    this.lastRoll = rollResult;
    console.log(this.lastRoll)
  }
};

function roundScore(numberOfRolls, player) {
  let rollArr = [];
  for (let n = 0; n < numberOfRolls; n++) {
    let newRoll = player.diceRoll();
    if (newRoll === 1) {
      return 0;
    } else {
    rollArr.push(newRoll);
    }
  }; 
  return rollArr;
} 

/*
bool = turn
false = p2
true = p1
*/

//UI Logic zone

let joe = new Player("Joe", 1);


function handleRoll (player) {
  console.log(player);
  player.diceRoll();
}

function runapp() {
  const game = new Game();
  const rollBtn = document.getElementById('btn');
  const boundRoll = joe.diceRoll.bind(joe);
  rollBtn.addEventListener('click', boundRoll);
}

window.addEventListener("load", runapp);