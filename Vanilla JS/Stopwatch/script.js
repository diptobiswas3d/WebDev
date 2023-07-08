let timeScreen = document.getElementById("time-screen")
let hr = document.getElementById("hr")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let milli = document.getElementById("milli")

let startBtn = document.getElementById("start")
let pauseBtn = document.getElementById("pause")
let stopBtn = document.getElementById("stop")

let startTime = 0
let elapsedTime = 0
let elapsedHr, elapsedMin, elapsedSec, elapsedMilli
let paused = true
let updateTimeEvent

// Start Button
startBtn.addEventListener("click", e => {
    startTime = Date.now()
})

