//select all buttons and the choices made

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");


//add event listner

function playGame(userChoice) {
  userChoiceDisplay.textContent = "Your choice: " + userChoice;

  // Step 4: Generate computer's choice
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];
  computerChoiceDisplay.textContent = "Computer's choice: " + computerChoice;

  // Step 5: Compare choices
  let result = "";
  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  // Step 6: Show result
  resultDisplay.textContent = "Result: " + result;
}

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

