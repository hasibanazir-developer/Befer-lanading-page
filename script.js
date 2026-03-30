document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;

    // icons move
    document.querySelectorAll(".icon").forEach((icon) => {
        if (icon.classList.contains("percent")) {
            icon.style.transform = `translate(${x}px, ${y}px) rotate(-15deg)`;
        } else if (icon.classList.contains("dollar")) {
            icon.style.transform = `translate(${x}px, ${y}px) rotate(15deg)`;
        }
    });

    // image move
    const image = document.querySelector(".center-image img");
    if (image) {
        image.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
    }
});