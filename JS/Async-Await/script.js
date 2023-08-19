function afterOneSec(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        console.log("Resolving...");
        resolve(`Returned ${value}`);
      } else {
        console.log("Rejecting");
        reject(new Error("Nothing to return"));
      }
    }, 1000);
  });
}

// afterOneSec()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message))
//   .finally(() =>
//     setTimeout(() => {
//       console.log("I'm finally executed.");
//     }, 1000)
//   );

// async function asyncFunc() {
//   return "Hello";
// }

// console.log(asyncFunc());

async function processData(func, value) {
  let res = func(value);
  console.log(5);
}

processData(afterOneSec, "Hello");
