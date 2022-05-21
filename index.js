// Npm packages
const prompt = require("prompt-sync")({ sigint: true });

// Gets what computer picks
function getComputerInput() {
    const computerOptions = ['r','p','s'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

// Checks who wins, true = user won, false = computer won
function checkWinner(user, computer) {
    console.log('\n');
    if (user == computer) {
        console.log(`User picked: ${user}, Computer Picked: ${computer}. It was a tie!`);
    } else if (user == 'r' && computer == 's') {
        console.log(`User picked: ${user}, Computer Picked: ${computer}. User won!`);
        userScore++;
    } else if (user == 'r' && computer == 'p') {
        console.log(`User picked: ${user}, Computer Picked: ${computer}. Computer won!`);
        computerScore++;
    } else if (user == 'p' && computer == 's') {
        console.log(`User picked: ${user}, Computer Picked: ${computer}. Computer won!`);
        computerScore++;
    } else if (user == 'p' && computer == 'r') {
        console.log(`User picked: ${user}, Computer Picked: ${computer}. User won!`);
        userScore++;
    } else if (user == 's' && computer == 'p') {
        console.log(`User picked: ${user}, Computer Picked: ${computer}. User won!`);
        userScore++;
    } else if (user == 's' && computer == 'r') {
        console.log(`User picked: ${user}, Computer Picked: ${computer}. Computer won!`);
        computerScore++;
    } else {
        console.log("That is not a valid input!");
    }
}

// Gets both user and computer input
let userScore = 0;
let computerScore = 0;

while (true){
    console.clear();
    console.log(`User Score: ${userScore} | Computer score: ${computerScore}`)
    const computerInput = getComputerInput();
    const userInput = prompt("Are you picking rock (r), paper (p) or scissors (s)?: ").toLowerCase();

    checkWinner(userInput, computerInput);
    console.log("\n");
    prompt("Press enter to start again: ");
}
