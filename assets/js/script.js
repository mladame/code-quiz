//* DEFINE ELEMENTS
const startCard = document.getElementById('start-game');
const startButton = document.getElementById('start-btn');

const questionContainer = document.getElementById('question-container');
const quizQuestion = document.getElementById('quiz-question');

const answerButtons = document.querySelector('.answer-btn');
const answerPool = document.getElementById('answer-pool');
const answerBTNa = document.getElementById('answer-btn-a');
const answerBTNb = document.getElementById('answer-btn-b');
const answerBTNc = document.getElementById('answer-btn-c');
const answerBTNd = document.getElementById('answer-btn-d');

const signScore = document.getElementById('sign-score');
const scoreResultDisplay = document.getElementById('score-results');
const viewHighscore = document.getElementById('view-highscores');
var scoreCounter = 0;
var highscoresArr = [];

var timerDisplay = document.getElementById('timer-count');
var time = 60;

var currentQuestionIndex = 0;
var currentQuestionNumber = 1;
var highscore = localStorage.getItem("highscore");
var initials = localStorage.getItem('initials')

//* START WORKING CODE
questionContainer.setAttribute('style', 'display:none');
signScore.setAttribute('style', 'display: none;');
viewHighscore.setAttribute('style', 'display: none;');

//* QUESTION POOL
var questions = [
    {
        question: 'Which of the following is an HTML semantic element?',
        choices: ['a. span', 'b. article', 'c. class', 'd. div'],
        correct: 'b. article'
    },
    {
        question: 'Which of the following shows the correct way to define: class="Code-Mania"?',
        answerA: ['a.  #Code-Mania'],
        answerB: ['b.  #code-mania'],
        answerC: ['c.  .Code-Mania'],
        answerD: ['d.  Code-Mania'],
        correct: 'c.  .Code-Mania'
    },
    {
        question: 'What is the purpose of a Boolean() function?',
        answerA: ['a. to find out if an expression is true'],
        answerB: ['b. to hold a list of values'],
        answerC: ['c. to run the same code over and over again'],
        answerD: ['d. to hold key-value pairs'],
        correct: 'a. to find out if an expression is true'
    },
    {
        question: 'Which of the following is not a part of the CSS Box Model?',
        answerA: ['a. margin'],
        answerB: ['b. card'],
        answerC: ['c. padding'],
        answerD: ['d. border'],
        correct: 'b. card'
    },
    {
        question: 'Where, in an HTML sheet, should a css stylesheet be linked?',
        answerA: ['a. header'],
        answerB: ['b. body'],
        answerC: ['c. footer'],
        answerD: ['d. head'],
        correct: 'd. head'
    },
    {
        question: 'Which Javascript assignment operator assigns a remainder to a variable?',
        answerA: ['a. +='],
        answerB: ['b. /='],
        answerC: ['c. -='],
        answerD: ['d. %='],
        correct: 'd. %='
    }
]

//* START GAME
    startButton.addEventListener("click", startGame);
    function startGame() {
        startCard.setAttribute('style', 'display: none;');
        // new question array
        shuffledQuestions = questions.sort(() => Math.random() - .5);

        // displays question and starts timer
        setQuestion();
        startTimer();

    }

//* START TIMER
    function startTimer(){
        
        var timerInterval = setInterval(function(){
            timerDisplay.textContent = time + " s";
            time--;

            if (time === 1) {
                clearInterval(timerInterval);
                // gameOver();
            } else  if(currentQuestionNumber >= shuffledQuestions.length +1) {
                clearInterval(timerInterval);
                // gameOver();
                } 
            }, 1000);
    }


//*  SETS QUESTIONS IN THE QUIZ
    function setQuestion(){
        questionContainer.setAttribute('style', 'display: block;')
        showQuestion(shuffledQuestions[currentQuestionIndex])
    }

//* SETS CURRENT QUESTION TO PAGE
function showQuestion(){
    quizQuestion.textContent=questions[currentQuestionIndex].question;
    for (i = 0; i < answersEl.children.length; i++) {
        answerPool.children[i].children[0].textContent = `${(i + 1)}: ${questions[currentQuestionIndex].choices[i]}`;
    }
}

//* CHECK ANSWER
    answerButtons.addEventListener('click', checkAnswer)
    function checkAnswer(event) {
        if (event.currentTarget == shuffledQuestions[currentQuestionIndex].correct) {
                // add 10 points and give me another question until there are no more, and all points are added up  
                scoreCounter = scoreCounter + 10; 
            if (currentQuestionIndex < shuffledQuestions.length -1) {
                setQuestion(currentQuestionIndex + 1);
                } else {
                    // gameOver();
                }
                currentQuestionNumber++;
            } else {
                // deduct 10 seconds from timer, got to next question, display answer
                time = time - 10;
            }
        // }

    }


// function setScore() {
//     scoreResultDisplay.textContent = scoreCounter;
//     localStorage.setItem("highscore", scoreCounter);
// }

// function getscore() {
//     var storedScore = localStorage.getItem("highscore");
//     if (storedScore === null) {
//         scoreCounter = 0;
//     } else {
//         scoreCounter = storedScore;
//     }
//     scoreResultDisplay.textContent = scoreCounter;
// }

// function gameOver() {

//     setScore()
// }


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
