const pkmnTrainers = [
  {
    name: "Wally",
    pkmn: "Ralts",
    age: 12,
    town: "Petalburg City",
  },
  {
    name: "Gary",
    pkmn: "Eevee",
    age: 10,
    town: "Pallet Town",
  },
  {
    name: "Lyra",
    pkmn: "Marill",
    age: 14,
    town: "New Bark Town",
  },
];

const newTrainers = pkmnTrainers.map((trainer) => ({
  ...trainer,
  age: trainer.age + 20,
}));

console.log(newTrainers);
