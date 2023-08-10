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

const filterTrainers = pkmnTrainers.filter((trainer) => trainer.age < 10);
console.log(filterTrainers);

const findTrainers = pkmnTrainers.find((trainer) => trainer.age < 10);
console.log(findTrainers);
