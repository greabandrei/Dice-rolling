// ---- CONSTANTS ----     //every number represents an image . Ex: 1: Dice with iamge of 1 and so on
const DICES = {
  1: "dice_1.png",
  2: "dice_2.png",
  3: "dice_3.png",
  4: "dice_4.png",
  5: "dice_5.png",
  6: "dice_6.png",
};

// ---- CLASSES -----
class Result {
  constructor(time, dice1, dice2) {
    this.time = time
    this.dice1 = dice1
    this.dice2 = dice2
  }
}

let results = []

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

function renderResults() {
  const resultListDOM = document.getElementById("result-list");
  let resultListHTML = ''

  for(let i=results.length - 1; i > results.length - 10; i--) {
    if(i < 0) {
      break;
    }
    resultListHTML += `
      <li>
        <span id="time">${results[i].time}</span>
        <span>You rolled a <img id="list" src="assets/${results[i].dice1}"> and <img id="list" src="assets/${results[i].dice2}"></span>
      </li>
    `
  }

  resultListDOM.innerHTML = resultListHTML;
}

async function rollDice() {
  diceOne.style.display = "none";
  diceTwo.style.display = "none";
  diceRolling.style.display = "block";
  
  const randomOne = Math.floor(Math.random() * 6) + 1;
  const randomTwo = Math.floor(Math.random() * 6) + 1;
  diceOne.src = `assets/${DICES[randomOne]}`;
  diceTwo.src = `assets/${DICES[randomTwo]}`;

  // store the actual result in the results
  const time = (new Date()).toLocaleString();
  const result = new Result(time, DICES[randomOne], DICES[randomTwo])
  results.push(result)

  await delay(1.5);
  
  // show dice roll result
  diceRolling.style.display = "none";
  diceOne.style.display = "inline";
  diceTwo.style.display = "inline";

  renderResults();
}
