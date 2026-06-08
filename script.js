const dice = document.getElementById("dice");
const result = document.getElementById("result");

function rollDice(){

    const number = Math.floor(Math.random() * 6) + 1;

    const rotations = {
        1: "rotateX(0deg) rotateY(0deg)",
        2: "rotateX(90deg) rotateY(0deg)",
        3: "rotateY(-90deg)",
        4: "rotateY(90deg)",
        5: "rotateX(-90deg)",
        6: "rotateY(180deg)"
    };

    const randomX = Math.floor(Math.random() * 4) * 360;
    const randomY = Math.floor(Math.random() * 4) * 360;

    dice.style.transform =
        rotations[number] +
        ` rotateX(${randomX}deg) rotateY(${randomY}deg)`;

    result.textContent = `You rolled ${number}`;
}