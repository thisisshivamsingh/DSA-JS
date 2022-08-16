// let a = "";
// for (let i = 1; i <= 5; i++) {
//   a = a + "*";
//   console.log(a);
// }

// console.log("*****\n   * \n  *  \n *   \n*****");

// const x = 15;
// const y = 10;

// const sum = x + y;

// console.log(sum);
// console.log("Sum of " + x + " and " + y + " is " + sum);

// xy
// const prd = x * y;
// console.log("Product of " + x + " and " + y + " is " + prd);
// x / y, y / x, x % y
// const v1 = x / y;
// const v2 = y / x;
// const v3 = x % y;
// console.log(v1);
// console.log(v2);
// console.log(v3);

// const exp = x * y / x + y;
// const exp = (x * y) / (x + y);
// console.log(exp);

// const x = 11;
// if (x % 2 == 0) {
//   console.log(x + " is even.");
// } else {
//   console.log(x + " is odd.");
// }
// console.log("Hardwork is better than smart work");

// const n1 = 10;
// const n2 = 10;

// if (n1 == n2) {
//   console.log(n1 + " is equal to " + n2);
// } else {
//   if (n1 > n2) {
//     console.log(n1 + " is greater than " + n2);
//   } else {
//     console.log(n1 + " is smaller than " + n2);
//   }
// }

// if (n1 == n2) {
//   console.log(n1 + " is equal to " + n2);
// } else if (n1 > n2) {
//   console.log(n1 + " is greater than " + n2);
// } else {
//   console.log(n1 + " is smaller than " + n2);
// }

// const marks = 100;

// if (marks > 90) {
//   console.log("excellent");
// } else if (marks > 80 && marks <= 90) {
//   console.log("good");
// } else if (marks > 70 && marks <= 80) {
//   console.log("fair");
// } else if (marks > 60 && marks <= 70) {
//   console.log("meets expectations");
// } else if (marks <= 60) {
//   console.log("below par");
// }

// let i = 1;

// while (i <= 9) {
//   console.log(i);
//   i = i + 1;
// }

// for (let i = 1; i <= 9; i++) {
//   console.log(i);
// }
// console.log("Done.");

// const n = prompt("Write a Number");

// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

// const name = prompt("Write your name");
// console.log("Hello " + name);

// const n = parseInt(prompt("Number"));
// const name = prompt("What is Your Name?");

// console.log("Dear " + name + ". Here is the counting ");
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

// const t = parseInt(prompt("Type Total Count"));

// for (let i = 0; i < t; i++) {
//   const n = parseInt(prompt("Type any number"));
//   let count = 0;
//   for (let div = 2; div * div <= n; div++) {
//     if (n % div == 0) {
//       count++;
//       break;
//     }
//   }
//   if (count == 0) {
//     console.log("prime");
//   } else {
//     console.log("not prime");
//   }
// }

// const low = parseInt(prompt("Write First Number."));
// const high = parseInt(prompt("Write Last Number."));

// for (let n = low; n <= high; n++) {
//   let count = 0;

//   // try to divide n and inertease count
//   for (let div = 2; div * div <= n; div++) {
//     if (n % div == 0) {
//       count++;
//       break;
//     }
//     // try to divide n and inertease count
//   }
//   if (count == 0) {
//     console.log(n);
//   }
// }

// const n = parseInt(prompt("Enter a Number"));

// let a = 0;
// let b = 1;

// for (let i = 0; i < n; i++) {
//   console.log(a);
//   let c = a + b;
//   a = b;
//   b = c;
// }

// let n = parseInt(prompt("Enter a Number"));

// let dig = 0;

// while (n != 0) {
//   n = parseInt(n / 10);
//   dig++;
// }

// console.log(dig);

let n = parseInt(prompt("Enter a Number"));

let nod = 0;
let temp = n;
while (temp != 0) {
  temp = parseInt(temp / 10);
  nod++;
}

let div = Math.pow(10, nod - 1);
while (div != 0) {
  let q = parseInt(n / div);
  console.log(q);
  n = n % div;
  div = parseInt(div / 10);
}
