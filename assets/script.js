// Define elements
const startPage = document.getElementById('start-game');
const startButton = document.getElementById('start-btn');
var questionContainer = document.getElementById('question-container');
var quizQuestion = document.getElementById('quiz-question');
// var answerButtons = document.getElementById('answer-btn');
var answerBTNa = document.getElementById('answer-btn-a');
var answerBTNb = document.getElementById('answer-btn-b');
var answerBTNc = document.getElementById('answer-btn-c');
var answerBTNd = document.getElementById('answer-btn-d');
var signScore = document.getElementById('sign-score');
var viewHighscore = document.getElementById('view-highscores');
var score = 0;
var highscore = localStorage.getItem("highscore");

// startPage.setAttribute('hidden', "false");
questionContainer.setAttribute('style', 'display:none');
signScore.setAttribute('style', 'display: none;');
viewHighscore.setAttribute('style', 'display: none;');

// Question pool (array)
var questions = [
    {
        question: 'Which of the following is an HTML semantic element?',
        answerA: ['span'],
        answerB: ['article'],
        answerC: ['class'],
        answerD: ['div'],
        // answers: [
        //     ,
        //     ',
        //     ,
        // ],
        correct: 'article'
    },
    {
        question: 'Which of the following shows the correct way to write class="Code-Mania"?',
        answerA: ['#Code-Mania'],
        answerB: ['#code-mania'],
        answerC: ['.Code-Mania'],
        answerD: ['Code-Mania'],
        // answers: [
        //     ,
        //     ,
        //     ,
            
        // ],
        correct: '.Code-Mania'
    },
    {
        question: 'What is the purpose of a Boolean() function?',
        answerA: ['to find out if an expression is true'],
        answerB: ['to hold a list of values'],
        answerC: ['to run the same code over and over again'],
        answerD: ['to hold key-value pairs'],
        // answers: [
        //     ,
        //     ,
        //     ,
            
        // ],
        correct: 'to find out if an expression is true'
    },
    {
        question: 'Which of the following is not a part of the CSS Box Model?',
        answerA: ['margin'],
        answerB: ['card'],
        answerC: ['padding'],
        answerD: ['border'],
        // answers: [
        //     ,
        //     ,
        //     ,
            
        // ],
        correct: 'card'
    },
    {
        question: 'Where, in an HTML sheet, should a css stylesheet be linked?',
        answerA: ['header'],
        answerB: ['body'],
        answerC: ['footer'],
        answerD: ['head'],
        // answers: [
        //     ,
        //     ,
        //     ,
            
        // ],
        correct: 'head'
    },
    {
        question: 'Which Javascript assignment operator assigns a remainder to a variable?',
        answerA: ['+='],
        answerB: ['/='],
        answerC: ['-='],
        answerD: ['%='],
        // answers: [
        //     ,
        //     ,
        //     ,
            
        // ],
        correct: '%='
    }
]

// init function (might not need)

// Start Game
startButton.addEventListener("click", startGame);

function startGame() {
    startPage.setAttribute('style', 'display: none;')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    nextQuestion()
    // startTimer()
    // need a getscore() function that tracks true/false/correct responses
}

function startTimer(){

}

function nextQuestion(){
    console.log("questions should appear");

    questionContainer.setAttribute('style', 'display: block;')

    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(){
    console.log('question here');
    quizQuestion.textContent=questions[currentQuestionIndex].question;
    // answerButtons.textContent=questions[currentQuestionIndex].answers;
    // quizQuestion.innerText=questions.question;
    answerBTNa.textContent=questions[currentQuestionIndex].answerA;
    answerBTNb.textContent=questions[currentQuestionIndex].answerB;
    answerBTNc.textContent=questions[currentQuestionIndex].answerC;
    answerBTNd.textContent=questions[currentQuestionIndex].answerD;
}

// // Add up correct answers
// answerButtons.addEventListener('click', selectAnswer());
// function selectAnswer() {

// }


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