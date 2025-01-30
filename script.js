let time = 0;
let timerID = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Function to format the timer
function formatTime(time) {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
}

// UpdateDisplay function
function updateDisplay() {
    display.textContent = formatTime(time);
}

// Function to start the timer
function startTimer() {
    if (!timerID) {
        timerID = setInterval(() => {
            time++;
            updateDisplay();
        }, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerID);
    timerID = null;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerID);
    timerID = null;
    time = 0;
    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// Event Listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// Initial display
updateDisplay();
