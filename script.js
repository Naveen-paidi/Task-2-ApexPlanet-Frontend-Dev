const canvas = document.getElementById("canvas");
const canvasContainer = document.querySelector(".canvasContainer");


const ctx = canvas.getContext('2d');
let image = new Image();

document.getElementById('upload').addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        image.src = e.target.result;
    }

    reader.readAsDataURL(file);
});

image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);
    canvasContainer.style.display = "block";
}

function applyFilters() {
    const brightness = document.getElementById("brightness").value;
    const contrast = document.getElementById("contrast").value;
    const grayscale = document.getElementById("grayscale").value;

    ctx.filter = `
    brightness(${brightness}%)
    contrast(${contrast}%)
    grayscale(${grayscale}%)
    `

    ctx.drawImage(image, 0, 0);
}

document.getElementById("brightness").addEventListener("input", applyFilters);
document.getElementById("contrast").addEventListener("input", applyFilters);
document.getElementById("grayscale").addEventListener("input", applyFilters);

document.getElementById("download").addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = "edited-image.png";

    link.click();
});

let galleryImages = JSON.parse(localStorage.getItem("gallery")) || [];

document.getElementById("add-to-gallery").addEventListener("click", () => {
    const canvas = document.getElementById("canvas");
    const imgData = canvas.toDataURL("image/jpeg", 0.7);

    galleryImages.push(imgData);

    localStorage.setItem("gallery", JSON.stringify(galleryImages));

    alert("Image added to gallery!");
});

const viewGalleryBtn = document.getElementById("view-gallery");
viewGalleryBtn.addEventListener("click", () => {
    window.location = "gallery.html";
});
