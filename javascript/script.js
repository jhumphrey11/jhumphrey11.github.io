
const imageElement = document.getElementById("mainImage");

imageElement.addEventListener("mouseover", () => {
    imageElement.src = "image2.jpg"; // Image changes when mouse is over
});

imageElement.addEventListener("mouseout", () => {
    imageElement.src = "image1.jpg"; // Image changes back when mouse leaves
});
