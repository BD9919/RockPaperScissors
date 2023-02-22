const choices = ["Rock", "Paper", "Scissor"];

const playerRandom = Math.floor(Math.random() * choices.length);
const cpuRandom = Math.floor(Math.random() * choices.length);

let playerSelected = (choices[playerRandom]);
let cpuSelected = (choices[cpuRandom]);

