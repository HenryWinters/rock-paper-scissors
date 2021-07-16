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

let tie = "It's a tie!"; 
let rockWin = "Nice, you win! Rock beats scissors";
let rockLose = "Ouch, you lose! Paper beats rock";
let paperWin = "Nice, you win! Paper beats rock.";
let paperLose = "Ouch, you lose! Scissors beat paper.";
let scissorsWin = "Nice, you win! Scissors beat paper.";
let scissorsLose = "Ouch, you lose! Rock beats scissors.";
let win = "That's a wrap. You have beat the computer. Congratulations!"; 
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

let playerPointsContainer = document.querySelector("#player-points-container");
let computerPointsContainer = document.querySelector("#computer-points-container");
let playerSelectionDisplay = document.querySelector("#player-selection-display");
let computerSelectionDisplay = document.querySelector("#computer-selection-display");
let playerPointsParagraph = document.createElement("p");
let computerPointsParagraph = document.createElement("p");
let playerSelectionDisplayIcon = document.createElement("i");
let computerSelectionDisplayIcon = document.createElement("i");
let computerPoints = 0; 
let playerPoints = 0; 

function game() {
    
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);

    selectPlayerIcon(); 

    if (computerSelection === "rock") {
        computerSelectionDisplayIcon.className = "fas fa-hand-rock fa-7x";
    } else if (computerSelection === "paper") {
        computerSelectionDisplayIcon.className = "fas fa-hand-paper fa-7x"; 
    } else {
        computerSelectionDisplayIcon.className = "fas fa-hand-scissors fa-7x"; 
    }
    computerSelectionDisplay.appendChild(computerSelectionDisplayIcon);
    playerSelectionDisplayIcon.style.color = "black";
    computerSelectionDisplayIcon.style.color = "black";

    if (roundResult === rockWin || roundResult === paperWin || roundResult === scissorsWin) { 
            playerPoints += 1; 
            playerSelectionDisplayIcon.style.color = "green";
    } else if (roundResult === rockLose || roundResult === paperLose || roundResult === scissorsLose) {
            computerPoints += 1; 
            computerSelectionDisplayIcon.style.color = "red";
    } else { 
            playerPoints += 0; 
            playerSelectionDisplayIcon.style.color = "blue";
            computerSelectionDisplayIcon.style.color = "blue";
    }

    computerPointsParagraph.textContent = computerPoints; 
    playerPointsParagraph.textContent = playerPoints; 
    playerPointsContainer.appendChild(playerPointsParagraph);
    computerPointsContainer.appendChild(computerPointsParagraph);
    
    if (playerPoints === 5 || computerPoints === 5) {
        if (playerPoints > computerPoints) {
                resultsParagraph.textContent = win;
                txtContainer.appendChild(resultsParagraph); 
                playerPoints = 0; 
                computerPoints = 0; 
        } else { 
                resultsParagraph.textContent = lose; 
                txtContainer.appendChild(resultsParagraph);
                playerPoints = 0; 
                computerPoints = 0; 
        }
    }    
};



function selectPlayerIcon() { 
    if (playerSelection === "rock") {
        playerSelectionDisplayIcon.className = "fas fa-hand-rock fa-7x";
    } else if (playerSelection === "paper") {
        playerSelectionDisplayIcon.className = "fas fa-hand-paper fa-7x"; 
    } else {
        playerSelectionDisplayIcon.className = "fas fa-hand-scissors fa-7x"; 
    }
    playerSelectionDisplay.appendChild(playerSelectionDisplayIcon);
};