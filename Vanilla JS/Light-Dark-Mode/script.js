const mode = document.getElementById("mode");
const heading = document.getElementById("heading");

mode.addEventListener("click", () => {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";
    heading.textContent = "Dark Mode";
    heading.style.color = "white";
    document.title = "Dark Mode";
    mode.textContent = "🌛";
  } else {
    document.body.style.backgroundColor = "white";
    heading.textContent = "Light Mode";
    heading.style.color = "black";
    document.title = "Light Mode";
    mode.textContent = "🌞";
  }
});
