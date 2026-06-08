function rollDice() {

    const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

    const result = document.getElementById("result");

    result.classList.add("rolling");

    let count = 0;

    const animation = setInterval(() => {

        result.textContent =
            diceFaces[Math.floor(Math.random() * 6)];

        count++;

        if(count > 15){

            clearInterval(animation);

            const finalNumber =
                Math.floor(Math.random() * 6);

            result.textContent =
                diceFaces[finalNumber];

            result.classList.remove("rolling");
        }

    },100);
}