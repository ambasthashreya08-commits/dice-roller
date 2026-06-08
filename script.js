function rollDice() {
    const number = Math.floor(Math.random() * 6) + 1;

    document.getElementById("result").innerText =
        "You rolled: " + number;
}