const startButton = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const questionContainer = document.getElementById("container");


startButton.addEventListener("click", startGame);

function startGame() {
    console.log('start game');
    startScreen.classList.add('hide');
    questionContainer.classList.remove('hide');
}

// function open(){
//     startScreen.classList.remove('hide')
// }

// open();
