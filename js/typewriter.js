function typeWords() {
  // Grab the span element and its data-words attribute
  const txtType = document.querySelector(".txt-type");
  const words = JSON.parse(txtType.getAttribute("data-words"));
  const waitTime = parseInt(txtType.getAttribute("data-wait"), 10) || 300;

  // Get the container where words will be displayed
  const container = document.getElementById("word-container");

  let fontSize = 30; // Starting font size in pixels
  let currentWordIndex = 0; // Track the current word
  let currentLetterIndex = 0; // Track the letter of the current word
  let typingInterval; // Store the interval for typing speed
  let isDeleting = false; // No deletion needed now

  // Store all word divs for continuous display without deleting previous ones
  const wordDivs = words.map((word, i) => {
    const wordDiv = document.createElement("div");
    wordDiv.style.fontSize = `${fontSize * Math.pow(2, i)}px`;
    container.appendChild(wordDiv);
    return wordDiv;
  });

  function type() {
    // Get the current word and its corresponding div
    const currentWord = words[currentWordIndex];
    const currentDiv = wordDivs[currentWordIndex];

    // Typing logic: Add one more letter
    currentDiv.textContent = currentWord.slice(0, currentLetterIndex + 1);

    // If not deleting and not yet finished typing the current word
    if (currentLetterIndex < currentWord.length - 1) {
      currentLetterIndex++;
      typingInterval = waitTime;
    } else if (currentWordIndex < words.length - 1) {
      // Move to the next word when the current one is fully typed
      currentWordIndex++;
      currentLetterIndex = 0;
      typingInterval = waitTime;
    } else {
      // When all words are typed, wait and reset everything
      setTimeout(() => {
        wordDivs.forEach((div) => (div.textContent = "")); // Clear all text
        currentWordIndex = 0;
        currentLetterIndex = 0;
        type(); // Restart typing after clearing
      }, waitTime * 3); // Longer pause before restarting
      return;
    }

    setTimeout(type, typingInterval);
  }

  // Start typing
  type();
}

// Call the function to start typing effect on page load
typeWords();
