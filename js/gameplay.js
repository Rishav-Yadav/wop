// Array of embed video URLs
const videos = [
  "https://www.youtube.com/embed/FYwORBMnDmE?si=xVVviq71p9ldgNkV",
  "https://www.youtube.com/embed/RZbvfospEC4?si=m1FLiXl_zD7plags",
  "https://www.youtube.com/embed/0K88gphhsAA?si=9JwhmGpq8HrYM4yo",
  "https://www.youtube.com/embed/B8sRJBExV7A?si=vDv0Y0uX50yBOn2a",
  "https://www.youtube.com/embed/rzkchbwih7g?si=2P7-VhDocUWkC5_1",
];

let currentVideoIndex = 0;

// Function to load the current video
function loadVideo(index) {
  const iframe = document.getElementById("video-embed"); // Select the iframe element
  iframe.src = videos[index]; // Set the iframe's src to the current video
}

// Show the first video on page load
window.onload = function () {
  loadVideo(currentVideoIndex);
};

// Show the next video
function nextVideo() {
  currentVideoIndex++;
  if (currentVideoIndex >= videos.length) {
    currentVideoIndex = 0; // Go back to the first video if it's the last video
  }
  loadVideo(currentVideoIndex);
}

// Show the previous video
function prevVideo() {
  currentVideoIndex--;
  if (currentVideoIndex < 0) {
    currentVideoIndex = videos.length - 1; // Go to the last video if it's the first video
  }
  loadVideo(currentVideoIndex);
}
function unmuteVideo() {
  var video = document.getElementById("backgroundVideo");
  const button = document.getElementById("unmuteButton");
  video.muted = false; // Unmute the video when the button is clicked
  button.style.display = "none";
}
