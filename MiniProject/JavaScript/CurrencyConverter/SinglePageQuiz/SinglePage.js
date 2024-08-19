const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Jane Austen", "J.K. Rowling", "Ernest Hemingway"],
        correct: 0
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mars", "Venus", "Mercury", "Earth"],
        correct: 2
    }
];

const questionsContainer = document.getElementById('questions-container');
const submitBtn = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score-container');

questions.forEach((q, questionIndex) => {
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `<h3>${q.question}</h3>`;
    
    q.options.forEach((option, optionIndex) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option';
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(optionButton, questionIndex, optionIndex);
        questionElement.appendChild(optionButton);
    });
    
    questionsContainer.appendChild(questionElement);
});

let score = 0;

function checkAnswer(button, questionIndex, optionIndex) {
    const correctIndex = questions[questionIndex].correct;
    if (optionIndex === correctIndex) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
        const correctButton = button.parentElement.children[correctIndex];
        correctButton.classList.add('correct');
    }
    // Disable all options after an answer is selected
    Array.from(button.parentElement.children).forEach(btn => {
        btn.disabled = true;
    });
}

submitBtn.onclick = () => {
    score = 0;
    questions.forEach((q, questionIndex) => {
        const selectedOption = Array.from(document.getElementsByClassName('question')[questionIndex].children)
            .find(button => button.classList.contains('correct'));
        if (selectedOption && q.options.indexOf(selectedOption.textContent) === q.correct) {
            score++;
        }
    });
    scoreContainer.textContent = `Your score is ${score} out of ${questions.length}`;
};
