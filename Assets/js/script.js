//set variables 
var startBtn = document.getElementById("#start");
var submitBtn = document.querySelector("#submitBtn");
var highsore = document.querySelector("#highscores");
var timer = document.querySelector("#timer");
var yourScore = document.getElementById("yourScore")
var timeLeft= (questioned.length * 10 + 1);
var sumbitScoreEl = document.querySelector("#submitBtn");
var timerEl = document.getElementById("#timer");
var yourScoreEl = document.getElementById("#yourScore");
var startQuestions = document.getElementById("#gameQuestions");
var scoreInput;
var answers = document.getElementById("#answers");
var answer;
var questionNumber = -1;
var hideScore = document.getElementById("#submitScore");
hideScore.style.display = "none"
// questions 
var questions = [
    {
        title: "Which built-in method returns the character at the specified index?",
        choices: ["atChar()", "getChar()", "charAt()"],
        answer: "charAt()"
    },
    {
        title:"What function combines two strings and returns a new string?",
        choices: ["join()", "concat()", "merge()"],
        answer: "concat()"
    },
    {
        title: "What does the funciton unshift() do?",
        choices: ["Adds an element to the front of an array", "Adds an element to the end of an array", "Removes the first element of an array"],
        answer: "Adds an element to the front of an array"
    },
    {
        title:"What tag do you use to enclose a JavaScript statement?",
        choices: ["<Body>", "<script>", "<close>"],
        answer: "<script>"
    },
    {
        title: "What would you use to remove an element from an array?",
        choices: ["splice()", "remove()", "delete()"],
        answer: "splice()"

    },
    {
        title: "This is used to display something in your console",
        choices: ["display.log()","log.console()","console.log()"], 
        answer: "console.log"
    },
    {
        title: "This is used to ask the user a question and give them a textbox to answer",
        choices: ["prompt", "textbox", "question"],
        answer: "prompt"

    }
]
function start()
setGametime();
askQuestion();
function setGametime(){
    var timerBegin = setInterval(function(){
        timeLeft --;
        timer.textContent = "Timer:" + timeLeft;
        if (timeLeft===0||questionNumber===questions.length){
            clearInterval(timerBegin);
            setTimeout(displayScore,100);
        }
        },1000);
        }
        


function askQuestion(){
    questionNumber++;
    answer =question[questionNumber].answer
    startQuestions.textContent = questions[questionNumber].title;
    answers.textContent="";
    var userChoices = questions[questionNumber].choices;
    for (i =0; i<userChoices.length; i++){
        var next = document.createElement("button");
        next.textContent = userChoices[i]
    }
}
//function userScore(){
//document.getElementById("#game"){


