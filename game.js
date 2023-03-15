//creates the cpu Random choice in the RPS game
const choices = ["rock", "paper", "scissors"];
const cpuRandom = Math.round(Math.random() * choices.length);
let cpuSelected = (choices[cpuRandom]);

// playRound sets up the rules of the RPS game.

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();

            if (playerSelection === computerSelection) {
                return "It's a tie!";
            } else if (
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")
            ) {
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return `You Lose! ${computerSelection} beats ${playerSelection}`;
            }
}

// game Keeps score, invokes the playRound function as the rules, and tracks the score of the game.
    function game() {
        let playerScore = 0;
        let computerScore = 0;

        for (let i = 0; i < 5; i++) {
            const playerSelection = prompt("Enter your weapon: rock, paper, or scissors");
            const computerSelection = cpuSelected;
            const roundResult = playRound(playerSelection, computerSelection);
                console.log(roundResult);

                // should break up this scoreboard logic into its own function to clean up this code line 36-48.
        if (roundResult.includes("Win")) {
            playerScore++;
        } else if (roundResult.includes("Lose")) {
            computerScore++;
        }
    }
        if (playerScore > computerScore) {
            console.log(`You win the game ${playerScore}:${computerScore}`);
        } else if (computerScore > playerScore) {
            console.log(`You lost the game ${playerScore}:${computerScore}`);
        } else {
            console.log(`You tied ${playerScore}:${computerScore}`);
  }
}


game()

