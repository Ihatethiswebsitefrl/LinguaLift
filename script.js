function startPlacementTest() {
  console.log("Test started!");
  // We remove the alert to keep it smooth
  document.getElementById('intro-card').classList.add('hidden');
  document.getElementById('test-card').classList.remove('hidden');
  showNextTestWord(); // This starts the pre-test logic
}
// 1. Data Definitions
const testWords = ["Feliz", "Dudar", "Elocuencia", "Prudente", "Abstruso"];
let testIndex = 0;
let knownCount = 0;
let currentLevel = 1;
let practiceIndex = 0;
let wrongAttempts = 0; // Tracks mistakes for the "Two-Strikes" rule

const practiceQuestions = {
1: [
  { paragraph: "María estaba muy resignada después de perder el partido.", question: "¿Qué significa 'resignada'?", choices: ["Estaba muy enojada", "Aceptó la situación", "Estaba muy emocionada"], correct: 1 },
  { paragraph: "El niño estaba curioso al ver el experimento.", question: "¿Qué significa 'curioso'?", choices: ["Tenía miedo", "Quería aprender más", "Estaba aburrido"], correct: 1 },
  { paragraph: "Nunca olvidó el consejo de su abuela.", question: "¿Qué significa 'nunca'?", choices: ["Siempre", "En algunas ocasiones", "En ningún momento"], correct: 2 },
  { paragraph: "El perro estaba feliz al ver a su dueño.", question: "¿Qué expresa 'feliz'?", choices: ["Tristeza", "Alegría", "Cansancio"], correct: 1 },
  { paragraph: "Ana aceptó la invitación sin dudar.", question: "¿Qué significa 'aceptó'?", choices: ["Rechazó", "Ignoró", "Dijo que sí"], correct: 2 }
],
2: [
  { paragraph: "Luis comenzó a dudar de su decisión.", question: "¿Qué significa 'dudar'?", choices: ["Estar seguro", "No estar seguro", "Celebrar"], correct: 1 },
  { paragraph: "Ella decidió terminar el proyecto hoy.", question: "¿Qué significa 'terminar'?", choices: ["Empezar", "Aplazar", "Finalizar"], correct: 2 },
  { paragraph: "Pedro aceptó la responsabilidad.", question: "¿Qué implica 'responsabilidad'?", choices: ["Un deber", "Una broma", "Un castigo"], correct: 0 },
  { paragraph: "El estudiante comenzó a practicar más.", question: "¿Qué significa 'comenzó'?", choices: ["Terminó", "Empezó", "Falló"], correct: 1 },
  { paragraph: "Ella tuvo paciencia con el proceso.", question: "¿Qué es 'paciencia'?", choices: ["Calma al esperar", "Enojo", "Velocidad"], correct: 0 }
],
3: [
  { paragraph: "El científico analizó los datos.", question: "¿Qué significa 'analizó'?", choices: ["Ignoró", "Estudió cuidadosamente", "Destruyó"], correct: 1 },
  { paragraph: "Su perseverancia lo ayudó a tener éxito.", question: "¿Qué es 'perseverancia'?", choices: ["Rendirse rápido", "Constancia", "Suerte"], correct: 1 },
  { paragraph: "La escritora mostró gran elocuencia.", question: "¿Qué indica 'elocuencia'?", choices: ["Claridad al hablar", "Silencio", "Confusión"], correct: 0 },
  { paragraph: "Aprendió a adaptarse a los cambios.", question: "¿Qué significa 'adaptarse'?", choices: ["Resistir", "Ajustarse", "Evitar"], correct: 1 },
  { paragraph: "Es una persona muy creativa.", question: "¿Qué describe 'creativa'?", choices: ["Imaginativa", "Perezosa", "Estricta"], correct: 0 }
],
4: [
  { paragraph: "El plan fue estratégico.", question: "¿Qué significa 'estratégico'?", choices: ["Hecho al azar", "Pensado cuidadosamente", "Improvisado"], correct: 1 },
  { paragraph: "Fue una decisión prudente.", question: "¿Qué significa 'prudente'?", choices: ["Arriesgada", "Cuidadosa", "Innecesaria"], correct: 1 },
  { paragraph: "Su opinión era subjetiva.", question: "¿Qué implica 'subjetiva'?", choices: ["Basada en hechos", "Personal", "Universal"], correct: 1 },
  { paragraph: "Mostró una actitud moderada.", question: "¿Qué significa 'moderada'?", choices: ["Extrema", "Equilibrada", "Violenta"], correct: 1 },
  { paragraph: "El análisis fue muy eficiente.", question: "¿Qué indica 'eficiente'?", choices: ["Rápido y efectivo", "Lento", "Confuso"], correct: 0 }
],
5: [
  { paragraph: "El texto era tan complejo que resultó abstruso.", question: "¿Qué significa 'abstruso'?", choices: ["Claro", "Difícil de entender", "Entretenido"], correct: 1 },
  { paragraph: "El destino parecía inexorable.", question: "¿Qué implica 'inexorable'?", choices: ["Evitable", "Inevitable", "Impredecible"], correct: 1 },
  { paragraph: "Respondió de manera parsimoniosa.", question: "¿Qué significa 'parsimoniosa'?", choices: ["Apurada", "Lenta y medida", "Emocional"], correct: 1 },
  { paragraph: "Fue un autor prolífico.", question: "¿Qué significa 'prolífico'?", choices: ["Que produce mucho", "Que produce poco", "Que copia"], correct: 0 },
  { paragraph: "Intentó elucidar el problema.", question: "¿Qué significa 'elucidar'?", choices: ["Aclarar", "Ocultar", "Complicar"], correct: 0 }
]
};

// 2. Placement Test Logic
function startPlacementTest() {
testIndex = 0;
knownCount = 0;
document.getElementById('intro-card').classList.add('hidden');
document.getElementById('test-card').classList.remove('hidden');
showNextTestWord();
}

function showNextTestWord() {
if (testIndex < testWords.length) {
  document.getElementById("test-word").innerText = `¿Conoces esta palabra?: ${testWords[testIndex]}`;
  document.getElementById("test-progress").innerText = `Palabra ${testIndex + 1} de ${testWords.length}`;
} else {
  let calculatedLevel = knownCount === 0 ? 1 : knownCount;
  finishPlacementTest(calculatedLevel);
}
}

function handleTestResponse(isKnown) {
if (isKnown) knownCount++;
testIndex++;
showNextTestWord();
}

function finishPlacementTest(finalLevel) {
currentLevel = finalLevel;
practiceIndex = 0;
document.getElementById("placement-section").classList.add("hidden");
document.getElementById("practice").classList.remove("hidden");
showPracticeQuestion();
}

// 3. Practice Mode Logic
function showPracticeQuestion() {
const questionData = practiceQuestions[currentLevel][practiceIndex];
wrongAttempts = 0; // Reset mistakes for new question

document.getElementById("contextParagraph").innerText = questionData.paragraph;
document.getElementById("questionText").innerText = questionData.question;

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
  selectedBtn.style.background = "#4caf50";
  for (let btn of buttons) btn.disabled = true;
  document.getElementById("nextBtn").classList.remove("hidden");
} else {
  wrongAttempts++;
  selectedBtn.style.background = "#f44336";
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
if (practiceIndex < practiceQuestions[currentLevel].length) {
  showPracticeQuestion();
} else {
  // Show a final message inside the app div
  document.getElementById("practice").innerHTML = `<h2>¡Nivel ${currentLevel} completado!</h2><button onclick="location.reload()">Reiniciar</button>`;
}
}
