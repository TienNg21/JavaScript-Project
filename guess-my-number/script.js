'use strict';

// define element
const again_btn = document.querySelector(".again");
const random_num = document.querySelector(".number");
const input = document.querySelector(".guess");
const check = document.querySelector(".check");

const res = document.querySelector(".message");
const score = document.querySelector(".score");
const high_score = document.querySelector(".highscore")

// define variable
let cur_score = 20;
let cur_highscore = 0;
let win = false;

// define number random
let num = Math.floor(Math.random() * 20) + 1;

// define function
function decrease_score(message) {
    cur_score--;
    if(cur_score <= 0) {
        //gameover
        message = "😱 Oh noooo!\nPlease try again!"
        score.textContent = 0;
        random_num.textContent = "🤦";

        document.querySelector("body").style.backgroundColor = "#ff9f80";
    }else {
        score.textContent = cur_score;
    }
    res.textContent = message;
}

function wingame() {
    win = true;
    if(cur_highscore < cur_score) {
        cur_highscore = cur_score;
    }
    high_score.textContent = cur_highscore;
    res.textContent = "😍 You'r win.\nCongratulations!";
    random_num.textContent = num;

    //css
    document.querySelector("body").style.backgroundColor = "#60b347";
}

// when click button again
again_btn.addEventListener('click', function() {
    cur_score = 20;
    win = false;
    input.value = "";
    random_num.textContent = "?";
    res.textContent = "🤔 Enter your number."
    score.textContent = cur_score;
    num = Math.floor(Math.random() * 20) + 1;

    //css
    document.querySelector("body").style.backgroundColor = "#222";
})

// when click check button
check.addEventListener("click", function() {
    if(cur_score <= 0 || win == true) {
        return;
    }

    if(input.value == false) {
        decrease_score("🙏 Please enter number.");
    }else if(input.value > 20 || input.value < 1) {
        decrease_score("🙏 Enter number between 1 and 20.");
    } else {
        if(Number(input.value) == num) {
            wingame();
        }else if(Number(input.value) < num) {
            decrease_score("🔥 Too low.");
        }else {
            decrease_score("🔥 Too high.")
        }
    }
    input.value = "";
})

