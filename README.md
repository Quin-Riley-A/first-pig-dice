TESTING

If the game has an active player
and if the active player points to a specific object for a player
then we can run game.activeplayer.roll() to roll dice
and game.hold() to switch the active player


Objects:
Die
  Roll (prototype method) 
    Could be method of the turn object
  Face up Value

Game
  Turn Object
  Score Object
  Check Score (proto method)

Turn
  Die Object
  Reroll (proto method)
  end turn (proto method)

Score Object
  Total Score
  Round Score
    Check for One (proto method)


TDD:
Describe: diceRoll()
Test 1:
**It will generate a random integer from 1 to 6 inclusive.**
Code:
```javascript
diceRoll();
```
Expected Output:
2 (or) 5 (or) 3 etc

Describe: roundScore()
Test 1:
**It will keep a running log of 5 values from diceRoll() and return them as an array**
Code:
```javascript
roundScore(5);
```
Expected Output: [value1, value2, value3, value4, value5]

Test 2:
**When a one is rolled, it will return a zero**
Code:
'''javascript
roundscore(7);
'''
Expected Output A: [0]
Expected Output B: [List of 7 values that all are not 0 or 1]



Next, build a game scoring portion

Key-values: 
  Current Round = (some positive integer)
  Total Score
  Can invoke the roundscore method to roll x number of dice
  array of all previous round scores (optional)

========================================
function Player(name, playerNumber) {
  this.playerName = name;
  this.playerNumber = playerNumber;
  this.turn = false;
	this.currentScore=0
}

function roundScore(numberOfRolls, currentScore) {
  let rollArr = [];
  for (let n = 0; n < numberOfRolls; n++) {
    Joe.currentScore.diceRoll();
    if currentScore === 1) {
      return 0;
    } else {
    rollArr.push(newRoll);
    }
  }; 
  return rollArr;
} 