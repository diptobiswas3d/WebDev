const fs = require("fs");

const data = fs.readFileSync("../files/saitama.txt", "utf8");
console.log(data);

console.log("Genos agrees!");
