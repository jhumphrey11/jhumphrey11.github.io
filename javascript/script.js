const mainImage = document.getElementById("mainImage");
const hoverImage = document.getElementById("hoverImage");

// When mouse hovers over the image, show the second image
mainImage.addEventListener("mouseover", () => {
  mainImage.style.display = "none"; // Hide the first image
  hoverImage.style.display = "block"; // Show the second image
});

// When mouse leaves the image, show the first image again
mainImage.addEventListener("mouseout", () => {
  mainImage.style.display = "block"; // Show the first image
  hoverImage.style.display = "none"; // Hide the second image
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
