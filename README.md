TESTING

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
Test 2:
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
