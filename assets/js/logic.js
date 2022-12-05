// Show question div when start button is pressed

var start = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionDisplay = document.getElementById("questions");
var time = document.getElementById("time");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");

var questionEle =  document.getElementById("question-title");
var firstOptionEle =  document.getElementById("option-one");
var secondOptionEle = document.getElementById("option-two");
var thirdOptionEle = document.getElementById("option-three");
var fourthOptionEle = document.getElementById("option-four");

var index = 0
var timeLeft = 75;
time.innerHTML = timeLeft;
var quizTimer = 0;

start.addEventListener("click", displayQuestions);

function displayQuestions() {
    questionDisplay.setAttribute("style", "display:block; background-color:red; height:400px; width:100%");
    startScreen.remove();
    var quizTimer = setInterval(function(){
        if(timeLeft <= 0){
          clearInterval(quizTimer);
          time.innerHTML = "Finished";
        } else {
          time.innerHTML = timeLeft
        }
        timeLeft -= 1;
      },1000);
}

questionEle.innerHTML = questions[0].question;
firstOptionEle.innerHTML = questions[0].option1;
secondOptionEle.innerHTML = questions[0].option2;
thirdOptionEle.innerHTML = questions[0].option3;
fourthOptionEle.innerHTML = questions[0].option4;

// If the answer if the first option, clicking that button will produce the next question

firstOptionEle.addEventListener("click", nextQuestion);
secondOptionEle.addEventListener("click", nextQuestion);
thirdOptionEle.addEventListener("click", nextQuestion);
fourthOptionEle.addEventListener("click", nextQuestion);

function nextQuestion() {
  if (index < 4){  
  index ++ ;
    questionEle.innerHTML = questions[index].question;
    firstOptionEle.innerHTML = questions[index].option1;
    secondOptionEle.innerHTML = questions[index].option2;
    thirdOptionEle.innerHTML = questions[index].option3;
    fourthOptionEle.innerHTML = questions[index].option4;
    // console.log(index);
  }
  else
  {
    endScreen.setAttribute("style", "display:block; background-color:blue; height:400px; width:100%");
    questionDisplay.remove();
    finalScore.innerHTML = timeLeft;
    time.innerHTML = "Finished";
    timeLeft = 0;
  }
}

