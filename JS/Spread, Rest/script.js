const items = ["Potion", "Repel", "X Attack", "Heart Scale"];
const keyItems = ["Mach Bike", "Itemfinder"];
const gadget = "PokeDex";

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

// Rest
const [item_1, item_2, ...restItems] = items;
console.log(item_1);
console.log(restItems);

const [trainer_1, ...restTrainers] = pkmnTrainers;
console.log(trainer_1);
console.log(restTrainers);

const { name, ...restProperties } = trainer_1;
console.log(name);
console.log(restProperties);

// Spread
const newItems = [...items, "Harbor Mail"];
console.log(newItems);

const newKeyItems = [...keyItems, "Red Orb"];
console.log(newKeyItems);

const newTrainers = [
  ...pkmnTrainers,
  {
    name: "Misty",
    pkmn: "Staryu",
    age: 30,
    town: "Cerulean City",
    anotherPkmn: "Psyduck",
  },
];
console.log(newTrainers[4]);

const trainersAndItems = [...newTrainers, items];
console.log(trainersAndItems);

const nums = [10, 20, 30, 40];
console.log(Math.max(...nums));
