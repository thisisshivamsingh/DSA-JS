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

// let n = parseInt(prompt("Enter a Number"));

// let nod = 0;
// let temp = n;
// while (temp != 0) {
//   temp = parseInt(temp / 10);
//   nod++;
// }

// let div = Math.pow(10, nod - 1);
// while (div != 0) {
//   let q = parseInt(n / div);
//   console.log(q);
//   n = n % div;
//   div = parseInt(div / 10);
// }

// let n = parseInt(prompt("Enter a Number"));

// while (n > 0) {
//   let dig = n % 10;
//   n = parseInt(n / 10);
//   console.log(dig);
// }

// let n = parseInt(prompt("Enter a Number"));

// let inv = 0;
// let op = 1;
// while (n != 0) {
//   let od = n % 10;
//   let id = op;
//   let ip = od;

//   // make change to inv using ip and id
//   inv = inv + id * Math.pow(10, ip - 1);

//   n = parseInt(n / 10);
//   op++;
// }
// console.log(inv);

// let n = parseInt(prompt("Enter a Number"));

// let k = parseInt(prompt("Enter a Rotation Number"));

// let temp = n;
// let nod = 0;
// while (temp > 0) {
//   temp = parseInt(temp / 10);
//   nod++;
// }

// k = k % nod;
// if (k < 0) {
//   k = k + nod;
// }

// let div = 1;
// let mult = 1;

// for (let i = 1; i <= nod; i++) {
//   if (i <= k) {
//     div = div * 10;
//   } else {
//     mult = mult * 10;
//   }
// }
// let q = parseInt(n / div);
// let r = n % div;
// let rot = r * mult + q;
// console.log(rot);

// let n1 = parseInt(prompt("Write First Number."));
// let n2 = parseInt(prompt("Write Second Number"));

// let on1 = n1;
// let on2 = n2;

// while (n1 % n2 != 0) {
//   let rem = n1 % n2;
//   n1 = n2;
//   n2 = rem;
// }
// let gcd = n2;
// let lcm = parseInt((on1 * on2) / gcd);

// console.log(gcd);
// console.log(lcm);

// let n = parseInt(prompt("Write a Number"));

// for (let div = 2; div * div <= n; div++) {
//   while (n % div == 0) {
//     n = parseInt(n / div);
//     console.log(div + " ");
//   }
// }
// if (n != 1) {
//   console.log(n);
// }

// let a = parseInt(prompt("Write a Number One"));
// let b = parseInt(prompt("Write a Number Two"));
// let c = parseInt(prompt("Write a Number Three"));

// let max = a;
// if (b >= max) {
//   max = b;
// }
// if (c >= max) {
//   max = c;
// }
// if (max === a) {
//   const flag = b * b + c * c == a * a;
//   console.log(flag);
// } else if (max === b) {
//   const flag = a * a + c * c == b * b;
//   console.log(flag);
// } else {
//   const flag = b * b + a * a == c * c;
//   console.log(flag);
// }

// let n = parseInt(prompt("Write a Number"));

// for (let i = 1; i * i <= n; i++) {
//   console.log(i * i);
// };

// const n = parseInt(prompt("Write a Number"));
// let star = "";
// for (let i = 1; i <= n; i++) {
//   star = "";
//   for (let j = 1; j <= i; j++) {
//     star = star + "*";
//   }
//   console.log(star);
// }

// const n = parseInt(prompt("Write a Number"));
// let star = "";
// for (let i = n; i >= 1; i--) {
//   star = "";
//   for (let j = 1; j <= i; j++) {
//     star = star + "*";
//   }
//   console.log(star);
// }

// Unsolved //
// const n = parseInt(prompt("Write a Number"));
// let sp = n - 1;
// let st = 1;
// let spc = "";
// let star = "";
// for (let i = 1; i <= n; i++) {
//   spc = "";
//   star = "";
//   // console.log(sp + ", " + st);
//   for (let j = 1; j <= sp; j++) {
//     spc = spc + " ";
//   }
//   star = spc + star;
//   // console.log(spc);
//   for (let j = 1; j <= st; j++) {
//     star = star + "*\t";
//   }
//   console.log(star);
//   sp--;
//   st++;
// }

// Unsolved //
// const n = parseInt(prompt("Write a Number"));
// let sp = 0;
// let st = n;
// let spc = "";
// let star = "";

