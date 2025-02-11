// ---- CONSTANTS ----     //every number represents an image . Ex: 1: Dice with iamge of 1 and so on
const DICES = {
  1: "dice_1.png",
  2: "dice_2.png",
  3: "dice_3.png",
  4: "dice_4.png",
  5: "dice_5.png",
  6: "dice_6.png",
};

// ---- DOM ELEMENTS ----
const rollDiceBtn = document.getElementById("roll-dice-btn");
const diceOne = document.getElementById("dice-one");
const diceTwo = document.getElementById("dice-two");
const diceRolling = document.getElementById("dice-rolling");

// ---- EVENT LISTENERS ----
rollDiceBtn.addEventListener("click", rollDice);

// ---- FUNCTIONS ----
function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function rollDice() {
  diceOne.style.display = "none";
  diceTwo.style.display = "none";
  diceRolling.style.display = "block";
  
  const randomOne = Math.floor(Math.random() * 6) + 1;
  const randomTwo = Math.floor(Math.random() * 6) + 1;
  diceOne.src = `assets/${DICES[randomOne]}`;
  diceTwo.src = `assets/${DICES[randomTwo]}`;
  
  await delay(1.5);
  
  diceRolling.style.display = "none";
  diceOne.style.display = "inline";
  diceTwo.style.display = "inline";
  
  const storeResults = [];
  storeResults.push([randomOne, randomTwo])
  storeResults.style.display
}

// Here we will implement the logic for the results
/*
    The results will be a list of the last 10 results
    The results will be displayed in the results div
    The results will be updated every time the dice is rolled
    The results will be displayed in the format of "You rolled a [result] and [result]"
*/