const startBtn = document.getElementById("startBtn");
const timerEl = document.getElementById("timer");
var timerSeconds = 70;
var index = 0;
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");

// startBtn.addEventListener("click", function () {
//   document.getElementById("main").classList.add("d-none");
//   document.getElementById("quiz").classList.remove("d-none");
//   setTime();
//   startQuestions();
// });

startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    document.getElementById("main").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");
    setTimer();
    startQuestions();
}

function setTimer() {
  var counter = setInterval(function () {
    timerSeconds--;
    timerEl.textContent = "Timer: " + timerSeconds;

    if (timerSeconds == -1) {
      clearInterval(counter);
    }
  }, 1000);
}

function startQuestions() {
  questionsEl.textContent = questions[index].question;
  choicesEl.innerHTML = "";

  var choices = questions[index].choices;

  for (var i = 0; i < choices.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choices[i];
    choicesEl
      .appendChild(choiceButton)
      .setAttribute("class", "p-3 m-1 btn btn-light btn-block");
  }
}
