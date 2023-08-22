let userContainer = document.querySelector(".users");

fetch("http://localhost:3000/users", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let user = document.createElement("div");
      user.style.fontSize = "1.25rem";
      user.style.margin = "5px";
      user.innerHTML = data[i].username;
      userContainer.appendChild(user);
    }
  });
