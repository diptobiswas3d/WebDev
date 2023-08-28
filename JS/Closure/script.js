// let normal_var = "I'm a normal var";

// // Closure
// function normal_fn() {
//   console.log(normal_var);
// }

// normal_fn();

// // Complex
// function outer_fn(outer_var) {
//   inner_fn("Inner var");
//   function inner_fn(inner_var) {
//     console.log(outer_var);
//     console.log(inner_var);
//   }
// }

// outer_fn("Outer var");

let url = "https://pokeapi.co/api/v2/pokemon/pikachu";

function getPkmnData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

getPkmnData();
