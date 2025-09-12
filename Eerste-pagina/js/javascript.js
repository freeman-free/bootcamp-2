document.addEventListener("DOMContentLoaded", () => {
    const light = document.getElementById("golden-light");
    const bush = document.getElementById("background");
    let angle = 0;
    let baseRadius = 40; // Start radius
    let maxRadius = 80; // Max radius
    let grow = true;

    function animateLight() {
        // Struik positie bepalen
        const bushRect = bush.getBoundingClientRect();
        const parentRect = bush.parentElement.getBoundingClientRect();

        // Center van de struik relatief aan de parent
        const centerX = bush.offsetLeft + bush.width / 2;
        const centerY = bush.offsetTop + bush.height / 2;

        // Radius laten groeien en krimpen
        if (grow) {
            baseRadius += 0.4;
            if (baseRadius >= maxRadius) grow = false;
        } else {
            baseRadius -= 0.4;
            if (baseRadius <= 40) grow = true;
        }

        // Lichtje rond laten gaan
        angle += 0.018;
        const x = centerX + baseRadius * Math.cos(angle);
        const y = centerY + baseRadius * Math.sin(angle);

        light.style.left = `${x}px`;
        light.style.top = `${y}px`;
        // Lichtje ook iets groter/kleiner maken
        const scale = 1 + (baseRadius - 40) / 80;
        light.style.transform = `translate(-50%, -50%) scale(${scale})`;

        requestAnimationFrame(animateLight);
    }

    animateLight();
});