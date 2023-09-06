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

const simplePkmnTrainers = ["Ash", "Red", "May", "Barry"];

let paul = {
  name: "Paul",
  pkmn: "Turtwig",
  age: 15,
  town: "Veilstone City",
};

// 1. push
pkmnTrainers.push(paul);
console.log(pkmnTrainers);

// // 2. push
pkmnTrainers.pop();
console.log(pkmnTrainers);

// 3. unshift
pkmnTrainers.unshift(paul);
console.log(pkmnTrainers);

// 4. shift
pkmnTrainers.shift();
console.log(pkmnTrainers);

// 5. indexOf
let indexOfAsh = simplePkmnTrainers.indexOf("Ash");
console.log(indexOfAsh);

// 6. lastIndexOf
let lastIndexOfAsh = simplePkmnTrainers.lastIndexOf("Ash");
console.log(lastIndexOfAsh);

// 7. slice
let subsetPkmnTrainers = simplePkmnTrainers.slice(1, 3);
console.log(subsetPkmnTrainers);

// 8. splice
let removePkmnTrainer = simplePkmnTrainers.splice(1, 3);
console.log(removePkmnTrainer);
console.log(simplePkmnTrainers);

// 9. reverse
let reversePkmnTrainers = pkmnTrainers.reverse();
console.log(reversePkmnTrainers);

// 10. concat
let bigPkmnTrainers = pkmnTrainers.concat(simplePkmnTrainers);
console.log(bigPkmnTrainers);

// 11. join
let joinedPkmnTrainers = simplePkmnTrainers.join(" ");
console.log(joinedPkmnTrainers);
