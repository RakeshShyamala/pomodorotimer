let timer;
let timeLeft = 25 * 60;
let running = false;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById('timer').innerText =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                running = false;
            }
        }, 1000);
    }
}


function resetTimer() {
    timeLeft = 25 * 60;
    updateDisplay();
    clearInterval(timer);
    running = false;
}

function stopTimer() {
    clearInterval(timer);
    timeLeft = 0;
    updateDisplay();
    running = false;
}

function setMode(minutes) {
    timeLeft = minutes * 60;
    updateDisplay();
    clearInterval(timer);
    running = false;
}

updateDisplay();