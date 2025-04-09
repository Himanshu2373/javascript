// let total = calculate(3);
// console.log(total);

// function calculate(num) {
//   if (num > 0) {
//     let sum = 1;
//     for (let i = 1; i <= num; i++) {
//       sum = sum * i;
//     }
//     return sum;
//   }
//   return 0;
// }

// Fibonacci

fibo(7);

function fibo(num) {
  let num1 = 0;
  let num2 = 1;
  if (num < 1) {
    console.log(num1);
  } else if (num < 2) {
    console.log(num1, num2);
  } else {
    for (let i = 0; i < num; i++) {
      console.log(num1);
      let third = num1 + num2;
      num1 = num2;
      num2 = third;
    }
  }
}
