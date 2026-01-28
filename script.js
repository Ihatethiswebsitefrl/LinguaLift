let testIndex = 0;
let knownCount = 0;
let currentLevel = 1;
let practiceIndex = 0;
let wrongAttempts = 0;

const testWords = ["Feliz", "Dudar", "Elocuencia", "Prudente", "Abstruso"];

function startPlacementTest() {
  testIndex = 0;
  knownCount = 0;
  // UI logic: Hide intro, show test
  document.getElementById("intro-card").classList.add("hidden");
  document.getElementById("test-card").classList.remove("hidden");
  showNextTestWord();
}

function showNextTestWord() {
  if (testIndex < testWords.length) {
    document.getElementById("test-word").innerText = `¿Conoces esta palabra?: ${testWords[testIndex]}`;
    document.getElementById("test-progress").innerText = `Palabra ${testIndex + 1} de ${testWords.length}`;
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
  else if (knownCount == 2) currentLevel = 2;
  else if (knownCount == 3) currentLevel = 3;
  else if (knownCount == 4) currentLevel = 4;
  else currentLevel = 5;

  practiceIndex = 0;
  document.getElementById("placement-section").classList.add("hidden");
  document.getElementById("practice").classList.remove("hidden");
  showPracticeQuestion();
}

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

  const questionData = questions[practiceIndex];
  wrongAttempts = 0;

  document.getElementById("contextParagraph").innerText = questionData.paragraph;
  document.getElementById("questionText").innerText = `Definición de "${questionData.question}":`;

  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";
  document.getElementById("nextBtn").classList.add("hidden");

  questionData.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.onclick = () => checkAnswer(index, questionData.correct);
    choicesContainer.appendChild(btn);
  });
}

function checkAnswer(selectedIndex, correctIndex) {
  const buttons = document.getElementById("choices").getElementsByTagName("button");
  const selectedBtn = buttons[selectedIndex];

  if (selectedIndex === correctIndex) {
    selectedBtn.style.background = "#4caf50"; // Green for success
    for (let btn of buttons) btn.disabled = true;
    document.getElementById("nextBtn").classList.remove("hidden");
  } else {
    wrongAttempts++;
    selectedBtn.style.background = "#f44336"; // Red for wrong
    selectedBtn.disabled = true;

    if (wrongAttempts >= 2) {
      buttons[correctIndex].style.background = "#4caf50";
      for (let btn of buttons) btn.disabled = true;
      document.getElementById("nextBtn").classList.remove("hidden");
    }
  }
}

function nextQuestion() {
  practiceIndex++;
  showPracticeQuestion();
}
