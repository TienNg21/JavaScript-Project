//game

let yourPoint = 0;
let comPoint = 0;

const rock = document.querySelector("#rock"); // 1
const paper = document.querySelector("#paper"); // 2
const scissors = document.querySelector("#scissors"); // 3

const you = document.querySelector("#you");
const com = document.querySelector("#com");

const yourScore = document.querySelector("#your-score");
const comScore = document.querySelector("#com-score");

const res = document.querySelector("#result");

const computerPlayRandom = function() {
    let random = Math.floor(Math.random() * 3 + 1);
    if(random == 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const playerClick = function(data) {
    let computerPlay = computerPlayRandom();
    if(data === "rock") {
        if(computerPlay === "rock") {
            //draw
            res.textContent = "Ohh! Draww, let's play again.";
        } else if(computerPlay == "paper") {
            //com win
            comPoint ++;
            res.textContent = "You lose! Paper beats rock.";
            comScore.textContent = "Computer: " + comPoint;
        } else {
            // you win
            yourPoint ++;
            res.textContent = "You win! Rock beats scissors.";
            yourScore.textContent = "You: " + yourPoint;
        }
    }else if (data === "paper") {
        if(computerPlay === "rock") {
            //you win
            yourPoint ++;
            res.textContent = "You win! Paper beats rock.";
            yourScore.textContent = "You: " + yourPoint;
        } else if(computerPlay == "paper") {
            // draw
            res.textContent = "Ohh! Draww, let's play again."

        } else {
            // com win
            comPoint ++;
            res.textContent = "You lose! Scissors beats paper.";
            comScore.textContent = "Computer: " + comPoint;
        }
    } else {
        if(computerPlay === "rock") {
            // com win
            comPoint ++;
            res.textContent = "You lose! Rock beats scissors.";
            comScore.textContent = "Computer: " + comPoint;
        } else if(computerPlay == "paper") {
            //you win
            yourPoint ++;
            res.textContent = "You win! Scissors beats paper.";
            yourScore.textContent = "You: " + yourPoint;
        } else {
            // draw
            res.textContent = "Ohh! Draww, let's play again."

        }
    }
}

rock.addEventListener('click', function() {
    playerClick("rock");
});

paper.addEventListener('click', function() {
    playerClick("paper");
})

scissors.addEventListener('click', function() {
    playerClick("scissors");
})