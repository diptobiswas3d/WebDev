const allSquare = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById("time-left");
let score = document.getElementById("score");

let highPlayer = document.getElementById("high-player");
let highScore = document.getElementById("high-score");
let player = document.getElementById("player");

let result = 0;
let hitPosition;
let timer;
let countDownTimer;
let curTime = 10;

let playerName = "D";
console.log(player);

let highPlayerName = localStorage.getItem("highPlayer");
let highScoreResult = localStorage.getItem("highScore");

highPlayer.innerHTML = highPlayerName;
highScore.innerHTML = highScoreResult;

function rndSquare() {
  allSquare.forEach((square) => {
    square.classList.remove("mole");
  });
  let rndSquare = allSquare[Math.floor(Math.random() * 16)];
  rndSquare.classList.add("mole");
  hitPosition = rndSquare.id;
}

allSquare.forEach((square) => {
  square.addEventListener("mousedown", (e) => {
    if (square.id == hitPosition) {
      result++;
      score.innerHTML = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timer = setInterval(rndSquare, 1000);
}

function countDown() {
  curTime--;
  timeLeft.innerHTML = curTime;
  if (curTime == 0) {
    if (result > highScoreResult) {
      localStorage.setItem("highPlayer", playerName);
      localStorage.setItem("highScore", result);
    }
    console.log(result);
    clearInterval(countDownTimer);
    clearInterval(timer);
  }
}

moveMole();

countDownTimer = setInterval(countDown, 1000);
