// DOM access
let container = document.querySelector(".container");

// By ID
let naruto = document.getElementById("anime-1");
// console.log(naruto);

// // By Class name
// let anime = document.getElementsByClassName("anime");
// console.log(anime[1]);

// // By tag name
// let divTag = document.getElementsByTagName("div");
// console.log(divTag);

// // let h1Tag = document.getElementsByTagName("h1");
// // console.log(h1Tag[0].innerHTML);

// // QS
// let aot = document.querySelector("#anime-3");
// console.log(aot.innerHTML);

// // QSA
// let animeBySelector = document.querySelectorAll(".anime");
// console.log(animeBySelector);

// Modifying Text
// naruto.innerHTML = "Pokemon";
// naruto.innerText = "DBZ";
// naruto.textContent = "Dr. Stone";

// console.log(naruto.innerHTML);
// console.log(naruto.innerText);
// console.log(naruto.textContent);

// Styles
document.body.style.backgroundColor = "lightblue";
// naruto.style.color = "white";
// naruto.style.fontSize = "2rem";

// Create, remove elements
// Set attributes, properties

let divElem = document.createElement("div");
divElem.classList.add("anime");
divElem.setAttribute("id", "anime-5");
divElem.innerHTML = "Bleach";
container.appendChild(divElem);
// container.removeChild(divElem);

// let getAttr = divElem.getAttribute("class");
// console.log(getAttr);

// let hasAttr = divElem.hasAttribute("id");
// console.log(hasAttr); // true

// divElem.removeAttribute("id");
// hasAttr = divElem.hasAttribute("id");
// console.log(hasAttr); // false

// Traverse
let childElem = container.childNodes;
let parentElem = divElem.parentNode;

console.log(parentElem);
console.log(childElem);

let sibling = naruto.nextSibling.nextSibling;
console.log(sibling);

naruto.addEventListener("click", () => {
  alert("You clicked on Naruto!");
});
