let currentQuestionIndex = 0;
let score = 0;

const quizQuestions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    choices: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is the capital of Japan?",
    choices: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
    answer: "Tokyo"
  }
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");

function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  choicesElement.innerHTML = "";
  currentQuestion.choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => selectAnswer(choice));
    choicesElement.appendChild(li);
  });
}

function selectAnswer(selectedChoice) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (selectedChoice === currentQuestion.answer) {
    score++;
  }
  nextBtn.style.display = "block";
}

function showScore() {
  scoreContainer.style.display = "block";
  scoreElement.textContent = `Your score: ${score}/${quizQuestions.length}`;
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
    nextBtn.style.display = "none";
  } else {
    document.getElementById("question-container").style.display = "none";
    showScore();
    nextBtn.style.display = "none";
  }
});

displayQuestion();
