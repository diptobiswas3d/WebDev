const fs = require("fs");

fs.writeFile(
  "../files/question.txt",
  "Is there anyone else in the competetion?",
  "utf8",
  (err) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    console.log("Thinking...");
  }
);

console.log("Yes there is!");
