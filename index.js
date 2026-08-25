const dialog = document.getElementById("myDialog");
const dialogTitle = document.querySelector(".dialog_header h2");
const dialogImage = document.querySelector(".dialog_section img");
const dialogNumber = document.querySelector(".dialog_footer p");
const closeButton = document.getElementById("closeDialog");
const reverseButton = document.querySelector(".dialog_footer_revers_arrow");
const forwardButton = document.querySelector(".dialog_footer_forward_arrow");

let currentImage = 1;

function showImage(number) {
    const image = document.getElementById(`image${number}`);

    dialogTitle.textContent = image.alt;
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialogNumber.textContent = `${number}/12`;

    currentImage = number;
}

for (let i = 1; i <= 12; i++) {
    document.getElementById(`image${i}`).addEventListener("click", () => {
        showImage(i);
        dialog.showModal();
    });
}

forwardButton.addEventListener("click", () => {
    if (currentImage < 12) {
        showImage(currentImage + 1);
    } else {
        showImage(1);
    }
});

reverseButton.addEventListener("click", () => {
    if (currentImage > 1) {
        showImage(currentImage - 1);
    } else {
        showImage(12);
    }
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});