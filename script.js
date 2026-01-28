// ==========================
// script.js
// ==========================

let testWords = [];
let testMapping = []; // Which level each word belongs to
let levelScore = {1:0,2:0,3:0,4:0,5:0};
let testIndex = 0;
let currentLevel = 1;
let practiceIndex = 0;
let wrongAttempts = 0;

// --------------------------
// Define the 15 pretest words
// --------------------------
const pretestWords = {
  1: ["Afirmación", "Asombroso", "Inigualable"],
  2: ["Omnipresente", "Picante", "Panorámico"],
  3: ["Profundidad", "Vasallo", "Descaro"],
  4: ["Neófito", "Palurdo", "Exacerbar"],
  5: ["Inconmensurable", "Abrogar", "Consanguinidad"]
};

// --------------------------
// HTML elements
// --------------------------
const startBtn = document.getElementById("startTestBtn");
const knowBtn = document.getElementById("knowBtn");
const dontKnowBtn = document.getElementById("dontKnowBtn");
const testWordEl = document.getElementById("test-word");
const levelBadge = document.getElementById("level-badge");
const levelNumEl = document.getElementById("level-num");
const placementSection = document.getElementById("placement-section");
const testCard = document.getElementById("test-card");
const practiceDiv = document.getElementById("practice");
const contextParagraph = document.getElementById("contextParagraph");
const questionText = document.getElementById("questionText");
const choicesDiv = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");

// --------------------------
// Event listeners
// --------------------------
startBtn.addEventListener("click", startPlacementTest);
knowBtn.addEventListener("click", ()=>handleTestResponse(true));
dontKnowBtn.addEventListener("click", ()=>handleTestResponse(false));
nextBtn.addEventListener("click", nextQuestion);

// --------------------------
// Functions
// --------------------------
function startPlacementTest() {
  // Build the pretest arrays
  testWords = [];
  testMapping = [];
  for (let lvl = 1; lvl <= 5; lvl++) {
    pretestWords[lvl].forEach(word => {
      testWords.push(word);
      testMapping.push(lvl);
    });
  }

  // Reset counters
  testIndex = 0;
  levelScore = {1:0,2:0,3:0,4:0,5:0};

  // Show the first test word
  placementSection.querySelector("#intro-card").classList.add("hidden");
  testCard.classList.remove("hidden");
  showNextTestWord();
}

function showNextTestWord() {
  if (testIndex < testWords.length) {
    testWordEl.innerText = `¿Conoces esta palabra?: ${testWords[testIndex]}`;
  } else {
    finishPretest();
  }
}

function handleTestResponse(isKnown) {
  if (isKnown) {
    const lvl = testMapping[testIndex];
    levelScore[lvl]++;
  }
  testIndex++;
  showNextTestWord();
}

function finishPretest() {
  // Determine user level by max score
  let maxLevel = 1;
  let maxScore = 0;
  for (let lvl = 1; lvl <= 5; lvl++) {
    if (levelScore[lvl] > maxScore) {
      maxScore = levelScore[lvl];
      maxLevel = lvl;
    }
  }
  currentLevel = maxLevel;

  // Show practice section
  levelNumEl.innerText = currentLevel;
  levelBadge.classList.remove("hidden");
  placementSection.classList.add("hidden");
  practiceDiv.classList.remove("hidden");

  practiceIndex = 0;
  showPracticeQuestion();
}

function showPracticeQuestion() {
  const questions = practiceQuestions[currentLevel]; // From words.js
  if (!questions || practiceIndex >= questions.length) {
    practiceDiv.innerHTML = `<h2>¡Nivel ${currentLevel} completado!</h2>
      <button onclick="location.reload()">Reiniciar</button>`;
    return;
  }

  const q = questions[practiceIndex];
  wrongAttempts = 0;

  contextParagraph.innerText = q.paragraph;
  questionText.innerText = q.question;

  choicesDiv.innerHTML = "";
  nextBtn.classList.add("hidden");

  q.choices.forEach((choice, i)=>{
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.onclick = () => checkAnswer(i, q.correct);
    choicesDiv.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  const buttons = document.querySelectorAll("#choices button");
  if (selected === correct) {
    buttons[selected].style.background = "#4caf50";
    buttons.forEach(b => b.disabled = true);
    nextBtn.classList.remove("hidden");
  } else {
    buttons[selected].style.background = "#f44336";
    buttons[selected].disabled = true;
    wrongAttempts++;
    if (wrongAttempts >= 2) {
      const q = practiceQuestions[currentLevel][practiceIndex];
      buttons[q.correct].style.background = "#4caf50";
      buttons.forEach(b => b.disabled = true);
      nextBtn.classList.remove("hidden");
    }
  }
}

function nextQuestion() {
  practiceIndex++;
  showPracticeQuestion();
}
