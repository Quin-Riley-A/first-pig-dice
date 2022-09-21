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

//UI Logic zone

function runapp() {
  game.playerOne = new Player("Joe", 1);
  game.playerTwo = new Player("Bill", 2);
  game.switchTurn();
  const rollBtn = document.getElementById('rollBtn');
  const holdBtn = document.getElementById('holdBtn');
  //const activePlayer = game.activePlayer;
  //const boundRoll = activePlayer.diceRoll;
  const boundHold = game.switchTurn; //.bind(game);
  console.log(game.activePlayer)
  rollBtn.addEventListener('click', game.activePlayer.diceRoll.bind(game.activePlayer));
  holdBtn.addEventListener('click', boundHold.bind(game));
}

const game = new Game();
window.addEventListener("load", runapp);
