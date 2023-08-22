let username = document.getElementById("username");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let message = document.getElementById("message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  };

  const resp = fetch("http://localhost:3000/users/register", options);
  resp
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.registered) {
        message.innerHTML = data.message;
        message.style.color = "red";
      } else {
        message.innerHTML = data.message;
        message.style.color = "green";
        open("users.html", "_blank");
      }
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("I will be executed anyway."));
});
