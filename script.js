// Sample words for 2 levels
const levels = {
  1: [
    { word: "casa", definition: "House" },
    { word: "libro", definition: "Book" },
    { word: "perro", definition: "Dog" }
  ],
  2: [
    { word: "desempeñar", definition: "To perform / carry out" },
    { word: "sopesar", definition: "To weigh / consider" },
    { word: "inefable", definition: "Indescribable / beyond words" }
  ]
};

let currentLevel = 1;
let currentIndex = 0;

// Show first word
document.getElementById("word").textContent = levels[currentLevel][currentIndex].word;

// Show definition
function showDefinition() {
  document.getElementById("definition").textContent =
    levels[currentLevel][currentIndex].definition;
}

// Go to next word
function nextWord() {
  currentIndex++;
  const words = levels[currentLevel];
  if (currentIndex >= words.length) {
    currentIndex = 0;
    // Move to next level if exists
    if (levels[currentLevel + 1]) {
      currentLevel++;
      document.getElementById("level").textContent = currentLevel;
    } else {
      alert("¡Has terminado todas las palabras!");
      currentLevel = 1; // restart
    }
  }
  document.getElementById("word").textContent = levels[currentLevel][currentIndex].word;
  document.getElementById("definition").textContent = "";
}
