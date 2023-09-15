const items = ["Pokeball", "Greatball", "Ultraball", "Masterball", "GS ball"];

const wally = {
  name: "Wally",
  pkmn: "Ralts",
  age: 12,
  town: "Petalburg City",
};

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// for (let key in wally) {
//   console.log(key + `: ${wally[key]}`);
// }

// for (let pokeball of items) {
//   console.log(pokeball);
// }

// let j = 0;
// while (j < items.length) {
//   console.log(items[j]);
//   j++;
// }

// let k = 0;

// do {
//   console.log(k);
//   k++;
// } while (k < 5);

items.forEach((item) => {
  console.log(item);
});
