// Business Logic

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
  let rollResult = Math.floor(Math.random() * 6 + 1);
  this.currentScore += rollResult;
  console.log(this);
  console.log(rollResult);
  //return rollResult;
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


function handleRoll (player) {
  console.log(player);
  player.diceRoll();
}

function runapp() {
  const rollBtn = document.getElementById('btn');
  const boundRoll = joe.diceRoll.bind(joe);
  rollBtn.addEventListener('click', boundRoll);
}

window.addEventListener("load", runapp);