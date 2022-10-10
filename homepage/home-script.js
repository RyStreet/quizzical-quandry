const startButton = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const questionContainer = document.getElementById("container");
const questionEl = document.getElementById("question");
const answerBtnEl = document.getElementById("answer-btns");
const highScore = document.getElementById('highScoreContainer');

var randomQuestions, currentQuestionIndex

// Timer Variables//
const countdownEl = document.getElementById('countdown');
const countdownSeconds = document.getElementById('countdownSeconds');
let time = 60;

// correct / wrong answer variables//

const statusCorrect = document.getElementById('correctAnswer');
const statusWrong = document.getElementById('wrongAnswer');

//Timer function//
function startCountdown() {
var timer = setInterval(updateCountdown, 1000);
function updateCountdown(){
    countdownSeconds.innerHTML = `${time}` ;
    time--;
    // when timer hits 0, it hides the first two screens and displays final score screen//
    if (time === 0) {
    clearInterval(timer);
    countdownSeconds.innerHTML = '0';
    startScreen.classList.add('hide'); //hide start screen//
    questionContainer.classList.add("hide"); //hide question screen//
    highScoreContainer.classList.remove("hide"); //removes class hide from score screen//
    }
}
}

//Button functionality to start game and run function for next question//
startButton.addEventListener("click", startGame);
answerBtnEl.addEventListener('click', () => { //answer button click prompts next question//
    currentQuestionIndex++
    nextQuestion();
})

//Starts game, displays random question, begins the timer//
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


//List of all questions//
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
            {text: "Modulus", correct: false},
            {text: "Boolean", correct: true},
            {text: "Arithmetic", correct: false},
            {text: "Rogerian", correct: false},
        ]
    },
    {
        question: "Which of these is a JS comment:",
        answers: [
            {text: "//Comment//", correct: true},
            {text: "<!--Comment-->", correct: false},
            {text: "/*Comment*/", correct: false},
            {text: "?Comment?", correct: false},
        ]
    },
]