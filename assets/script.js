// Define elements
const startPage = document.getElementById('start-game');
const startButton = document.getElementById('start-btn');
var questionContainer = document.getElementById('question-container');
var answerButtons = document.getElementById('answer-btn');
var signScore = document.getElementById('sign-score');
var viewHighscore = document.getElementById('view-highscores');
var score = 0;
var highscore = localStorage.getItem("highscore");

// startPage.setAttribute('hidden', "false");
questionContainer.setAttribute('hidden', true);
signScore.setAttribute('hidden', true);
viewHighscore.setAttribute('hidden', true);

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

// start game function
function startGame() {
    // console.log('started');
    startPage.setAttribute("hidden", true)
    // startPage.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0

    // questionContainer.classList.remove('hide')
    // startPage.style.display = 'none';
    nextQuestion()
    // startTimer()
    // need a getscore() function that tracks true/false/correct responses
}

function nextQuestion(){
    console.log("questions should appear");

    questionContainer.setAttribute('hidden', false)
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function startTimer(){

}

function showQuestion(){
    console.log('question here');
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