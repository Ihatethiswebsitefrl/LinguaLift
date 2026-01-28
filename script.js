// Variables
const testWords = ["Feliz", "Dudar", "Elocuencia", "Prudente", "Abstruso"];
let testIndex = 0;
let knownCount = 0;
let currentLevel = 1;
let practiceIndex = 0;
let wrongAttempts = 0;

// Practice Questions (Level 1 example; add more levels as needed)
const practiceQuestions = {
  1: [
    { paragraph: "María estaba muy resignada después de perder el partido.", question: "¿Qué significa 'resignada'?", choices: ["Estaba muy enojada", "Aceptó la situación", "Estaba muy emocionada"], correct: 1 },
    { paragraph: "El niño estaba curioso al ver el experimento.", question: "¿Qué significa 'curioso'?", choices: ["Tenía miedo", "Quería aprender más", "Estaba aburrido"], correct: 1 }
    // Add more questions here...
  ]
};

// DOM Elements
const startBtn = document.getElementById("startTestBtn");
const knownBtn = document.getElementById("knownBtn");
const unknownBtn = document.getElementById("unknownBtn");
const nextBtn = document.getElementById("nextBtn");

// Start Placement Test
startBtn.addEventListener("click", () => {
  document.getElementById('intro-card').classList.add('hidden');
  document.getElementById('test-card').classList.remove('hidden');
  testIndex = 0;
  knownCount = 0;
  showNextTestWord();
});

// Show next word in placement test
function showNextTestWord() {
  if (testIndex < testWords.length) {
    document.getElementById("test-word").innerText = `¿Conoces esta palabra?: ${testWords[testIndex]}`;
    document.getElementById("test-progress").innerText = `Palabra ${testIndex + 1} de ${testWords.length}`;
  } else {
    let calculatedLevel = knownCount === 0 ? 1 : knownCount;
    finishPlacementTest(calculatedLevel);
  }
}

// Handle user response
knownBtn.addEventListener("click", () => handleTestResponse(true));
unknownBtn.addEventListener("click", () => handleTestResponse(false));

function handleTestResponse(isKnown) {
  if (isKnown) knownCount++;
  testIndex++;
  showNextTestWord();
}

// Finish placement test and start practice
function finishPlacementTest(finalLevel) {
  currentLevel = finalLevel;
  practiceIndex = 0;
  document.getElementById("placement-section").classList.add("hidden");
  document.getElementById("practice").classList.remove("hidden");
  showPracticeQuestion();
}

// Show practice question
function showPracticeQuestion() {
  const questionData = practiceQuestions[currentLevel][practiceIndex];
  wrongAttempts = 0;

  document.getElementById("contextParagraph").innerText = questionData.paragraph;
  document.getElementById("questionText").innerText = questionData.question;

  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";
  nextBtn.classList.add("hidden");

  questionData.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.addEventListener("click", () => checkAnswer(index, questionData.correct));
    choicesContainer.appendChild(btn);
  });
}

// Check answer
function checkAnswer(selectedIndex, correctIndex) {
  const buttons = document.getElementById("choices").getElementsByTagName("button");
  const selectedBtn = buttons[selectedIndex];

  if (selectedIndex === correctIndex) {
    selectedBtn.style.background = "#4caf50";
    for (let btn of buttons) btn.disabled = true;
    nextBtn.classList.remove("hidden");
  } else {
    wrongAttempts++;
    selectedBtn.style.background = "#f44336";
    selectedBtn.disabled = true;

    if (wrongAttempts >= 2) {
      buttons[correctIndex].style.background = "#4caf50";
      for (let btn of buttons) btn.disabled = true;
      nextBtn.classList.remove("hidden");
    }
  }
}

// Next practice question
nextBtn.addEventListener("click", () => {
  practiceIndex++;
  if (practiceIndex < practiceQuestions[currentLevel].length) {
    showPracticeQuestion();
  } else {
    document.getElementById("practice").innerHTML = `<h2>¡Nivel ${currentLevel} completado!</h2><button onclick="location.reload()">Reiniciar</button>`;
  }
});
