// script.js

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let lapsContainer = document.querySelector(".laps");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
    lapsContainer.innerHTML = ""; // Clear laps
});

document.getElementById("lap-timer").addEventListener("click", () => {
    recordLap();
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10
            ? "00" + milliseconds
            : milliseconds < 100
            ? "0" + milliseconds
            : milliseconds;

    timeRef.innerHTML = ${h} : ${m} : ${s} : ${ms};
}

function recordLap() {
    let lapTime = timeRef.innerHTML;
    let lapDiv = document.createElement("div");
    lapDiv.innerText = lapTime;
    lapsContainer.appendChild(lapDiv);
}
