var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var timerSeconds = 70;
var questionsEl = document.getElementById("questions");

startBtn.addEventListener("click", function() {
    document.getElementById("main").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");
    setTime();
    startQuestions();
});

function setTime() {

    var counter = setInterval(function () {
        timerSeconds--;
        timerEl.innerHTML = "Timer: " + timerSeconds;

        if (timerSeconds == -1){
            clearInterval(counter);
        }
    }, 1000);
}

function startQuestions() {
    
};
