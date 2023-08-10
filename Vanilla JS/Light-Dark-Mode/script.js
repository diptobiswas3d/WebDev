const mode = document.getElementById("mode");
const heading = document.getElementById("heading");

mode.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    heading.style.color = "white";
    mode.textContent = "🌞";
  } else {
    document.body.style.backgroundColor = "white";
    heading.style.color = "black";
    mode.textContent = "🌛";
  }
});
