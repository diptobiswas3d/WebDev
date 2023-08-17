let x = 3;
let y = 5;

function sum(a, b) {
  console.log(a + b);
}
function mul(a, b) {
  console.log(a * b);
}

function div(a, b) {
  console.log(a / b);
}

sum(x, y);
mul(x, y);
div(x, y);

function calc(a, b, callback) {
  callback(a, b);
}

calc(x, y, sum);
calc(x, y, mul);
calc(x, y, div);

addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY);
});
