document.addEventListener("DOMContentLoaded", function () {
    let charLeft = document.getElementById("character-left");
    let charRight = document.getElementById("character-right");
    let key = document.getElementById("key");

    function startAnimation() {
        // Voeg loop-animatie toe aan de karakters
        charLeft.style.animation = "walk-left 3s linear forwards";
        charRight.style.animation = "walk-right 3s linear forwards";

        // Wacht tot de karakters klaar zijn, dan laat de sleutel eerst in de struik verschijnen
        setTimeout(() => {
            key.style.animation = "fade-in 1s ease-in-out forwards";
            key.style.opacity = "1"; // Maakt de sleutel zichtbaar

            // Na 1 seconde gaat de sleutel omhoog en begint te zweven
            setTimeout(() => {
                key.style.animation = "move-up 1s ease-in-out forwards, float-key 2s infinite ease-in-out";
            }, 1000);
        }, 3000);
    }

    startAnimation();
});