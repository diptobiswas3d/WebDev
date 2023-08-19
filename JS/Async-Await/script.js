function afterOneSec(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        console.log("Resolving...");
        resolve(`Resolved with ${value}`);
      } else {
        console.log("Rejecting...");
        reject("No value to return");
      }
    }, 1000);
  });
}

function afterHalfSec(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        console.log("Resolving...");
        resolve(`Resolved with ${value}`);
      } else {
        console.log("Rejecting...");
        reject("No value to return");
      }
    }, 500);
  });
}

// let promise = afterOneSec(5);

// promise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("This is finally invoked"));

// async function asyncFunc() {
//   return "Hello World";
// }

// let helloWorld = asyncFunc();
// console.log(helloWorld);

async function processData(func, value) {
  let res = await func(val);
  console.log("Something");
  // all other code
}

processData(afterOneSec, 5)
  .catch((err) => console.log(err))
  .finally(() => console.log("I'm finally executed"));

// Fetch
