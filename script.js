// ==========================
// script.js (cleaned)
// ==========================

let testWords = [];
let testMapping = [];
let levelScore = {1:0,2:0,3:0,4:0,5:0};
let testIndex = 0;
let currentLevel = 1;
let practiceIndex = 0;
let wrongAttempts = 0;

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
const currentWordEl = document.getElementById("current-word");


// --------------------------
// Pretest words
// --------------------------
const pretestWords = {
  1: ["Afirmación", "Asombroso", "Inigualable"],
  2: ["Omnipresente", "Picante", "Panorámico"],
  3: ["Profundidad", "Vasallo", "Descaro"],
  4: ["Neófito", "Palurdo", "Exacerbar"],
  5: ["Inconmensurable", "Abrogar", "Consanguinidad"]
};

// --------------------------
// Event listeners
// --------------------------
startBtn.addEventListener("click", startPlacementTest);
knowBtn.addEventListener("click", ()=>handleTestResponse(true));
dontKnowBtn.addEventListener("click", ()=>handleTestResponse(false));
nextBtn.addEventListener("click", nextQuestion);

// ==========================
// Placement Test Functions
// ==========================
function startPlacementTest() {
  testWords = [];
  testMapping = [];

  for (let lvl = 1; lvl <= 5; lvl++) {
    pretestWords[lvl].forEach(word => {
      testWords.push(word);
      testMapping.push(lvl);
    });
  }

  testIndex = 0;
  levelScore = {1:0,2:0,3:0,4:0,5:0};

  document.getElementById("intro-card").classList.add("hidden");
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
  let maxLevel = 1;
  let maxScore = 0;
  for (let lvl = 1; lvl <= 5; lvl++) {
    if (levelScore[lvl] > maxScore) {
      maxScore = levelScore[lvl];
      maxLevel = lvl;
    }
  }
  currentLevel = maxLevel;

  levelNumEl.innerText = currentLevel;
  levelBadge.classList.remove("hidden");
  placementSection.classList.add("hidden");
  practiceDiv.classList.remove("hidden");

  practiceIndex = 0;
  showPracticeQuestion();
}

// ==========================
// Practice Questions Functions
// ==========================
function showPracticeQuestion() {
    // Safety check: ensure practiceQuestions exists
    if (typeof practiceQuestions === "undefined" || !practiceQuestions[currentLevel]) {
        practiceDiv.innerHTML = `<h2>No hay preguntas disponibles para el Nivel ${currentLevel}.</h2>
          <button onclick="location.reload()">Reiniciar</button>`;
        return;
    }

    const questions = practiceQuestions[currentLevel];

    if (practiceIndex >= questions.length) {
        practiceDiv.innerHTML = `<h2>¡Nivel ${currentLevel} completado!</h2>
          <button onclick="location.reload()">Reiniciar</button>`;
        return;
    }

    const q = questions[practiceIndex];
    wrongAttempts = 0;

    // Show the current word from words.js
    currentWordEl.innerText = q.word || "(sin palabra)";

    // Fade effect for paragraph & choices
    contextParagraph.style.opacity = 0;
    choicesDiv.style.opacity = 0;

    setTimeout(() => {
        contextParagraph.innerText = q.paragraph || "(No hay párrafo disponible)";
        questionText.innerText = q.question || "(No hay pregunta disponible)";

        choicesDiv.innerHTML = "";
        q.choices.forEach((choice, i) => {
            const btn = document.createElement("button");
            btn.innerText = choice;
            btn.onclick = () => checkAnswer(i, q.correct);
            choicesDiv.appendChild(btn);
        });

        contextParagraph.style.opacity = 1;
        choicesDiv.style.opacity = 1;
    }, 100);
    
    nextBtn.classList.add("hidden");
}


function nextQuestion() {
  practiceIndex++;
  showPracticeQuestion();
}


