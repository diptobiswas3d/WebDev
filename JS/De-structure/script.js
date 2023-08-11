const items = ["Pokeball", "Greatball", "Ultraball", "Masterball", "GS ball"];

let gadget_1 = "PokeDex";
let gadget_2 = "PokeNav";

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

const [a, ...b] = items;
console.log(a);
console.log(b);

// Swap
[gadget_2, gadget_1] = [gadget_1, gadget_2];

console.log(gadget_1);
console.log(gadget_2);

const [trainer_1, trainer_2, trainer_3] = pkmnTrainers;

console.log(trainer_1);

const {
  name: firstName,
  pkmn: firstPkmn,
  town,
  age,
  role = "Pokemon Intern",
} = trainer_2;

console.log(firstName);
console.log(firstPkmn);
console.log(town);
console.log(age);
console.log(role);

const arr = [10, 15, 20];

function add([x, y, z]) {
  console.log(x + y + z);
}

add(arr);

function trainer_info({ name, pkmn, town, age }) {
  console.log(pkmn, town, age);
}

trainer_info(trainer_1);
