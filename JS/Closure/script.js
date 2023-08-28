let url = "https://pokeapi.co/api/v2";
let query = "/pokemon";
let name = "/pikachu";

let endpoint = url + query + name;

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

getData();
