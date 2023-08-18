// Promise
const promise = new Promise((resolve, reject) => {
  // Some operation
  if (false) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

// Pending, Fulfilled, Rejected
console.log(promise);

promise.then((data) => console.log(data)).catch((err) => console.log(err));

function isNumberEven(num) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (typeof num === "number") {
        if (num % 2 == 0) {
          resolve("This is an even number");
        } else {
          resolve("This is an odd number");
        }
      } else {
        reject(new Error("Input wasn't a number!"));
      }
    }, 1000);
  });
}

isNumberEven("Hello")
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
