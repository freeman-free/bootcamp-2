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
    }, 3000);
});
