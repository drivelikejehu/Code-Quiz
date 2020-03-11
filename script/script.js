var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");

startBtn.addEventListener("click",function() {
    document.getElementById("main").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");
});