let username = document.getElementById("username");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let message = document.getElementById("message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const resp = fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  });
  resp
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (!data.username) {
        message.innerHTML = data.message;
        message.style.color = "red";
      } else {
        if (!data.password) {
          message.innerHTML = data.message;
          message.style.color = "red";
        } else {
          console.log(1);
          message.innerHTML = data.message;
          message.style.color = "green";
          open("users.html", "_blank");
        }
      }
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("I will be executed anyway."));
});
