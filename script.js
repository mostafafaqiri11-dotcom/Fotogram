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
    "atmosphere-8752835_1280",
    "blue-tit-8521052_1280",
    "hurricane-92968_1280",
    "lake-2896379_1280",
    "moorente-8783210_1280",
    "sea-2563389_1280",
    "snow-bunting-6781122_1280",
    "snow-leopard-cubs-8039138_1280",
    "travel-8785493_1280",
    "winter-1675197_1280"
];

let currentIndex = 0;

const dialog = document.getElementById("myDialog");


function render(id) {

    for (let index = 0; index < imageSrc.length; index++) {

        if (id == index) {

            currentIndex = index;

            dialog.innerHTML = setTag(
                currentIndex,
                imageSrc[currentIndex],
                imageAlt[currentIndex]
            );

            dialog.showModal();
            return;
        }


        if (id === "previous") {

            currentIndex = currentIndex - 1;

            if (currentIndex < 0) {
                currentIndex = imageSrc.length - 1;
            }

            dialog.innerHTML = setTag(
                currentIndex,
                imageSrc[currentIndex],
                imageAlt[currentIndex]
            );

            return;
        }


        if (id === "next") {

            currentIndex = currentIndex + 1;

            if (currentIndex >= imageSrc.length) {
                currentIndex = 0;
            }

            dialog.innerHTML = setTag(
                currentIndex,
                imageSrc[currentIndex],
                imageAlt[currentIndex]
            );

            return;
        }


        if (id === "myDialog") {
            dialog.close();
            return;
        }
    }
}


document.addEventListener("keydown", function (event) {

    if (!dialog.open) {
        return;
    }

    if (event.key === "ArrowRight") {
        render("next");
    }

    if (event.key === "ArrowLeft") {
        render("previous");
    }

    if (event.key === "Escape") {
        dialog.close();
    }
});


dialog.addEventListener("click", function (event) {

    if (event.target === dialog) {
        dialog.close();
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
                    onclick="render('myDialog')"
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
                    onclick="render('previous')"
                    class="dialog_footer_revers_arrow"
                    aria-label="revers arrow">
                </button>

                <p>
                    ${i + 1}/${imageSrc.length}
                </p>

                <button
                    onclick="render('next')"
                    class="dialog_footer_forward_arrow"
                    aria-label="forward arrow">
                </button>

            </footer>

        </main>
    `;
}