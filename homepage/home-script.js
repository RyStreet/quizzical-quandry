const startButton = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const questionContainer = document.getElementById("container");
const questionEl = document.getElementById("question");
const answerBtnEl = document.getElementById("answer-btns");
const highScore = document.getElementById('highScoreContainer');


var randomQuestions, currentQuestionIndex

const countdownEl = document.getElementById('countdown');
const countdownSeconds = document.getElementById('countdownSeconds');
let time = 60;

function startCountdown() {
var timer = setInterval(updateCountdown, 1000);
function updateCountdown(){
    countdownSeconds.innerHTML = `${time}` ;
    time--;
    if (time === 0) {
    clearInterval(timer);
    countdownSeconds.innerHTML = '0';
    startScreen.classList.add('hide');
    questionContainer.classList.add("hide");
    highScoreContainer.classList.remove("hide");
    }
}
}


startButton.addEventListener("click", startGame);
answerBtnEl.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion();
})

function startGame() {
    console.log('start game');
    startScreen.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide');
    nextQuestion()
    startCountdown()
}

function nextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnEl.appendChild(button)
    })
   };

function resetState() {
    while(answerBtnEl.firstChild){
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    Array.from(answerBtnEl.children).forEach(button => {
    })

    // At last question, go to highscore screen//
    if(randomQuestions.length === currentQuestionIndex + 1){
    questionContainer.classList.add("hide");
    highScoreContainer.classList.remove("hide");
    }
}




const questions = [

    {
        question: "A website's building blocks uses these three languages:",
        answers:[
            { text: "HTML, Ruby, Firefox", correct: false },
            { text: "Java, CSS, HTML", correct: false},
            { text: "CSS, Javascript, HTML", correct: true},
            { text: "Javascript, CSS, HTTPS", correct: false},
        ]
    
    },
    {
        question: "The Math.floor function:",
        answers: [
            {text: "Rounds a decimal down to the nearest integer", correct: true},
            {text: "Rounds a decimal up to the nearest integer", correct: false},
            {text: "Chooses a random number from an array's floor", correct: false},
            {text: "Creates a floor for an array", correct:false},
        ]
    },
    {
        question: "This argument returns either true or false:",
        answers: [
            {text: "Boolean", correct: true},
            {text: "Modulus", correct: false},
            {text: "Arithmetic", correct: false},
            {text: "Rogerian", correct: false},
        ]
    },
]