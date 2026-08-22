const images = document.querySelectorAll(".images img");
const overlay = document.getElementById("imageOverlay");
const overlayImage = document.getElementById("overlayImage");

images.forEach(image => {
    image.addEventListener("click", () => {
        overlayImage.src = image.src;
        overlayImage.alt = image.alt;
        overlay.classList.add("active");
    });
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
});