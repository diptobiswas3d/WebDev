let url = "https://pokeapi.co/api/v2";
let query = "/berry";
let name = "/oran";

let ENDPOINT = url + query + name;

console.log(ENDPOINT);

let promise = fetch(ENDPOINT);

// GET method
// GET, POST, PUT, DELETE
// promise
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => console.log(data));

async function getData(endpoint) {
  try {
    let res = await fetch(endpoint);
    console.log(res);
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData(ENDPOINT);
