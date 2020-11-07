/*global $*/
var playerMoney = 100;
var numSlots = 3;
var bet = 0;
var imgs = ["img/cherries.png", "img/bar.png", "img/7.png"]
var slots = [];
let betAmount = $("#betAmount");

// Generate random image ('cherries' || 'bar' || '7')
function RandomImg(){
    return imgs[Math.floor(Math.random() * imgs.length)];
}

// Spins
function spin(){
    // Only spin if bet has been chosen
    if ($("#spin").hasClass("disabled")){
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
    bet = 0;
    updateBet();
    disableSpin();
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
    $("#message").html("you won $" + bet * 2);
}

// Lost turn
function lost(){
    playerMoney -= bet;
    $("#message").html("you lost $" + bet);
}

// Disables spin button
function disableSpin(){
    $("#spin").addClass("disabled");
}

// Enables spin button
function enableSpin(){
    $("#spin").removeClass("disabled");
}

// Update bet amount
function updateBet(){
    betAmount.html("$" + bet);
}

// Updates amount of money the player has
function updateMoney(){
    $("#playerMoney").html("$" + playerMoney);
}


// Spin Listener
$("#spin").on("click", function(){
    spin();
})

// Bet Amount listeners
$("#bet-1").on("click", function(){
    bet = 1;
    updateBet();
    enableSpin()
});

$("#bet-5").on("click", function(){
    bet = 5;
    updateBet();
    enableSpin()
});

$("#bet-10").on("click", function(){
    bet = 10;
    updateBet();
    enableSpin()
});

$("#bet-15").on("click", function(){
    bet = 15;
    updateBet();
    enableSpin();
});

$("#bet-20").on("click", function(){
    bet = 20;
    updateBet();
    enableSpin()
});