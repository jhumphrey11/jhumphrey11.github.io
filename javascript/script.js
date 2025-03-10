
const imageElement = document.getElementById("mainImage");

imageElement.addEventListener("mouseover", () => {
    imageElement.src = "image2.jpg"; // Image changes when mouse is over
});

imageElement.addEventListener("mouseout", () => {
    imageElement.src = "image1.jpg"; // Image changes back when mouse leaves
});

/* the video container */
.video-container {
    width: 80%; 
    margin: 0 auto; /* Center the video on the page */
    text-align: center;
}

video {
    border-radius: 10px; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
