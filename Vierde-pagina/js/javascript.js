document.addEventListener("DOMContentLoaded", function () {
    const characterLeft = document.getElementById("character-left");
    const characterRight = document.getElementById("character-right");

    function jump(character) {
        let jumpHeight = 80; // Hoe hoog ze springen
        let duration = 500; // Hoe lang de sprong duurt

        // Eerst omhoog springen
        character.style.transition = `transform ${duration / 1000}s ease-out`;
        character.style.transform = `translateY(-${jumpHeight}px)`;

        // Na een korte tijd weer naar beneden laten zakken
        setTimeout(() => {
            character.style.transform = "translateY(0)";
        }, duration);
    }

    function startJumpAnimation() {
        jump(characterLeft);
        jump(characterRight);
    }

    let animationsCompleted = 0;

    function checkIfWalkFinished(event) {
        if (event.animationName === "walk-left" || event.animationName === "walk-right") {
            animationsCompleted++;
            if (animationsCompleted === 2) {
                setTimeout(startJumpAnimation, 500); // Wacht een halve seconde en laat ze dan springen
            }
        }
    }

    characterLeft.addEventListener("animationend", checkIfWalkFinished);
    characterRight.addEventListener("animationend", checkIfWalkFinished);
});