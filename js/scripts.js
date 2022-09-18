function Game() {
  this.roundNumber = {};
  this.player1Score = 0;
  this.player2Score = 0;
  
}

function Player(name, playerNumber) {
  this.playerName = name;
  this.playerNumber = playerNumber;
  this.turn = false;
  this.currentScore = 0;
}

Player.prototype.diceRoll = function() {
  return Math.floor(Math.random() * 6 + 1);
};

/*Player.prototype.whoseTurn = function() {
  if (this.turn) {
    //player one turn
  } else {
    //player two turn
  }
};*/

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

const runapp = () => {
  const rollBtn = document.getElementById('btn');
  rollBtn.addEventListener('click', roundScore(1, joe));
}

window.addEventListener("load", runapp);