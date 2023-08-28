const scoreBoard = document.getElementById("score");
const timerBoard = document.getElementById("timer");
const grid = document.getElementById("grid");
const bestTimeBoard = document.getElementById("best-timer");
const player = document.getElementById("player");
const bestPlayer = document.getElementById("best-player");

const cardsArray = [
  {
    name: "Articuno",
    img: "images/Articuno.png",
  },
  {
    name: "Charizard",
    img: "images/Charizard.png",
  },
  {
    name: "Gengar",
    img: "images/Gengar.png",
  },
  {
    name: "Marill",
    img: "images/Marill.png",
  },
  {
    name: "Phanpy",
    img: "images/Phanpy.png",
  },
  {
    name: "Pikachu",
    img: "images/Pikachu.png",
  },
  {
    name: "Snorlax",
    img: "images/Snorlax.png",
  },
  {
    name: "Zapdos",
    img: "images/Zapdos.png",
  },
  {
    name: "Articuno",
    img: "images/Articuno.png",
  },
  {
    name: "Charizard",
    img: "images/Charizard.png",
  },
  {
    name: "Gengar",
    img: "images/Gengar.png",
  },
  {
    name: "Marill",
    img: "images/Marill.png",
  },
  {
    name: "Phanpy",
    img: "images/Phanpy.png",
  },
  {
    name: "Pikachu",
    img: "images/Pikachu.png",
  },
  {
    name: "Snorlax",
    img: "images/Snorlax.png",
  },
  {
    name: "Zapdos",
    img: "images/Zapdos.png",
  },
];
let selectCardIds = [];
let selectCards = [];
let cardsWon = [];
let id = 0;
let score = 0;
let timer = 0;
let itr = 0;
let startTime;

let playerName = prompt("Enter your name: ");
let bestTime = localStorage.getItem("best-time");
let bestPlayerName = localStorage.getItem("best-player");
bestTimeBoard.innerHTML = bestTime;
bestPlayer.innerHTML = bestPlayerName;
player.innerHTML = playerName;

// Randomize card array
cardsArray.sort(() => 0.5 - Math.random());

cardsArray.forEach((card) => {
  let image = document.createElement("img");
  image.setAttribute("src", "images/Blank.png");
  image.setAttribute("data-id", id);
  id += 1;
  grid.appendChild(image);
  image.addEventListener("click", flipCard);
});

function flipCard() {
  if (itr == 0) {
    startTime = Date.now();
  }
  itr += 1;
  setInterval(updateTimer, 100);
  let cardId = this.getAttribute("data-id");
  this.setAttribute("src", cardsArray[cardId].img);
  selectCards.push(cardsArray[cardId].name);
  selectCardIds.push(cardId);
  if (selectCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
function checkMatch() {
  let allCards = document.querySelectorAll("img");
  if (selectCards[0] === selectCards[1]) {
    allCards[selectCardIds[0]].setAttribute("src", "images/White.png");
    allCards[selectCardIds[1]].setAttribute("src", "images/White.png");
    allCards[selectCardIds[0]].removeEventListener("click", flipCard);
    allCards[selectCardIds[1]].removeEventListener("click", flipCard);
    score += 1;
    scoreBoard.innerHTML = score;
    cardsWon.push(selectCards);
  } else {
    allCards[selectCardIds[0]].setAttribute("src", "images/Blank.png");
    allCards[selectCardIds[1]].setAttribute("src", "images/Blank.png");
    score -= 1;
    scoreBoard.innerHTML = score;
  }
  selectCardIds = [];
  selectCards = [];
  if (cardsWon.length == cardsArray.length / 2) {
    if (parseFloat(timer) / 1000 < parseFloat(bestTime)) {
      localStorage.setItem("best-time", parseFloat(timer) / 1000);
      localStorage.setItem("best-player", playerName);
    }
    alert(`Game Over! Time taken = ${timer / 1000} seconds. Score = ${score}`);
  }
}
function updateTimer() {
  if (cardsWon.length < cardsArray.length / 2) {
    timer = Date.now() - startTime;
  }
  timerBoard.innerHTML = (timer / 1000).toFixed(3);
}
