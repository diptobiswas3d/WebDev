const mode = document.getElementById("mode");
const heading = document.getElementById("heading");

mode.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    document.title = "Dark Mode";
    heading.textContent = "Dark Mode";
    document.body.style.backgroundColor = "black";
    heading.style.color = "white";
    mode.textContent = "🌞";
  } else {
    document.title = "Light Mode";
    heading.textContent = "Light Mode";
    document.body.style.backgroundColor = "white";
    heading.style.color = "black";
    mode.textContent = "🌛";
  }
});
