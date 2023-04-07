// Define the length of a pomodoro and a short break
const pomodoroLength = 25 * 60;
const shortBreakLength = 5 * 60;

// Initialize the timer with the pomodoro length
let timerLength = pomodoroLength;
let timerId;

// Get references to the UI elements
const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');

// Define functions to update the timer display and and handle button clicks
function updateTimerDisplay(timeLeft) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    timerId = setInterval(() => {
        timerLength--;
        updateTimerDisplay(timerLength);
        if (timerLength === 0) {
            timerLength = shortBreakLength;
            updateTimerDisplay(timerLength);
            alert('Time for a break!');
        
            // If the timer just finished a pomodoro, start a short break
        }
        // If the timer just finished a short break, start a pomodoro
        else {
            timerLength = pomodoroLength;
            updateTimerDisplay(timerLength);
            alert('Time to get back to work!');
        }
        startTimer();
    }, 1000);
    startButton.disabled = true;
    pauseButton.disabled = false; 
    resetButton.disabled = false;
}

function pauseTimer() {
    clearInterval(timerId);
    startButton.disabled = false;
    pauseButton.disabled = true;
}

function resetTimer() {
    clearInterval(timerId);
    timerLength = pomodoroLength;
    updateTimerDisplay(timerLength);
    startButton.disabled = false;
    pauseButton.disabled = true;
}

// Add event listeners to the buttons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize the timer display
updateTimerDisplay(timerLength);