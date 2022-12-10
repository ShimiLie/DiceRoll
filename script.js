function rollDice() {
    let face = document.getElementById("face").value;
    let result = document.getElementById("result");
    let roll = Math.floor(Math.random() * face) + 1;
    
    result.innerHTML = "You have rolled " + roll + "!";
};


// test
function testroll(a) {
    return roll = Math.floor(Math.random() * a) + 1;

};

if (testroll(4) <= 4) {
    console.log("true");
} else {
    console.log("false");
};

if (testroll(5) > 5 ) {
    console.log("false");
} else {
    console.log("true");
};

