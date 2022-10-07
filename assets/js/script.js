//* DEFINE ELEMENTS
const startCard = document.getElementById('start-game');
const startButton = document.getElementById('start-btn');

const questionContainer = document.getElementById('question-container');
const quizQuestion = document.getElementById('quiz-question');

const answerBTNS = document.getElementsByClassName('answer-btn');
const answerPool = document.getElementById('answer-pool');

const signScore = document.getElementById('sign-score');
const scoreResultDisplay = document.getElementById('score-result');
const userInitials = document.getElementById('initials');
const viewHighscore = document.getElementById('view-highscores');
var timerDisplay = document.getElementById('timer-count');
var isWin = false;
var scoreCounter = 0;
var highscoresArr = [];
var time = 60;

var qIndex = 0;
var currentQ = 1;
var highscore = localStorage.getItem("highscore");
var initials = localStorage.getItem('initials')

//* QUESTION POOL
var questions = [
    {
        question: 'Which of the following is an HTML semantic element?',
        choices: ['a. span', 'b. article', 'c. class', 'd. div'],
        correct: 'b. article'
    },
    {
        question: 'Which of the following shows the correct way to define: class="Code-Mania"?',
        choices: ['a.  #Code-Mania', 'b.  #code-mania', 'c.  .Code-Mania', 'd.  Code-Mania'],
        correct: 'c.  .Code-Mania'
    },
    {
        question: 'What is the purpose of a Boolean() function?',
        choices: ['a. to find out if an expression is true', 'b. to hold a list of values', 'c. to run the same code over and over again', 'd. to hold key-value pairs'],
        correct: 'a. to find out if an expression is true'
    },
    {
        question: 'Which of the following is not a part of the CSS Box Model?',
        choices: ['a. margin', 'b. card', 'c. padding', 'd. border'],
        correct: 'b. card'
    },
    {
        question: 'Where, in an HTML sheet, should a css stylesheet be linked?',
        choices: ['a. header', 'b. body', 'c. footer', 'd. head'],
        correct: 'd. head'
    },
    {
        question: 'Which Javascript assignment operator assigns a remainder to a variable?',
        choices: ['a. +=', 'b. /=', 'c. -=', 'd. %='],
        correct: 'd. %='
    }
]

//* START GAME--------------------------------------------------------------
startButton.addEventListener("click", startGame);
function startGame() {
    startCard.setAttribute('style', 'display: none;');
    // new question array
    shuffledQs = questions.sort(() => Math.random() - .5);

    // displays question and starts timer
    setQuestion();
    startTimer();

}

//* START TIMER---------------------------------------------------------------
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        time--;
        timerDisplay.textContent = time + ' s';
        if (time >= 0) {
            // Tests if win condition is met
            if (isWin && time > 0) {
                // Clears interval and stops timer
                gameover();
                winGame();
            }
        }
        // Tests if time has run out
        if (time === 0) {
            // Clears interval
            gameover();
        }
    }, 1000);
}


//*  SETS QUESTIONS PAGE AND SHUFFLE QUESTIONS------------------------------------
function setQuestion() {
    // make question container visible
    questionContainer.setAttribute('style', 'display: block;')
    // call renderQuestion() with shuffled questions
    renderQuestion(shuffledQs[qIndex])
}

//* RENDERS SHUFFLED QUESTIONS TO PAGE------------------------------------------
function renderQuestion() {
    // display current question
    quizQuestion.textContent = questions[qIndex].question;
    // display current and corresponding questions
    for (i = 0; i < answerPool.children.length; i++) {
        answerPool.children[i].textContent = shuffledQs[qIndex].choices[i];
    };
}

//* CHECKS ANSWER---------------------------------------------------------------
document.getElementById("answer-pool").addEventListener("click", checkAnswer);
function checkAnswer(event) {
    
    const answer = event.target;
    if (shuffledQs[qIndex].correct == answer.innerHTML) {
        scoreCounter += 10;
        console.log(scoreCounter);
    } else {
        time = time - 10;
    }
    // go to next question
    nextQuestion();

}

//* SET NEXT QUESTION---------------------------------------------------------
function nextQuestion() {
    // increment current question index
    qIndex++;
    // render 6 questions
    if (qIndex < 6) {
        renderQuestion();
    } else {
        gameover();
        questionContainer.setAttribute('style', 'display:none;');
        signScore.setAttribute('style', 'display: block;');
        scoreResultDisplay.textContent = scoreCounter;
        timerDisplay.textContent = '0';
    }

} 

//* GAME OVER---------------------------------------------------------------- 
function gameover() {
    clearInterval(timer);
}

//* SIGN HIGHSCORE------------------------------------------------------------
document.getElementById("submit-signature").addEventListener("click", setScore);
function setScore() {
    // get existing scores
    if (!!localStorage.getItem('scoreboard')){
        let previousScores = JSON.parse(localStorage.getItem('scoreboard'));
        highscoresArr.push(previousScores);
    }
    // define new score
    const signature = userInitials.value.trim();
    const highScores = {
        user: signature,
        score: scoreCounter
    };
    // save new score with existing scores and save to local storage
    highscoresArr.push(highScores)
    localStorage.setItem("scoreboard", JSON.stringify(highscoresArr));

    signScore.setAttribute('style', 'display:none;');
    viewHighscore.setAttribute('style', 'display:block;')

    getScore();
}

//* VIEW HIGH SCORES------------------------------------------------------------- 
document.getElementById("highscore-btn").addEventListener("click", getScore);
// function getScore() {
//     var storedScore = localStorage.getItem("scoreboard");
//     if (storedScore === null) {
//         scoreCounter = 0;
//     } else {
//         scoreCounter = storedScore;
//     }
//     scoreResultDisplay.textContent = scoreCounter;
// }


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
