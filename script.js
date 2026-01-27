// ==========================
// Levels for Placement Test
// ==========================
const levels = {
  1: ["casa", "libro", "perro"],
  2: ["desempeñar", "sopesar", "inefable"],
  3: ["yuxtaposición", "perseverancia", "elocuencia"]
};

// ==========================
// State
// ==========================
let currentLevel = 1;
let testIndex = 0;
let practiceIndex = 0;

// ==========================
// Practice Questions
// ==========================
const practiceQuestions = {
  1: [
    {
      paragraph: "María estaba muy resignada después de perder el partido de futbol.",
      question: "¿Qué significa 'resignada' en este contexto?",
      choices: [
        "Maria se sintió muy cansada después del partido.",
        "Maria aceptó perder su partido de futbol",
        "Maria se sintió muy feliz después del partido."
      ],
      correct: 1
    },
    {
      paragraph: "El gato estaba muy curioso al ver el nuevo juguete.",
      question: "¿Qué significa 'curioso' aquí?",
      choices: ["Curioso", "Perezoso", "Hambriento"],
      correct: 0
    }
  ]
};

// ==========================
// Placement Test Logic
// ==========================
function startPlacementTest() {
  document.getElementById("intro-card").classList.add("hidden");
  document.getElementById("test-card").classList.remove("hidden");
  testIndex = 0;
  currentLevel = 1;
  showNextTestWord();
}

function showNextTestWord() {
  const words = levels[currentLevel];
  if (testIndex >= words.length) {
    finishPlacementTest(currentLevel);
    return;
  }
  document.getElementById("test-word").textContent = words[testIndex];
  document.getElementById("test-progress").textContent = `Palabra ${testIndex + 1} de ${words.length} del nivel ${currentLevel}`;
}

function handleTestResponse(known) {
  if (known) {
    testIndex++;
    if (testIndex >= levels[currentLevel].length && currentLevel < Object.keys(levels).length) {
      currentLevel++;
      testIndex = 0;
    }
  } else {
    finishPlacementTest(currentLevel);
    return;
  }
  showNextTestWord();
}

function finishPlacementTest(finalLevel) {
  alert(`Tu nivel inicial es: Nivel ${finalLevel}`);
  currentLevel = 1; // Always start practice at level 1
  testIndex = 0;

  document.getElementById("placement-section").classList.add("hidden");
  document.getElementById("practice").classList.remove("hidden");
  practiceIndex = 0;
  showPracticeQuestion();
}

// ==========================
// Show Practice Question
// ==========================
function showPracticeQuestion() {
  const questions = practiceQuestions[currentLevel];
  if (practiceIndex >= questions.length) {
    document.getElementById("practice").innerHTML =
      "<h2>¡Felicidades! Has terminado la práctica.</h2>";
    return;
  }

  const q = questions[practiceIndex];
  document.getElementById("contextParagraph").textContent = q.paragraph;
  document.getElementById("questionText").textContent = q.question;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  q.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(i);
    choicesDiv.appendChild(btn);
  });

  document.getElementById("nextBtn").classList.add("hidden");
}

// ==========================
// Check Answer
// ==========================
function checkAnswer(selectedIndex) {
  const questions = practiceQuestions[currentLevel];
  const q = questions[practiceIndex];
  if (selectedIndex === q.correct) {
    alert("¡Correcto! ✔️");
  } else {
    alert(`¡Incorrecto! ❌ La respuesta correcta es "${q.choices[q.correct]}"`);
  }
  document.getElementById("nextBtn").classList.remove("hidden");
}

// ==========================
// Next Question
// ==========================
function nextQuestion() {
  practiceIndex++;
  showPracticeQuestion();
}
