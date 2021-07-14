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
let win = "That's a wrap. You have won against the computer. Congratulations!"; 
let lose = "That's a wrap. You have lost to the computer. Better luck next time!";

let txtContainer = document.querySelector("#txt-container");
let resultsParagraph = document.createElement("p");

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultsParagraph.textContent = tie;
        txtContainer.appendChild(resultsParagraph);
        return tie; 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        resultsParagraph.textContent = rockWin;
        txtContainer.appendChild(resultsParagraph);
        return rockWin; 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        resultsParagraph.textContent = rockLose;
        txtContainer.appendChild(resultsParagraph);
        return rockLose; 
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        resultsParagraph.textContent = paperWin;
        txtContainer.appendChild(resultsParagraph);
        return paperWin; 
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        resultsParagraph.textContent = paperLose;
        txtContainer.appendChild(resultsParagraph);
        return paperLose; 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        resultsParagraph.textContent = scissorsWin;
        txtContainer.appendChild(resultsParagraph);
        return scissorsWin;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        resultsParagraph.textContent = scissorsLose;
        txtContainer.appendChild(resultsParagraph);
        return scissorsLose; 
    } 
}

const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");

rock.addEventListener("click", () => { 
    playerSelection = "rock";
    game();
});
 
 paper.addEventListener("click", () => { 
     playerSelection = "paper";
     game();
});
 
 scissors.addEventListener("click", () => { 
     playerSelection = "scissors";
     game();
});


let pointsContainer = document.querySelector("#points-container");
let playerPointsParagraph = document.createElement("p");
let computerPointsParagraph = document.createElement("p");
let roundParagraph = document.createElement("p");
const start = document.querySelector("#start-btn");
let computerPoints = 0; 
let playerPoints = 0; 
let round = 1; 

function game() {
    roundParagraph.textContent = "Round: " + round;
    pointsContainer.appendChild(roundParagraph);  
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === rockWin || roundResult === paperWin || roundResult === scissorsWin) { 
            playerPoints += 1; 
    } else if (roundResult === rockLose || roundResult === paperLose || roundResult === scissorsLose) {
            computerPoints += 1; 
    } else { 
            playerPoints += 0; round--
    }
    computerPointsParagraph.textContent = "Computer Points: " + computerPoints; 
    playerPointsParagraph.textContent = "Player Points: " + playerPoints; 
    pointsContainer.appendChild(playerPointsParagraph);
    pointsContainer.appendChild(computerPointsParagraph);
    round++;
    if (round === 6) {
        if (playerPoints > computerPoints) {
                resultsParagraph.textContent = win;
                txtContainer.appendChild(resultsParagraph); 
                round = 1; 
                playerPoints = 0; 
                computerPoints = 0; 
        } else { 
                resultsParagraph.textContent = lose; 
                txtContainer.appendChild(resultsParagraph);
                round = 1; 
                playerPoints = 0; 
                computerPoints = 0; 
        }
    }    
};












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