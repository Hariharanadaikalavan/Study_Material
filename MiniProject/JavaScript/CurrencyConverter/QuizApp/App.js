const questions = [
    {
        question: "What is the correct version of HTML?",
        options: ["Eight", "Seven", "Five", "Two"],
        correct: 2
    },
    {
        question: "The Captial of Indian",
        options: ["Delhi", "TamilNadu", "Kerala", "Andhra"],
        correct: 0
    },
    {
        question: "Why java is famous??",
        options: ["Open Source", "Platform depenent", "Platform Indepenent", "Memory Mangement"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let timeLeft = 10;
let timer;
let score = 0;

const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementsByClassName('option');
const timeDisplay = document.getElementById('time');
const quizContainer = document.getElementById('quiz-container');

function loadQuestion() {
    clearInterval(timer);
    if (currentQuestionIndex >= questions.length) {
        displayScore();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    for (let i = 0; i < optionsContainer.length; i++) {
        optionsContainer[i].textContent = currentQuestion.options[i];
        optionsContainer[i].onclick = checkAnswer.bind(null, i);
    }
    timeLeft = 10;
    timeDisplay.textContent = timeLeft;
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
        nextQuestion();
    }
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    nextQuestion();
}

function nextQuestion() {
    clearInterval(timer);
    currentQuestionIndex++;
    loadQuestion();
}

function displayScore() {
    quizContainer.innerHTML = `<h2>Your score is ${score} out of ${questions.length}</h2>`;
}

loadQuestion();
