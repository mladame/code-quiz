// Define elements
var startPage = document.getElementsByClassName('start-game');
const startButton = document.getElementById('start-btn');
var score = 0;
var highscore = localStorage.getItem("highscore");

// Question pool (array)
var questions = [
    {
        title: 'Which of the following is an HTML semantic element?',
        answers: [
            'span',
            'article',
            'class',
            'div'
        ],
        correct: 'article'
    },
    {
        title: 'Which of the following shows the correct way to write class="Code-Mania"?',
        answers: [
            '#Code-Mania',
            '#code-mania',
            '.Code-Mania',
            'Code-Mania'
        ],
        correct: '.Code-Mania'
    },
    {
        title: 'What is the purpose of a Boolean() function?',
        answers: [
            'to find out if an expression is true',
            'to hold a list of values',
            'to run the same code over and over again',
            'to hold key-value pairs'
        ],
        correct: 'to find out if an expression is true'
    },
    {
        title: 'Which of the following is not a part of the CSS Box Model?',
        answers: [
            'margin',
            'card',
            'padding',
            'border'
        ],
        correct: 'card'
    },
    {
        title: 'Where, in an HTML sheet, should a css stylesheet be linked?',
        answers: [
            'header',
            'body',
            'footer',
            'head'
        ],
        correct: 'head'
    },
    {
        title: 'Which Javascript assignment operator assigns a remainder to a variable?',
        answers: [
            '+=',
            '/=',
            '-=',
            '%='
        ],
        correct: '%='
    }
]

// init function (might not need)

// event listeners start game
startButton.addEventListener("click", startGame);
// startBtn.onclick = startGame();

// startBtn.addEventListener("click", startGame());

// startBtn.attachEvent('onclick', startGame())

// start game function
function startGame() {
    console.log('started');
    
    
}

// win game condition

// lose game function

// start timer funtion

// render question and answers

// update high score/initials and save to local storage (map)
//starter added, alter
// function setHighscore() {

//     if(highscore !== null){
//         if (score > highscore) {
//             localStorage.setItem("highscore", score);      
//         }
//     }
//     else{
//         localStorage.setItem("highscore", score);
//     }
// }






// event listener click "true" button, if else

// reset game/play again




// questions[0].answers