const pkmnTrainers = [
  {
    name: "Wally",
    pkmn: "Ralts",
    age: 32,
    town: "Petalburg City",
  },
  {
    name: "Gary",
    pkmn: "Eevee",
    age: 30,
    town: "Pallet Town",
  },
  {
    name: "Lyra",
    pkmn: "Marill",
    age: 34,
    town: "New Bark Town",
  },
  {
    name: "Ash",
    pkmn: "Pikachu",
    age: 10,
    town: "Pallet Town",
  },
];

// Filter
const palletTrainers = pkmnTrainers.filter(
  (trainer) => trainer.pkmn == "Dragonite"
);
console.log(palletTrainers);

// Find
const newTrainers = pkmnTrainers.find((trainer) => trainer.pkmn == "Dragonite");
console.log(newTrainers);
