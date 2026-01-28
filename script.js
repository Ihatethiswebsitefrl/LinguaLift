// =====================
// PRETEST WORDS
// =====================
const pretestWords = [
  // Level 1
  { word: "afirmación", level: 1 },
  { word: "estupendo", level: 1 },
  { word: "inigualable", level: 1 },
  // Level 2
  { word: "omnipresente", level: 2 },
  { word: "penetrante", level: 2 },
  { word: "panorámico", level: 2 },
  // Level 3
  { word: "profundidad", level: 3 },
  { word: "vasallo", level: 3 },
  { word: "descaro", level: 3 },
  // Level 4
  { word: "neófito", level: 4 },
  { word: "paleto", level: 4 },
  { word: "exacerbar", level: 4 },
  // Level 5
  { word: "inconmensurable", level: 5 },
  { word: "abrogar", level: 5 },
  { word: "consanguinidad", level: 5 }
];

let pretestIndex = 0;
let pretestScore = 0;

// Start Pretest
function startPlacementTest() {
  pretestIndex = 0;
  pretestScore = 0;
  document.getElementById("intro-card").classList.add("hidden");
  document.getElementById("test-card").classList.remove("hidden");
  showNextPretestWord();
}

// Show Next Word
function showNextPretestWord() {
  if (pretestIndex < pretestWords.length) {
    const currentWord = pretestWords[pretestIndex].word;
    document.getElementById("test-word").innerText = 
      `¿Conoces esta palabra?: ${currentWord}`;
  } else {
    finalizePretest();
  }
}

// Handle User Response
function handleTestResponse(isKnown) {
  if (isKnown) pretestScore++;
  pretestIndex++;
  showNextPretestWord();
}

// Map Pretest Results to Level
function finalizePretest() {
  // Calculate approximate level based on score
  if (pretestScore <= 3) currentLevel = 1;
  else if (pretestScore <= 6) currentLevel = 2;
  else if (pretestScore <= 9) currentLevel = 3;
  else if (pretestScore <= 12) currentLevel = 4;
  else currentLevel = 5;

  document.getElementById("level-num").innerText = currentLevel;
  document.getElementById("level-badge").classList.remove("hidden");

  document.getElementById("placement-section").classList.add("hidden");
  document.getElementById("practice").classList.remove("hidden");

  practiceIndex = 0;
  showPracticeQuestion(); // pulls from words.js
}
