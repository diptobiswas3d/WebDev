const fs = require("fs");

try {
  fs.writeFileSync(
    "../files/spongebob.txt",
    "We all know that Spongebob Squarepants is the strongest!",
    "utf8"
  );
  console.log("Does everybody agree?");
} catch (err) {
  console.error("Error: ", err);
}

console.log("I agree! What about you?");
