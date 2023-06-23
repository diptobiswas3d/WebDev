const container = document.querySelector(".container")

let divElem = document.createElement("div")
divElem.setAttribute("class", "anime")
divElem.setAttribute("id", "anime-5")
divElem.textContent = "Bleach"
container.append(divElem)

console.log(divElem);

// Gets the elem with unique id
let naruto = document.getElementById("anime-1")
console.log(naruto);

// Gets an array of elems with the class name
let anime = document.getElementsByClassName("anime")
console.log(anime);

// Gets an array of elems with the tag name
let divTag = document.getElementsByTagName("div")
console.log(divTag);

// Gets the 1st elem that matches the selector
let aot = document.querySelector("#anime-3")
console.log(aot);

// Gets an array of elems that matches the selector
let animeBySelector = document.querySelectorAll(".anime")
console.log(animeBySelector);

// Modifying text
naruto.innerHTML = "Pokemon"
anime[1].innerText = "Digimon"
aot.textContent = "Dragon Ball"