// adding all my questions

const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        choices: ["a. document.getElementByName(\"p\").innerHTML = \"Hello World!\";", "b. document.getElementById(\"demo\").innerHTML = \"Hello World!\";", "c. document.getElement(\"p\").innerHTML = \"Hello World!\";", "d. #demo.innerHTML = \"Hello World!\";"],
        answer: "b. document.getElementById(\"demo\").innerHTML = \"Hello World!\";"
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        choices: ["a. alert(\"Hello World\");", "b. alertBox(\"Hello World\");", "c. msg(\"Hello World\");", "d. msgBox(\"Hello World\");"],
        answer: "a. alert(\"Hello World\");"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c. if(i == 5)"
    },
    {
        question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        choices: ["a. if (i <> 5)", "b. if (i != 5)", "c. if i =! 5 then", "d. if i <> 5"],
        answer: "b. if (i != 5)"
    },
    {
        question: "The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a. onclick"
    },
    {
        question: "How do you call a function named myFunction?",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c. myFunctions()"
    },
    {
        question: "How does a FOR loop start?",
        choices: ["a. for (i = 0; i <= 5)", "b. for i = 1 to 5", "c. for (i <= 5; i++)", "d. for (i = 0; i <= 5; i++)"],
        answer: "d. for (i = 0; i <= 5; i++)"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        choices: ["a. rnd(7.25)", "b. round(7.25)", "c. Math.rnd(7.25)", "d. Math.round(7.25)"],
        answer: "d. Math.round(7.25)"
    }
];


// ===================== VARIABLES ====================== //

// linking elements to my JS
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startSection = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionSection = document.getElementById("questionSection");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var finalScoreSection = document.getElementById("finalScoreSection");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var leaderboardSection = document.getElementById("leaderboardSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearLeaderBtn = document.getElementById("clearLeaderBtn"); 
var viewLeaderboard = document.getElementById("viewLeaderboard");
var listOfScores = document.getElementById("listOfScores");

// defining variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;


// ===================== FUNCTIONS ====================== //

// function to start the timer as soon as the user clicks the start button
var totalTime = 151;
function newQuiz() {
    questionIndex = 0;
    totalTime = 150;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startSection.style.display = "none";
    questionSection.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver()
            }
        }
    },1000);

    showQuiz()
};

// Show the question and start the quiz
function showQuiz() {
    nextQuestion()
}

// displays the question once the user submits an answer
function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

// once the question is answered, display if the user input was correct or wrong
function textAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // user entered the correct answer so we add 1 to the final score
        correctAns++;
        answerCheck.textContent = "Correct ✔"
    } else {
        // wrong answer, minus 10 seconds from timer
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong ❌ The answer you were looking for was: " +questions[questionIndex].answer;
    }

    questionIndex++;
    // repeat until all question in the index have been displayed
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        gameOver()
    }
}

function chooseA() { checkAnswer(0);}
function chooseB() { checkAnswer(1);}
function chooseC() { checkAnswer(2);}
function chooseD() { checkAnswer(3);}

// when the game is over display the section for game over
function gameOver() {
    finalScoreSection.style.display = "block";
    questionSection.style.display = "none";
    startSection.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block"

    finalScore.textContent = correctAns;
}