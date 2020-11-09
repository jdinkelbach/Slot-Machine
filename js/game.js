/*global $*/
var playerMoney = 100;
var numSlots = 3;
var bet = 0;
var imgs = ["img/cherries.png", "img/bar.png", "img/7.png"]
var slots = [];
let betAmount = $("#betAmount");

playBackgroundMusic();

// plays background music
function playSound(url){
    const audio = new Audio(url);
    audio.play();
}

// Generate random image ('cherries' || 'bar' || '7')
function RandomImg(){
    return imgs[Math.floor(Math.random() * imgs.length)];
}

// Spins
function spin(){
    // Only spin if bet has been chosen
    if (bet > playerMoney || bet === 0) {
        return;
    }
    generateSlots();
    updateSlots();
    console.log(slots);
    isWinner();
    resetTurn();
}

// Generate three random slots
function generateSlots(){
    for (var i = 0; i < numSlots; i++) {
        slots.push(RandomImg());
    }
}

// Update slot images
function updateSlots(){
    for (var i = 0; i < numSlots; i++){
        $(`#slot${i}`).attr("src", slots[i]);
    }
}

// Reset Turn
function resetTurn(){
    slots = [];
}

// Checks for 3 matching images
function isWinner(){
    if (slots[0] === slots[1] && slots[0] === slots[2]){
        won();
        updateMoney();
        return true;
    }
    else {
        lost();
        updateMoney();
        return false;
    }
}

// Won turn
function won(){
    playerMoney += (bet * 2);
    $("#message").html("You won $" + bet * 2);
    $("#message").css('color', '#5cb85c');
}

// Lost turn
function lost(){
    playerMoney -= bet;
    $("#message").html("You lost $" + bet);
    $("#message").css('color', '#AA2323');
}

// Update bet amount
function updateBet(){
    betAmount.html("$" + bet);
}

// Updates amount of money the player has
function updateMoney(){
    $("#playerMoney").html("$" + playerMoney);
}

// Plays spin sound effect
function playSpinSFX(){
    var spinSFX = new Audio("audio/spin.wav");
    spinSFX.play();
}

// Plays ambient background music
function playBackgroundMusic(){
    var backgroundMusic = new Audio("audio/casino.wav");
    backgroundMusic.volume = 0.2;
    backgroundMusic.loop = true;
    backgroundMusic.play();   
}


// Spin Listener
$("#spin").on("click", function(){
    playSpinSFX();
    spin();
})

// Bet Amount listeners
$("#bet-1").on("click", function(){
    bet = 1;
    updateBet();
});

$("#bet-5").on("click", function(){
    bet = 5;
    updateBet();
});

$("#bet-10").on("click", function(){
    bet = 10;
    updateBet();
});

$("#bet-custom").on("click", function(){
    if (bet > playerMoney){
        return;
    }
    bet = $("#input-custom").val();
    updateBet();
});