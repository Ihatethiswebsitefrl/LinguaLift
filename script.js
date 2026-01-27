// Expanded vocabulary with more levels for the placement test
const levels = {
  1: [
    { word: "casa", definition: "House" },
    { word: "libro", definition: "Book" },
    { word: "perro", definition: "Dog" },
    { word: "sol", definition: "Sun" },
    { word: "agua", definition: "Water" }
  ],
  2: [
    { word: "desempeñar", definition: "To perform / carry out" },
    { word: "sopesar", definition: "To weigh / consider" },
    { word: "inefable", definition: "Indescribable / beyond words" },
    { word: "ubicuidad", definition: "Ubiquity / being everywhere" },
    { word: "efímero", definition: "Ephemeral / short-lived" }
  ],
  3: [
    { word: "yuxtaposición", definition: "Juxtaposition" },
    { word: "perseverancia", definition: "Perseverance" },
    { word: "elocuencia", definition: "Eloquence" },
    { word: "concesión", definition: "Concession" },
    { word: "subyugado", definition: "Subjugated" }
  ]
};

// State management
let currentLevel = 1;
let currentIndex = 0;
let isPlacementTest = false;
let testLevel = 1;
let testIndex = 0;
const testWordsPerLevel = 2;
const totalLevels = Object.keys(levels).length;

// UI update functions
function updateUI() {
  const words = levels[currentLevel];
  document.getElementById("word").textContent = words[currentIndex].word;
  document.getElementById("definition").textContent = "";
  document.getElementById("level").textContent = currentLevel;
  
  if (document.getElementById("current-word-num")) {
    document.getElementById("current-word-num").textContent = currentIndex + 1;
    document.getElementById("total-words-num").textContent = words.length;
  }
}

// Placement Test Logic
function startPlacementTest() {
  isPlacementTest = true;
  testLevel = 1;
  testIndex = 0;
  document.getElementById("intro-card").classList.add("hidden");
  document.getElementById("test-card").classList.remove("hidden");
  showNextTestWord();
}

function showNextTestWord() {
  const words = levels[testLevel];
  document.getElementById("test-word").textContent = words[testIndex].word;
  document.getElementById("test-progress").textContent = `Evaluando nivel ${testLevel}...`;
}

function handleTestResponse(known) {
  if (known) {
    // If they know it, move to next index or next level
    testIndex++;
    if (testIndex >= testWordsPerLevel) {
      if (testLevel < totalLevels) {
        testLevel++;
        testIndex = 0;
      } else {
        finishPlacementTest(testLevel);
        return;
      }
    }
  } else {
    // If they don't know it, their level is the one before this one (or level 1)
    finishPlacementTest(Math.max(1, testLevel));
    return;
  }
  showNextTestWord();
}

function finishPlacementTest(finalLevel) {
  isPlacementTest = false;
  currentLevel = finalLevel;
  currentIndex = 0;
  
  document.getElementById("placement-section").classList.remove("active");
  document.getElementById("placement-section").classList.add("hidden");
  document.getElementById("learning-section").classList.remove("hidden");
  
  alert(`Tu nivel inicial es: ${finalLevel}`);
  updateUI();
}

// Learning Mode functions
function showDefinition() {
  document.getElementById("definition").textContent =
    levels[currentLevel][currentIndex].definition;
}

function nextWord() {
  currentIndex++;
  const words = levels[currentLevel];
  if (currentIndex >= words.length) {
    currentIndex = 0;
    if (levels[currentLevel + 1]) {
      currentLevel++;
    } else {
      alert("¡Has terminado todas las palabras!");
      currentLevel = 1;
    }
  }
  updateUI();
}

// Initialize
window.onload = () => {
  // If we wanted to skip test, we'd call updateUI() here
};
