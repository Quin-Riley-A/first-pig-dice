function diceRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

function roundScore(numberOfRolls) {
  let rollArr = [];
  for (let n = 0; n < numberOfRolls; n++) {
    let newRoll = diceRoll();
    rollArr.push(newRoll);
  }
  return rollArr;
}