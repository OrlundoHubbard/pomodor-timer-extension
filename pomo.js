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
}