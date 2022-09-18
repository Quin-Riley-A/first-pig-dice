function Game() {
  this.roundNumber = {};
  this.player1Score = 0;
  this.player2Score = 0;
  
}

function Round() {

}

function Player(name, playerNumber) {
  this.playerName = name;
  this.playerNumber = playerNumber;
  this.hasDice = false;
  
}

function diceRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

function roundScore(numberOfRolls) {
  let rollArr = [];
  for (let n = 0; n < numberOfRolls; n++) {
    let newRoll = diceRoll();
    if (newRoll === 1) {
      return 0;
    } else {
    rollArr.push(newRoll);
    }
  }; 
  return rollArr;
} 