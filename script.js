const imageSrc = [
    "Fotos/alaska-810433_1280.jpg",
    "Fotos/anime-8788959_1280.jpg",
    "Fotos/atmosphere-8752835_1280.png",
    "Fotos/blue-tit-8521052_1280.jpg",
    "Fotos/hurricane-92968_1280.jpg",
    "Fotos/lake-2896379_1280.jpg",
    "Fotos/moorente-8783210_1280.jpg",
    "Fotos/sea-2563389_1280.jpg",
    "Fotos/snow-bunting-6781122_1280.jpg",
    "Fotos/snow-leopard-cubs-8039138_1280.jpg",
    "Fotos/travel-8785493_1280.jpg",
    "Fotos/winter-1675197_1280.jpg"
];

const imageAlt = [
    "alaska-810433_1280",
    "anime-8788959_1280",
    "atmosphere-87535_1280",
    "blue-tit-8521052_1280",
    "hurricane-92968_1280",
    "lake-2896379_1280",
    "moorente-310_1280",
    "sea-2563389_1280",
    "snow-bunting-8_1280",
    "snow-leopard-cubs",
    "travel-8785493_1280",
    "winter-1675197_1280"
];

let currentIndex = 0;
let Tags = [];
const dialog = document.getElementById("myDialog");
const imageId = document.getElementById("images");

function setimageTags() {
    for (let index = 0; index < imageSrc.length; index++) {
        Tags += imageTags(index);
    }
    imageId.innerHTML = Tags;
}

function openDialog(id) {
    currentIndex = id;
    dialog.showModal();
    dialog.classList.add("dialogOpen");
    dialog.innerHTML = setTag(
        currentIndex,
        imageSrc[currentIndex],
        imageAlt[currentIndex]
    );
    dialog.querySelector(".dialog_header_button").focus();
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + imageSrc.length) % imageSrc.length;
    dialog.innerHTML = setTag(
        currentIndex,
        imageSrc[currentIndex],
        imageAlt[currentIndex]
    );
    dialog.querySelector(
        direction === 1
            ? ".dialog_footer_forward_arrow"
            : ".dialog_footer_revers_arrow"
    ).focus();
}

function closeDialog() {
    dialog.close();
    dialog.classList.remove("dialogOpen");
    document.activeElement.blur();
}

document.addEventListener("keydown", function (event) {
    if (!dialog.open) return;
    if (event.key === "ArrowRight") changeImage(1);
    if (event.key === "ArrowLeft") changeImage(-1);
    if (event.key === "Escape") closeDialog();
});

dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
        closeDialog();
    }
});

function setTag(i, src, alt) {
    return `
        <main class="dialog_main">
            <header class="dialog_header">
                <h2>
                    ${alt}
                </h2>

                <button
                    onclick="closeDialog()"
                    class="dialog_header_button"
                    aria-label="Close dialog">
                </button>
            </header>

            <section class="dialog_section">
                <img
                    id="dialogImage"
                    src="${src}"
                    alt="${alt}">
            </section>

            <footer class="dialog_footer">
                <button
                    onclick="changeImage(-1)"
                    class="dialog_footer_revers_arrow"
                    aria-label="Previous image">
                </button>

                <p>
                    ${i + 1}/${imageSrc.length}
                </p>

                <button
                    onclick="changeImage(1)"
                    class="dialog_footer_forward_arrow"
                    aria-label="Next image">
                </button>
            </footer>
        </main>
    `;
}

function imageTags(number) {
    return `
        <img
            onclick="openDialog(${number})"
            onkeyup="if (event.key === 'Enter') { openDialog(${number}); }"
            tabindex="0"
            aria-label="Open image ${number + 1}"
            src="${imageSrc[number]}"
            alt="${imageAlt[number]}">
    `;
}
