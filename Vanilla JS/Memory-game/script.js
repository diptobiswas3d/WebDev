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

cardsArray.sort(() => 0.5 - Math.random());

const board = document.querySelector(".board");
const images = document.querySelectorAll(".image");

board.addEventListener("click", (e) => {
  if (e.target.className == "image") flipCard(e.target);
});

function flipCard(card) {}
