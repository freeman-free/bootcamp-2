document.addEventListener("DOMContentLoaded", function () {
    const characterLeft = document.getElementById("character-left");
    const characterRight = document.getElementById("character-right");
    const door = document.getElementById("door");
    const swirl = document.getElementById("swirl-effect");
    const glow = document.getElementById("door-glow");
    const wrapper = document.getElementById("door-wrapper");

    // Na het lopen: karakters zwaaien kort
    setTimeout(() => {
        characterLeft.classList.add("wave");
        characterRight.classList.add("wave");
    }, 4200); // aangepast aan langere loopduur

    // Na het zwaaien: deur opent, gloed verschijnt, karakters verdwijnen
    setTimeout(() => {
        door.classList.add("open");
        glow.classList.add("active");
        characterLeft.classList.add("fade-out");
        characterRight.classList.add("fade-out");
    }, 5200);

    // Swirl effect, wrapper groeit en draait alles samen
    setTimeout(() => {
        characterRight.style.position = "absolute";
        characterRight.style.left = "50%";
        characterRight.style.transform = "translateX(-50%)";
        characterRight.style.bottom = "15%";
    }, 3000);
});