// for (let i = 1; i <= n; i++) {
//   spc = "";
//   star = "";
//   for (let j = 1; j <= sp; j++) {
//     spc = spc + " ";
//   }
//   for (let j = 1; j <= st; j++) {
//     star = star + "*\t";
//   }
//   console.log(spc + star);
//   sp++;
//   st--;
// }

// const n = parseInt(prompt("Write a Number"));
// let sp = parseInt(n / 2);
// let st = 1;
// let spc = "";
// let star = "";

// for (let i = 1; i <= n; i++) {
//   spc = "";
//   star = "";
//   // console.log(sp + ", " + st);
//   for (let j = 1; j <= sp; j++) {
//     spc = spc + " ";
//   }
//   for (let j = 1; j <= st; j++) {
//     star = star + "*";
//   }
//   console.log(spc + star);
//   if (i <= parseInt(n / 2)) {
//     sp--;
//     st += 2;
//   } else {
//     sp++;
//     st -= 2;
//   }
// }

// const n = parseInt(prompt("Write a Number"));
// let st = parseInt(n / 2) + 1;
// let sp = 1;
// let spc = "";
// let starA = "";
// let starB = "";

// for (let i = 1; i <= n; i++) {
//   spc = "";
//   starA = "";
//   starB = "";
//   for (let j = 1; j <= st; j++) {
//     starA = starA + "*";
//   }
//   for (let j = 1; j <= sp; j++) {
//     spc = spc + " ";
//   }
//   for (let j = 1; j <= st; j++) {
//     starB = starB + "*";
//   }
//   console.log(starA + spc + starB);
//   if (i <= parseInt(n / 2)) {
//     st--;
//     sp += 2;
//   } else {
//     st++;
//     sp -= 2;
//   }
// }

///// BASIC PATTERN /////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let star = "";
// while (i <= n) {
//   let j = 1;
//   star = "";
//   while (j <= n) {
//     star = star + "*";
//     j++;
//   }
//   console.log(star);
//   i++;
// }

///// PATTERN 2 /////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let num = "";
// while (i <= n) {
//   let j = 1;
//   num = "";
//   while (j <= n) {
//     num = num + i;
//     j++;
//   }
//   console.log(num);
//   i++;
// }

///// PATTERN 3 /////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let num = "";
// while (i <= n) {
//   let j = 1;
//   num = "";
//   while (j <= n) {
//     num = num + j;
//     j++;
//   }
//   console.log(num);
//   i++;
// }

///// PATTERN 4 /////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let num = "";
// while (i <= n) {
//   let j = 1;
//   num = "";
//   while (j <= n) {
//     num = num + (n - j + 1);
//     j++;
//   }
//   console.log(num);
//   i++;
// }

///// PATTERN 5 /////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";
// while (i <= n) {
//   container = "";
//   let j = 1;
//   while (j <= i) {
//     container = container + j;
//     j++;
//   }
//   console.log(container);
//   i++;
// }

///// PATTERN 6 /////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";
// while (i <= n) {
//   container = "";
//   let j = 1;
//   let startingNumber = i;
//   while (j <= i) {
//     container = container + startingNumber;
//     startingNumber++;
//     j++;
//   }
//   console.log(container);
//   i++;
// }

///// PATTERN 7 /////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";
// let startingNumber = 1;
// while (i <= n) {
//   container = "";
//   let j = 1;
//   while (j <= i) {
//     container = container + startingNumber;
//     startingNumber++;
//     j++;
//   }
//   console.log(container);
//   i++;
// }

///// PATTERN 8 /////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";
// while (i <= n) {
//   let j = 1;
//   container = "";
//   while (j <= n) {
//     const a = "A";
//     container = container + String.fromCharCode(a.codePointAt(0) + j - 1);
//     j++;
//   }
//   console.log(container);
//   i++;
// }

///// PATTERN 9 /////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";

// while (i <= n) {
//   let j = 1;
//   container = "";
//   const a = "A";
//   let startingChar = String.fromCharCode(a.codePointAt(0) + i - 1);
//   while (j <= n) {
//     container = container + startingChar;
//     startingChar = String.fromCharCode(startingChar.codePointAt(0) + 1);
//     j++;
//   }
//   console.log(container);
//   i++;
// }

///// PATTERN 10 /////

const n = parseInt(prompt("Write a Number"));

let i = 1;
let container = "";

while (i <= n) {
  let j = 1;
  container = "";
  const a = "A";
  let startingChar = String.fromCharCode(a.codePointAt(0) + i - 1);
  while (j <= i) {
    container = container + startingChar;
    j++;
  }
  console.log(container);
  i++;
}
