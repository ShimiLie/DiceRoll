function rollDice() {
    let face = document.getElementById("face").value;
    let result = document.getElementById("result");
    let roll = Math.floor(Math.random() * face) + 1;
    
    result.innerHTML = "You have rolled " + roll + "!";
};

