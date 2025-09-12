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
        swirl.classList.add("active");
        wrapper.classList.add("grow");
        // Eerst swirl animatie (2s), dan extra delay (0.7s), dan redirect
        setTimeout(() => {
            window.location.href = "../../Vierde-pagina/html/index.html";
        }, 1500); // 2s animatie + 0.7s extra delay
    }, 6400);

    // Klik op deur of gloed: direct swirl effect en redirect met delay
    [door, glow].forEach(el => {
        el.addEventListener("click", () => {
            swirl.classList.add("active");
            wrapper.classList.add("grow");
            setTimeout(() => {
                window.location.href = "../../Vierde-pagina/html/index.html";
            }, 2700);
        });
    });
});
