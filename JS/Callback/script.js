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

// sum(x, y);
// mul(x, y);
// div(x, y);

function calc(a, b, callback) {
  callback(a, b);
}

calc(x, y, sum);
calc(x, y, mul);
calc(x, y, div);

addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY);
});

// Callback Hell, Pyramid of Doom
setTimeout(() => {
  console.log("Alert 1");
  setTimeout(() => {
    console.log("Alert 2");
    setTimeout(() => {
      console.log("Alert 3");
      setTimeout(() => {
        console.log("Alert 4");
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
