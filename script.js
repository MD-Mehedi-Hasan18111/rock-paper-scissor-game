let computerScore = 0;
let playerScore = 0;

/* ---------------------------------------
    Clear Score Board Function 
-----------------------------------------*/
const clearScore = () => {
    document.getElementById('com-score').innerText = 0;
    document.getElementById('play-score').innerText = 0;
    document.getElementById('result').innerText = "Game Started!";
}

/* --------------------------------------------------
    Score Updating and Game Over Resulting 
----------------------------------------------------*/
const score = (computerScore, playerScore) => {
    document.getElementById('com-score').innerText = computerScore;
    document.getElementById('play-score').innerText = playerScore;

    if (computerScore == 10) {
        alert("Game Over! Computer Win");
        clearScore();
    }
    else if (playerScore == 10) {
        alert("Game Over! Player Win");
        clearScore();
    }
}

/* ---------------------------------------------------
    Player Turn Add Event Listener
-----------------------------------------------------*/
document.getElementById('rock').addEventListener('click', () => {
    let computer = Math.ceil(Math.random() * 3);
    let result = play(1, computer);

    if (result == 0) {
        computerScore++;
    }
    else if (result == 1) {
        playerScore++;
    }
    score(computerScore, playerScore);
})

document.getElementById('paper').addEventListener('click', () => {
    let computer = Math.ceil(Math.random() * 3);
    let result = play(2, computer);

    if (result == 0) {
        computerScore++;
    }
    else if (result == 1) {
        playerScore++;
    }
    score(computerScore, playerScore);
})

document.getElementById('scissor').addEventListener('click', () => {
    let computer = Math.ceil(Math.random() * 3);
    let result = play(3, computer);

    if (result == 0) {
        computerScore++;
    }
    else if (result == 1) {
        playerScore++;
    }
    score(computerScore, playerScore);
})

/* -------------------------------------------
    Game Condition Check 
---------------------------------------------*/
const play = (player, computer) => {
    const result = document.getElementById('result');
    if (player == 1 && computer == 1) {
        result.innerText = "Draw! Computer picked: Rock";
    }
    if (player == 1 && computer == 2) {
        result.innerText = "You lose! Computer picked: Paper";
        return 0;
    }
    if (player == 1 && computer == 3) {
        result.innerText = "You Win! Computer picked: Scissor";
        return 1;
    }

    if (player == 2 && computer == 1) {
        result.innerText = "You Win! Computer picked: Rock";
        return 1;
    }
    if (player == 2 && computer == 2) {
        result.innerText = "Draw! Computer picked: Paper";
    }
    if (player == 2 && computer == 3) {
        result.innerText = "You lose! Computer picked: Scissor";
        return 0;
    }

    if (player == 3 && computer == 1) {
        result.innerText = "You lose! Computer picked: Rock";
        return 0;
    }
    if (player == 3 && computer == 2) {
        result.innerText = "You Win! Computer picked: Paper";
        return 1;
    }
    if (player == 3 && computer == 3) {
        result.innerText = "Draw! Computer picked: Scissor";
    }
}