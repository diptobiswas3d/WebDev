let url = "https://pokeapi.co/api/v2";
let query = "/pokemon";
let name = "/charizard";

let ENDPOINT = url + query + name;

// console.log(ENDPOINT);

fetch(ENDPOINT)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => console.log(data.sprites.front_default))
  .catch((err) => console.log(err));

async function getData(endpoint) {
  try {
    let res = await fetch(endpoint);
    console.log(res);
    let data = await res.json();
    console.log(data.sprites.front_default);
  } catch (err) {
    console.log(err);
  }
}

getData(ENDPOINT);
