const fs = require("fs");

fs.readFile("../files/goku.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log(data);
  }
});

console.log("Vegeta disagrees!");
