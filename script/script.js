var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var timerSeconds = 70;

startBtn.addEventListener("click", function() {
    document.getElementById("main").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");
    setTime();
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
