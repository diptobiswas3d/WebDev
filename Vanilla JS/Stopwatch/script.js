let timeScreen = document.getElementById("time-screen");

let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let milli = document.getElementById("milli");

let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let stopBtn = document.getElementById("stop");

let startTime = 0;
let paused = true;
let elapsedMilli, elapsedSec, elapsedMin, elapsedHr;
let elapsedTime = 0;
let updateTimeEvent;

// Start Button
startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    updateTimeEvent = setInterval(updateTime, 100);
  }
});

// Pause Button
pauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;

    clearInterval(updateTimeEvent);
  }
});

// Stop Button
stopBtn.addEventListener("click", () => {
  startTime = 0;
  elapsedTime = 0;
  clearInterval(updateTimeEvent);
  paused = true;

  milli.innerHTML = "000";
  sec.innerHTML = "00";
  min.innerHTML = "00";
  hr.innerHTML = "00";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  elapsedMilli = elapsedTime % 1000;
  elapsedSec = Math.floor(elapsedTime / 1000);
  elapsedMin = Math.floor(elapsedSec / 60);
  elapsedHr = Math.floor(elapsedMin / 60);

  milli.innerHTML =
    elapsedMilli < 100
      ? elapsedMilli < 10
        ? "00" + elapsedMilli
        : "0" + elapsedMilli
      : elapsedMilli;
  sec.innerHTML = elapsedSec < 10 ? "0" + elapsedSec : elapsedSec;
  min.innerHTML = elapsedMin < 10 ? "0" + elapsedMin : elapsedMin;
  hr.innerHTML = elapsedHr < 10 ? "0" + elapsedHr : elapsedHr;
}
