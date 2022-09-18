TESTING

Objects:
Die
  Roll (prototype method)
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
**It will generate a random integer from 1 to 6 inclusive.**
Code:
```javascript
diceRoll();
```
Expected Output:
2 (or) 5 (or) 3 etc
