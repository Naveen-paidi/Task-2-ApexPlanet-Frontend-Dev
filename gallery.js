const galleryDiv = document.getElementById("gallery");
let galleryImages = JSON.parse(localStorage.getItem("gallery")) || [];

function renderGallery() {
    galleryDiv.innerHTML = "";
    if (galleryImages.length === 0) {
    galleryDiv.innerHTML = "<h3>No images in gallery yet!</h3>";
    galleryDiv.style.margin = "50px";
    return;
    }
    galleryImages.forEach((src, index) => {
    const box = document.createElement("div");
    box.classList.add("img-box");

    const img = document.createElement("img");
    img.src = src;

    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.classList.add("remove-btn");

    btn.addEventListener("click", () => {
        galleryImages.splice(index, 1);
        localStorage.setItem("gallery", JSON.stringify(galleryImages));
        renderGallery();
    });

    box.appendChild(img);
    box.appendChild(btn);
    galleryDiv.appendChild(box);
    });
}

renderGallery();