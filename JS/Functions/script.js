let x = 3;
let y = 5;

// console.log(x + y);

// Functions
function sum(a, b) {
  // console.log(a + b);
  return a + b;
}

sum(x, y);
// console.log(sum(x, y));
// console.log(sum);

// Anonymous Functions
let sum_of_two_nums = function (a, b) {
  console.log(a + b);
};

// sum_of_two_nums(x, y);

// Arrow Functions
let mul_of_two_nums = (a, b) => {
  console.log(a * b);
  return a * b;
};

// mul_of_two_nums(3, 5);
// console.log(mul_of_two_nums(3, 5));
// console.log(mul_of_two_nums);

// IIFE -> Immediately Invoked Function Expressions

(function function_name(a, b) {
  console.log(a * b);
  return a * b;
})(3, 5);
