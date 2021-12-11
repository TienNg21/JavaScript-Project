// Game pattern

var gamePattern = [];

var userClickButton = [];

var level = 0;

var gameStarted = false;

// Button colour array 

var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour;

//Alert

alert("Make sure you know how to play Simon Game!");

//Start game when press a key

$("body").keypress(function(){

    if(gameStarted === false){
        nextSequence();

        gameStarted = true;

    }
    
})

// Animate when press button

for(colour of buttonColours){

    $("#" + colour).click(function(event){
        if(gameStarted){
            animatePress(this.id);

            userClickButton.push(this.id);
    
            checkAnswer(userClickButton.length);
        }
        
    })
}

// Next Sequence

function nextSequence(){

    level++;

    $("#level-title").html("Level " + level);

    var random = Math.floor(4*Math.random());

    randomChosenColour = buttonColours[random];

    animatePress(randomChosenColour);

    gamePattern.push(randomChosenColour);

}

// Add flash animate 

function flashButton(btn){
    btn.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

// Play sound

function playSound(fileLocation){
    var audio = new Audio(fileLocation);
    audio.play();
}

// Animate when press

function animatePress(colourId){
    playSound('sounds/' + colourId + '.mp3');

    flashButton($("#" + colourId));

    $("#" + colourId).addClass("pressed");

    setTimeout(function(){
        $("#" + colourId).removeClass("pressed");
    },100);

}

function gameOver(){
    level = 0;

    playSound('sounds/wrong.mp3');

    $("#level-title").html("Game Over, Press Any Key to Restart");

    userClickButton = [];

    gamePattern = [];

    gameStarted = false;

    $("body").addClass("game-over");

    setTimeout(function(){
        $("body").removeClass("game-over");
    })
}

// Check the answer

function checkAnswer(currentLevel){
    if(userClickButton[currentLevel - 1] == gamePattern[currentLevel - 1]){
        if(userClickButton.length == gamePattern.length){
            console.log("choi xong level");
            
            userClickButton = [];

            $("#level-title").html("Pass level " + level);

            setTimeout(function(){

                nextSequence();

            },2000);            
            // choi xong level
        }else{
            console.log("chua xong level");

            
            // chua xong level
        }
    }else{

        console.log("thua roi");

        gameOver();
        //choi thua
    }
}
    