setTimeout(() => {
    // Fade out animation
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = "/Tweede-pagina/html/index.html"; // Vervang met jouw gewenste URL
    }, 1000); // Wacht tot de animatie klaar is (1s)
}, 5000); // 5 seconden wachten