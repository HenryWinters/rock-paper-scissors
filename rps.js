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

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Congratulations, you win! Rock beats scissors.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Ouch, you lose! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Congratulations, you win! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Ouch, you lose! Scissors beat paper.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Congratulations, you win! Scissors beat paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Ouch, you lose! Rock beats scissors.";
    } else return "Hey, that's not one of the options! Please input rock, paper, or scissors."
}

const playerSelection = "rock";
const computerSelection = computerPlay(); 
console.log(playRound(playerSelection, computerSelection));
