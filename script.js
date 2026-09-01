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
const dialog = document.getElementById("myDialog");
const ImageTags = document.getElementById("images");


// ================================
// BILDER AUF DER STARTSEITE
// ================================

function renderImages() {
    ImageTags.innerHTML = setImageTags();
}


// ================================
// DIALOG ÖFFNEN
// ================================

function openDialog(id) {
    currentIndex = id;
    dialog.showModal();
    dialog.classList.add("dialogOpen");
    for (let index = 0; index < imageSrc.length; index++) {
        dialog.innerHTML = setTag(
            currentIndex,
            imageSrc[currentIndex],
            imageAlt[currentIndex]
        );
    }
}


// ================================
// VORHERIGES BILD
// ================================

function previousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imageSrc.length - 1;
    }
    dialog.innerHTML = setTag(
        currentIndex,
        imageSrc[currentIndex],
        imageAlt[currentIndex]
    );
}


// ================================
// NÄCHSTES BILD
// ================================

function nextImage() {
    currentIndex++;
    if (currentIndex >= imageSrc.length) {
        currentIndex = 0;
    }
    dialog.innerHTML = setTag(
        currentIndex,
        imageSrc[currentIndex],
        imageAlt[currentIndex]
    );
}


// ================================
// DIALOG SCHLIESSEN
// ================================

function closeDialog() {
    dialog.close();
    dialog.classList.remove("dialogOpen");
}


// ================================
// TASTATUR
// ================================

document.addEventListener("keydown", function (event) {
    if (!dialog.open) {
        return;
    }
    if (event.key === "ArrowRight") {
        nextImage();
    }
    if (event.key === "ArrowLeft") {
        previousImage();
    }
    if (event.key === "Escape") {
        closeDialog();
    }
});


// ================================
// KLICK AUF HINTERGRUND
// ================================

dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
        closeDialog();
    }
});


// ================================
// DIALOG HTML
// ================================

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
                    aria-label="Dialog schließen">
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
                    onclick="previousImage()"
                    class="dialog_footer_revers_arrow"
                    aria-label="previous image">
                </button>
                <p>
                    ${i + 1}/${imageSrc.length}
                </p>
                <button
                    onclick="nextImage()"
                    class="dialog_footer_forward_arrow"
                    aria-label="next image">
                </button>
            </footer>

        </main>
    `;
}

function setImageTags() {
    return `
            <img
                onclick="openDialog(0)"
                onkeyup="if (event.key === 'Enter') { openDialog(0); }"
                tabindex="0"
                src="Fotos/alaska-810433_1280.jpg"
                alt="alaska-810433_1280">
            <img
                onclick="openDialog(1)"
                onkeyup="if (event.key === 'Enter') { openDialog(1); }"
                tabindex="0"
                src="Fotos/anime-8788959_1280.jpg"
                alt="anime-8788959_1280">
            <img
                onclick="openDialog(2)"
                onkeyup="if (event.key === 'Enter') { openDialog(2); }"
                tabindex="0"
                src="Fotos/atmosphere-8752835_1280.png"
                alt="atmosphere-87535_1280">
            <img
                onclick="openDialog(3)"
                onkeyup="if (event.key === 'Enter') { openDialog(3); }"
                tabindex="0"
                src="Fotos/blue-tit-8521052_1280.jpg"
                alt="blue-tit-8521052_1280">
            <img
                onclick="openDialog(4)"
                onkeyup="if (event.key === 'Enter') { openDialog(4); }"
                tabindex="0"
                src="Fotos/hurricane-92968_1280.jpg"
                alt="hurricane-92968_1280">
            <img
                onclick="openDialog(5)"
                onkeyup="if (event.key === 'Enter') { openDialog(5); }"
                tabindex="0"
                src="Fotos/lake-2896379_1280.jpg"
                alt="lake-2896379_1280">
            <img
                onclick="openDialog(6)"
                onkeyup="if (event.key === 'Enter') { openDialog(6); }"
                tabindex="0"
                src="Fotos/moorente-8783210_1280.jpg"
                alt="moorente-310_1280">
            <img
                onclick="openDialog(7)"
                onkeyup="if (event.key === 'Enter') { openDialog(7); }"
                tabindex="0"
                src="Fotos/sea-2563389_1280.jpg"
                alt="sea-2563389_1280">
            <img
                onclick="openDialog(8)"
                onkeyup="if (event.key === 'Enter') { openDialog(8); }"
                tabindex="0"
                src="Fotos/snow-bunting-6781122_1280.jpg"
                alt="snow-bunting-8_1280">
            <img
                onclick="openDialog(9)"
                onkeyup="if (event.key === 'Enter') { openDialog(9); }"
                tabindex="0"
                src="Fotos/snow-leopard-cubs-8039138_1280.jpg"
                alt="snow-leopard-cubs">
            <img
                onclick="openDialog(10)"
                onkeyup="if (event.key === 'Enter') { openDialog(10); }"
                tabindex="0"
                src="Fotos/travel-8785493_1280.jpg"
                alt="travel-8785493_1280">
            <img
                onclick="openDialog(11)"
                onkeyup="if (event.key === 'Enter') { openDialog(11); }"
                tabindex="0"
                src="Fotos/winter-1675197_1280.jpg"
                alt="winter-1675197_1280">
        </div>
    `;
}