// Business Logic

function Game() {
  this.roundNumber = 1;
  this.player1Score = 0;
  this.player2Score = 0;
  this.playerOne = {};
  this.playerTwo = {};
  this.activePlayer = 0;
  }
  
//something strange occurring with switchturn not switching properly from Bill back to Joe
//
Game.prototype.switchTurn = function() {
  console.log(this);
  if (this.activePlayer === 0) {
    this.activePlayer = this.playerOne;
  } else if (this.activePlayer === this.playerTwo) {
    this.activePlayer = this.playerOne;
  } else {
    this.activePlayer = this.playerTwo;
  }
};

function Player(name, playerNumber) {
  this.playerName = name;
  this.playerNumber = playerNumber;
  this.currentScore = 0;
  this.lastRoll= 0;
}

Player.prototype.diceRoll = function() {
  let rollResult = Math.floor(Math.random() * 6 + 1);
  console.log(this);
  if (rollResult === 1) {
    this.currentScore = 0;
    console.log("You have rolled a one. Your turn is over!");  
    game.switchTurn();
  } else {
    this.currentScore += rollResult;
    this.lastRoll = rollResult;
    console.log(this.lastRoll)
  }
};

/*
bool = turn
false = p2
true = p1
*/

//UI Logic zone

//let joe = new Player("Joe", 1);


function handleRoll (player) {
  console.log(player);
  player.diceRoll();
}

function runapp() {
  game.playerOne = new Player("Joe", 1);
  game.playerTwo = new Player("Bill", 2);
  game.switchTurn();
  console.log(game.activePlayer);
  const rollBtn = document.getElementById('rollBtn');
  const holdBtn = document.getElementById('holdBtn');
  const activePlayer = game.activePlayer;
  const boundRoll = activePlayer.diceRoll.bind(activePlayer);
  console.log("here I am")
  const boundHold = game.switchTurn(); //.bind(game);
  console.log("on the other side.");
  rollBtn.addEventListener('click', boundRoll);
  holdBtn.addEventListener('click', boundHold);
}

const game = new Game();
window.addEventListener("load", runapp);
