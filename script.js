let testIndex = 0;
let knownCount = 0;
let currentLevel = 1;
let practiceIndex = 0;
let wrongAttempts = 0;

const testWords = ["Feliz", "Dudar", "Elocuencia", "Prudente", "Abstruso"];

/* =====================
   PLACEMENT TEST
===================== */

function startPlacementTest() {
  testIndex = 0;
  knownCount = 0;

  document.getElementById("intro-card").classList.add("hidden");
  document.getElementById("test-card").classList.remove("hidden");

  showNextTestWord();
}

function showNextTestWord() {
  if (testIndex < testWords.length) {
    document.getElementById("test-word").innerText =
      `¿Conoces esta palabra?: ${testWords[testIndex]}`;
  } else {
    mapLevelFromTest();
  }
}

function handleTestResponse(isKnown) {
  if (isKnown) knownCount++;
  testIndex++;
  showNextTestWord();
}

function mapLevelFromTest() {
  if (knownCount <= 1) currentLevel = 1;
  else if (knownCount === 2) currentLevel = 2;
  else if (knownCount === 3) currentLevel = 3;
  else if (knownCount === 4) currentLevel = 4;
  else currentLevel = 5;

  document.getElementById("level-num").innerText = currentLevel;
  document.getElementById("level-badge").classList.remove("hidden");

  practiceIndex = 0;
  document.getElementById("placement-section").classList.add("hidden");
  document.getElementById("practice").classList.remove("hidden");

  showPracticeQuestion();
}

/* =====================
   PRACTICE MODE
===================== */

function showPracticeQuestion() {
  const questions = practiceQuestions[currentLevel];

  if (!questions || practiceIndex >= questions.length) {
    document.getElementById("practice").innerHTML = `
      <h2>¡Nivel ${currentLevel} completado!</h2>
      <p>Has terminado todas las palabras de este nivel.</p>
      <button onclick="location.reload()">Reiniciar</button>
    `;
    return;
  }

  const q = questions[practiceIndex];
  wrongAttempts = 0;

  document.getElementById("contextParagraph").innerText =
    q.paragraph || q.phrase || "Lee el siguiente contexto:";

  document.getElementById("questionText").innerText =
    currentLevel >= 4 ? q.question : `Pregunta: ${q.question}`;

  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";
  document.getElementById("nextBtn").classList.add("hidden");

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.onclick = () => checkAnswer(index, q.correct);
    choicesContainer.appendChild(btn);
  });
}

function checkAnswer(selectedIndex, correctIndex) {
  const buttons = document.querySelectorAll("#choices button");

  if (selectedIndex === correctIndex) {
    buttons[selectedIndex].style.background = "#4caf50";
    buttons.forEach(btn => btn.disabled = true);
    document.getElementById("nextBtn").classList.remove("hidden");
  } else {
    wrongAttempts++;
    buttons[selectedIndex].style.background = "#f44336";
    buttons[selectedIndex].disabled = true;

    if (wrongAttempts >= 2) {
      buttons[correctIndex].style.background = "#4caf50";
      buttons.forEach(btn => btn.disabled = true);
      document.getElementById("nextBtn").classList.remove("hidden");
    }
  }
}

function nextQuestion() {
  practiceIndex++;
  showPracticeQuestion();
}
