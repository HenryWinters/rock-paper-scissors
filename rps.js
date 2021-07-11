//generate a random number bewtween 1 and 3 
//if number is 0 = Rock
// else if number is 1 = Paper 
// else Scissors 

function computerPlay() { 
    let randomNumber = randomInt(3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper"; 
    } else return "Scissors";
}

function randomInt(max) { 
    return Math.floor(Math.random() * max);
}

computerPlay(); 



