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
const imageTags = document.getElementById("images");
imageTags.innerHTML = setImageTags();

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

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = imageSrc.length - 1;
    }
    if (currentIndex >= imageSrc.length) {
        currentIndex = 0;
    }
    dialog.innerHTML = setTag(
        currentIndex,
        imageSrc[currentIndex],
        imageAlt[currentIndex]
    );
    if (direction === 1) {
        dialog.querySelector(".dialog_footer_forward_arrow").focus();
    }
    if (direction === -1) {
        dialog.querySelector(".dialog_footer_revers_arrow").focus();
    }
}

function closeDialog() {
    dialog.close();
    dialog.classList.remove("dialogOpen");
    document.activeElement.blur();
}

document.addEventListener("keydown", function (event) {
    if (!dialog.open) {
        return;
    }
    if (event.key === "ArrowRight") {
        event.preventDefault();
        changeImage(1);
    }
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        changeImage(-1);
    }
    if (event.key === "Escape") {
        event.preventDefault();
        closeDialog();
    }
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

function setImageTags() {
    return `
        <img
            onclick="openDialog(0)"
            onkeyup="if (event.key === 'Enter') { openDialog(0); }"
            tabindex="0"
            aria-label="Open image 1"
            src="Fotos/alaska-810433_1280.jpg"
            alt="Alaska">

        <img
            onclick="openDialog(1)"
            onkeyup="if (event.key === 'Enter') { openDialog(1); }"
            tabindex="0"
            aria-label="Open image 2"
            src="Fotos/anime-8788959_1280.jpg"
            alt="Anime">

        <img
            onclick="openDialog(2)"
            onkeyup="if (event.key === 'Enter') { openDialog(2); }"
            tabindex="0"
            aria-label="Open image 3"
            src="Fotos/atmosphere-8752835_1280.png"
            alt="Atmosphere">

        <img
            onclick="openDialog(3)"
            onkeyup="if (event.key === 'Enter') { openDialog(3); }"
            tabindex="0"
            aria-label="Open image 4"
            src="Fotos/blue-tit-8521052_1280.jpg"
            alt="Blue tit">

        <img
            onclick="openDialog(4)"
            onkeyup="if (event.key === 'Enter') { openDialog(4); }"
            tabindex="0"
            aria-label="Open image 5"
            src="Fotos/hurricane-92968_1280.jpg"
            alt="Hurricane">

        <img
            onclick="openDialog(5)"
            onkeyup="if (event.key === 'Enter') { openDialog(5); }"
            tabindex="0"
            aria-label="Open image 6"
            src="Fotos/lake-2896379_1280.jpg"
            alt="Lake">

        <img
            onclick="openDialog(6)"
            onkeyup="if (event.key === 'Enter') { openDialog(6); }"
            tabindex="0"
            aria-label="Open image 7"
            src="Fotos/moorente-8783210_1280.jpg"
            alt="Eurasian coot">

        <img
            onclick="openDialog(7)"
            onkeyup="if (event.key === 'Enter') { openDialog(7); }"
            tabindex="0"
            aria-label="Open image 8"
            src="Fotos/sea-2563389_1280.jpg"
            alt="Sea">

        <img
            onclick="openDialog(8)"
            onkeyup="if (event.key === 'Enter') { openDialog(8); }"
            tabindex="0"
            aria-label="Open image 9"
            src="Fotos/snow-bunting-6781122_1280.jpg"
            alt="Snow bunting">

        <img
            onclick="openDialog(9)"
            onkeyup="if (event.key === 'Enter') { openDialog(9); }"
            tabindex="0"
            aria-label="Open image 10"
            src="Fotos/snow-leopard-cubs-8039138_1280.jpg"
            alt="Snow leopard cubs">

        <img
            onclick="openDialog(10)"
            onkeyup="if (event.key === 'Enter') { openDialog(10); }"
            tabindex="0"
            aria-label="Open image 11"
            src="Fotos/travel-8785493_1280.jpg"
            alt="Travel">

        <img
            onclick="openDialog(11)"
            onkeyup="if (event.key === 'Enter') { openDialog(11); }"
            tabindex="0"
            aria-label="Open image 12"
            src="Fotos/winter-1675197_1280.jpg"
            alt="Winter">
    `;
}
