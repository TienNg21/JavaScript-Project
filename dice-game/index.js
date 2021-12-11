var dice1 = Math.floor(6*Math.random()) + 1;
var dice2 = Math.floor(6*Math.random()) + 1;


var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

var res = document.querySelector("#res");

function setImgDice(dice){
    switch(dice){
        case 1: return "images/dice1.png";
        case 2: return "images/dice2.png";
        case 3: return "images/dice3.png";
        case 4: return "images/dice4.png";
        case 5: return "images/dice5.png";
        case 6: return "images/dice6.png";
        default: alert("Error");
    }
}

function checkRes(dice1, dice2){
    if(dice1 > dice2){
        res.textContent = "🚩 Player 1 Win";
    }else if(dice1 < dice2){
        res.textContent = "Player 2 Win 🚩";
    }else{
        res.textContent = "Draw!"
    }
}

checkRes(dice1, dice2);

img1.setAttribute("src", setImgDice(dice1));
img2.setAttribute("src", setImgDice(dice2));

