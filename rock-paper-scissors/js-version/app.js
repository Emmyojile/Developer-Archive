const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You Win!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You Lose!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You Win!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You Lose!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You Win!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You Lose!";
  }
  resultDisplay.innerHTML = result;
}


// ADVANCED AND CONCISE METHOD

// const userChoiceDisplay = document.getElementById("user-choice-text");
//         const computerChoiceDisplay = document.getElementById("computer-choice-text");
//         const resultDisplay = document.getElementById("result-text");
//         const choices = document.querySelectorAll(".choice");

//         choices.forEach((choice) => {
//             choice.addEventListener("click", () => {
//                 const userChoice = choice.getAttribute("data-choice");
//                 userChoiceDisplay.textContent = userChoice;
//                 const computerChoice = generateComputerChoice();
//                 computerChoiceDisplay.textContent = computerChoice;
//                 const result = getResult(userChoice, computerChoice);
//                 resultDisplay.textContent = result;
//             });
//         });

//         function generateComputerChoice() {
//             const choices = ["rock", "paper", "scissors"];
//             const randomIndex = Math.floor(Math.random() * choices.length);
//             return choices[randomIndex];
//         }

//         function getResult(userChoice, computerChoice) {
//             if (userChoice === computerChoice) {
//                 return "It's a draw";
//             } else if (
//                 (userChoice === "rock" && computerChoice === "scissors") ||
//                 (userChoice === "paper" && computerChoice === "rock") ||
//                 (userChoice === "scissors" && computerChoice === "paper")
//             ) {
//                 return "You Win!";
//             } else {
//                 return "You Lose!";
//             }
//         }