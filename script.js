let win = 0;
let lose = 0;
let draw = 0;

function computerPlay() {
    let choice = Math.random() * 3;
    if (choice >= 2) {
        computerSelection = 'rock';
    } else if (choice > 1) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors'
    }

    return computerSelection;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        draw++;
        return "It's a draw!";
    }

    if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
        win++;
        return "You win! Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
        lose++;
        return "You lose! Paper beats Rock!";
    }

    if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        win++;
        return "You win! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
        lose++;
        return "You lose! Scissors cut Paper!";
    }

    if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
        win++;
        return "You win! Scissors cut Paper!";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
        lose++;
        return "You lose! Rock beats Scissors!";
    }
}



function game() {

    if (win + lose + draw >= 5) {
        if (draw > win && lose) {
            console.log('Player wins!');
        } else if (win > draw && lose) {
            console.log('Computer wins!');
        } else {
            console.log("It's a draw");
        }
    }

}