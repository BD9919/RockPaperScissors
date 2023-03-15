function rules(playerSelection, computerSelection) {
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

var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');

function cpuSelected() {
    const choices = ['rock', 'paper', 'scissors']
    let randomCpu = choices[Math.floor(Math.random() * choices.length)];
    return randomCpu;
};


rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = cpuSelected();
    game(playerSelection, computerSelection)
});

paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = cpuSelected();
    game(playerSelection, computerSelection)
});

scissors.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = cpuSelected();
    game(playerSelection, computerSelection)
});


var playerScoreText = document.getElementById('playerScoreText');
var cpuScoreText = document.getElementById('cpuScoreText');
var textResult = document.getElementById('textResult');
var fightStats = document.getElementById('fightStats');

let playerScore = 0;
let cpuScore = 0;


function game(playerSelection, computerSelection) {


    const roundResult = rules(playerSelection, computerSelection);
    if (roundResult.includes("Win!")) {
        playerScore++;
        fightStats.textContent = `${playerSelection} beats ${computerSelection}.`
        textResult.textContent =  `You win the round ${playerScore}:${cpuScore}`;

    } else if (roundResult.includes("Lose!")) {
        cpuScore++;
        fightStats.textContent = `${computerSelection} beats ${playerSelection}.`
        textResult.textContent = `You lost the round ${playerScore}:${cpuScore}`;

    } else {
    textResult.textContent = `You tied ${playerScore}:${cpuScore}`;
    }
    playerScoreText.textContent = `${playerScore}`;
    cpuScoreText.textContent = `${cpuScore}`;

    
    if (playerScore === 5) {
        textResult.textContent = 'You win the game!';
        disableButtons();
    } else if (cpuScore === 5) {
        textResult.textContent = 'You lose the game!';
        disableButtons();
    };

}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

