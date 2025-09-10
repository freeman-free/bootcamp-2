document.addEventListener("DOMContentLoaded", function () {
    const characterRight = document.getElementById("character-right");
    
    if (!characterRight) {
        console.error("Element #character-right niet gevonden!");
        return;
    }
    
    setTimeout(() => {
        characterRight.style.position = "absolute";
        characterRight.style.left = "50%";
        characterRight.style.transform = "translateX(-50%)";
        characterRight.style.bottom = "15%";
        
        // Fade out the body before redirecting
        setTimeout(() => {
            document.body.style.transition = "opacity 0.7s";
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = "/Derde-pagina/html/index.html";
            }, 700); // Match the fade duration
        }, 1000);
    }, 3000);
});
