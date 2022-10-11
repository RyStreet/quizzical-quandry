const startButton = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const questionContainer = document.getElementById("container");
const questionEl = document.getElementById("question");
const answerBtnEl = document.getElementById("answer-btns");
const highScore = document.getElementById('highScoreContainer');
const scoreDisplay = document.getElementById('scoreDisplay');
const submitScore = document.getElementById('submitScore');
const userNameSpan = document.getElementById('initials-render');
const userScoreSpan = document.getElementById("score-render");
const restartGame = document.getElementById('game-reset');

var randomQuestions, currentQuestionIndex

// Timer Variables//
const countdownEl = document.getElementById('countdown');
const countdownSeconds = document.getElementById('countdownSeconds');
var timer
let time = 60;
timeSubtraction = 10;

const ansStatus = document.getElementById('answer-status');


//Timer function//
function startCountdown() {
timer = setInterval(updateCountdown, 1000);
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
     // After last question, go to highscore screen//
     if(randomQuestions.length === currentQuestionIndex){
        finished();
        renderScore();
    }
    else{ nextQuestion(); //if not last question, proceed to next//
}
}
)

//Starts game, displays random question, begins the timer//
function startGame() {
    console.log('start game');
    startScreen.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide');
    nextQuestion() //but press prompts next question function
    startCountdown() //button press begins countdown function//
}


function nextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])
}

//appends questions to buttons on question screen//
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

// removes child elements in html//
function resetState() {
    while(answerBtnEl.firstChild){
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

// Determines if button chosen is either correct or incorrect
function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct

    //displays status of answer chosen//
    if(correct){
        console.log('correct');
       ansStatus.textContent=('Correct!')
    } else {
        console.log('wrong');
        ansStatus.textContent= ('Incorrect.');
        time = time - timeSubtraction;
    }
    
    Array.from(answerBtnEl.children).forEach(button => {})
    
   
}
//goes to highscore screen, clears timer, displays score//
    function finished() {
    questionContainer.classList.add("hide");
    highScoreContainer.classList.remove("hide");
    console.log('finish')
    clearInterval(timer);
    scoreDisplay.textContent = "You Scored: " + (time * 2);
    }

submitScore.addEventListener("click", saveGame); 

    // saves score and initials in local storage, then displays them on score board//

function saveGame(e){
    e.preventDefault();
        var initials = document.getElementById('initials').value;

        localStorage.setItem("initials", initials);
        console.log("game saved")

        var score = (time * 2);
        localStorage.setItem('score', score);
        
        renderScore();
        
    }

    //pulls scores and names from local storage//
function renderScore(){
    console.log('render score')
    var initials = localStorage.getItem("initials");
    var score = localStorage.getItem('score');

    userNameSpan.textContent = initials;
    userScoreSpan.textContent = score;
}

restartGame.addEventListener('click', function startOver(){
    location.reload();
})




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