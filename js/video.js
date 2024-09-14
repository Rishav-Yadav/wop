const video = document.getElementById("backgroundVideo");
const unorderedList = document.getElementById("unorderedList");

// When the video ends
video.addEventListener("ended", () => {
  // Pause the video to keep the last frame
  video.pause();

  // Show the unordered list
  unorderedList.style.display = "block";
});

function unmuteVideo() {
  var video = document.getElementById("backgroundVideo");
  const button = document.getElementById("unmuteButton");
  video.muted = false; // Unmute the video when the button is clicked
  button.style.display = "none";
}

video.addEventListener("ended", () => {
  // Add a short delay before restarting the video (e.g., 2 seconds)
  setTimeout(() => {
    video.currentTime = 0; // Reset video time to the start
    video.play(); // Play the video again
  }, 2000); // 2000 milliseconds = 2 seconds
});
