'use strict';

//define btn
const btn_new = document.querySelector(".btn--new");
const btn_roll = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");
const score_p1 = document.querySelector("#score--0");
const score_p2 = document.querySelector("#score--1");
const cur_p1 = document.querySelector("#current--0");
const cur_p2 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");

const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

//modal
const show_modals = document.querySelector(".btn--infor");
const modal = document.querySelector(".modal");
const close_modal = document.querySelector(".close-modal");

//define variable
let score1 = 0;
let score2 = 0;
let current1 = 0;
let current2 = 0;
let whoplay = 1;
let isWin = false;

// define function
const checkWin = function(scoreplayer1, scoreplayer2) {
    if(scoreplayer1 >= 100) {
        player1.classList.add("player--winner");
        score_p1.textContent = scoreplayer1;
        cur_p1.textContent = 0;
        isWin = true;
    }else if (scoreplayer2 >= 100) {
        player2.classList.add("player--winner");
        score_p2.textContent = scoreplayer2;
        cur_p2.textContent = 0;
        isWin = true;
    }
}

const renew = function() {
    isWin = false;
    score1 = 0;
    score2 = 0;
    current1 = 0;
    current2 = 0;
    if(player1.classList.contains("player--winner")) {
        player1.classList.remove("player--winner");
        player1.classList.remove("player--active");
        player2.classList.add("player--active");
        whoplay = 2;
    }
    if(player2.classList.contains("player--winner")) {
        player2.classList.remove("player--winner");
        player2.classList.remove("player--active");
        player1.classList.add("player--active");
        whoplay = 1;
    }
    score_p1.textContent = score1;
    score_p2.textContent = score2;
    cur_p1.textContent = current1;
    cur_p2.textContent = current2;
}

const roll = function() {
    if(isWin) {
        return;
    }
    let random = Math.floor(Math.random()*6 + 1);
    dice.src = `dice-${random}.png`;
    if(whoplay == 1) {
        if(random == 1) {
            current1 = 0;
            cur_p1.textContent = current1;

            //change player
            player1.classList.remove("player--active");
            player2.classList.add("player--active");
            whoplay = 2;
        }else {
            // increase score
            current1 += random;
            cur_p1.textContent = current1;
        }
    }else {
        if(random == 1) {
            current2 = 0;
            cur_p2.textContent = current2;

            //change player
            player2.classList.remove("player--active");
            player1.classList.add("player--active");
            whoplay = 1;
        }else {
            //increase score
            current2 += random;
            cur_p2.textContent = current2;
        }
    }

    // check score when click roll, return win when score > 100
    checkWin(current1 + score1, current2 + score2);
}

const hold = function() {
    if(isWin) {
        return;
    }
    if(whoplay == 1){
        score1 += current1;
        current1 = 0;
        score_p1.textContent = score1;
        cur_p1.textContent = current1;
        player1.classList.remove("player--active");
        player2.classList.add("player--active");
        whoplay = 2;
    }else {
        score2 += current2;
        current2 = 0;
        score_p2.textContent = score2;
        cur_p2.textContent = current2;
        player2.classList.remove("player--active");
        player1.classList.add("player--active");
        whoplay = 1;
    }
}

const open = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const close = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// add event
btn_new.addEventListener('click', renew);

btn_roll.addEventListener('click', roll);

btn_hold.addEventListener('click', hold);

show_modals.addEventListener('click', open);

close_modal.addEventListener('click', close);