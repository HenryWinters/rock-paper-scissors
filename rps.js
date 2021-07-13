//generate a random number bewtween 1 and 3 
//if number is 0 = Rock
// else if number is 1 = Paper 
// else Scissors 

function computerPlay() { 
    let randomNumber = randomInt(3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper"; 
    } else return "scissors";
}

function randomInt(max) { 
    return Math.floor(Math.random() * max);
} 

//create function that takes two parameters - one from user and one from computerPlay function
//compare the parameters: if equal it's a tie, otherwise paper beats rock, rock beats scissors, scissors beats paper
let tie = "It's a tie! Repeat the round."; 
let rockWin = "Nice, you win! Rock beats scissors";
let rockLose = "Ouch, you lose! Paper beats rock";
let paperWin = "Nice, you win! Paper beats rock.";
let paperLose = "Ouch, you lose! Scissors beat paper.";
let scissorsWin = "Nice, you win! Scissors beat paper.";
let scissorsLose = "Ouch, you lose! Rock beats scissors.";

let txtContainer = document.querySelector("#txt-container");
let resultsParagraph = document.createElement("p");

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultsParagraph.textContent = tie;
        txtContainer.appendChild(resultsParagraph);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        resultsParagraph.textContent = rockWin;
        txtContainer.appendChild(resultsParagraph);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        resultsParagraph.textContent = rockLose;
        txtContainer.appendChild(resultsParagraph);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        resultsParagraph.textContent = paperWin;
        txtContainer.appendChild(resultsParagraph);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        resultsParagraph.textContent = paperLose;
        txtContainer.appendChild(resultsParagraph);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        resultsParagraph.textContent = scissorsWin;
        txtContainer.appendChild(resultsParagraph);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        resultsParagraph.textContent = scissorsLose;
        txtContainer.appendChild(resultsParagraph);
    } 
}

const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");
let playerSelection = "";

rock.addEventListener("click", () => { 
   playerSelection = "rock";
   game();
});

paper.addEventListener("click", () => { 
    playerSection = "paper";
    game(); 
});

scissors.addEventListener("click", () => { 
    playerSelection = "scissors";
    game(); 
});

function game() { 
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(playerSelection);
    console.log(computerSelection);
}














//play a five round game of rock paper scissors
//create point tracker for the player and the computer
//create round tracker to track what round we are in
//if player wins, add 1 point to the player tracker 
//if computer wins, add 1 point to the computer tracker
//after 5 rounds, compare the numbers 
//if player number is higher than computer number, declare player the winner 
//else declare the computer winner
//either way display point values for each
/*
function game() {
    let round = 1; 
    let playerPoints = 0; 
    let computerPoints = 0; 
    while (round <= 5) { 
        console.log("Round " + round);
        let playerSelection = prompt("What's your selection? Rock, paper, or scissors?");
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult === "Nice, you win! Rock beats scissors." || roundResult === "Nice, you win! Paper beats rock." || roundResult === "Nice, you win! Scissors beat paper.") {
            playerPoints += 1;
        } else if (roundResult === "Ouch, you lose! Paper beats rock." || roundResult === "Ouch, you lose! Scissors beat paper." || roundResult === "Ouch, you lose! Rock beats scissors.") {
            computerPoints += 1; 
        } else { playerPoints += 0; round--  
        }
        round++ 
        console.log("Player Points " + playerPoints);
        console.log("Computer Points " + computerPoints);
        if (round === 6) {
            if (playerPoints > computerPoints) {
                console.log("That's a wrap. You beat the computer. Congratulations!"); 
            } else console.log("That's a wrap. You lost to the computer. Better luck next time!");
        }
    }
}
*/