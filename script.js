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

function playerPlay() {
    let choice = prompt("Rock, paper, or scissors?");

    playerSelection = choice.toString().toLowerCase();
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        draw++;
        alert("It's a draw!");
        return "It's a draw!";
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        win++;
        alert("You win! Rock beats Scissors!")
        return "You win! Rock beats Scissors!";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        lose++;
        alert("You lose! Paper beats Rock!")
        return "You lose! Paper beats Rock!";
    }

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        win++;
        alert("You win! Paper beats Rock!")
        return "You win! Paper beats Rock!";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        lose++;
        alert("You lose! Scissors cut Paper!");
        return "You lose! Scissors cut Paper!";
    }

    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        win++;
        alert("You win! Scissors cut Paper!");
        return "You win! Scissors cut Paper!";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        lose++;
        alert("You lose! Rock beats Scissors!");
        return "You lose! Rock beats Scissors!";
    }

}

function score() {
    if (win > lose) {
        result = 'You win!';
    } else if (win === lose) {
        result = "It's a draw!";
    } else if (lose > win) {
        result = 'You lose!';
    }
}

function game() {

    for (let rounds = 0; rounds < 5; rounds++) {
        playRound(playerPlay(), computerPlay());
    }

    score();

    alert(result);
    alert('Results: ' + win + " wins, " + draw + " draws and " + lose + " loses.");
    console.log('Results: ' + win + " wins, " + draw + " draws and " + lose + " loses.");

    if (win + draw + lose === 5) {
        win = 0;
        lose = 0;
        draw = 0;
    }
}