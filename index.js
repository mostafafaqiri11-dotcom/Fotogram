let dialogRef = document.getElementById("mydialog");

function openDialog() {
    dialogRef.showModal();
}

function closeDialog() {
    console.log("Close wurde geklickt");
    dialogRef.close();
}