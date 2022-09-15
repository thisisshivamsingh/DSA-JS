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

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";

// while (i <= n) {
//   let j = 1;
//   container = "";
//   const a = "A";
//   let startingChar = String.fromCharCode(a.codePointAt(0) + i - 1);
//   while (j <= i) {
//     container = container + startingChar;
//     j++;
//   }
//   console.log(container);
//   i++;
// }

///// PATTERN 11 /////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";

// while (i <= n) {
//   let j = 1;
//   container = "";
//   const a = "A";
//   let startingChar = String.fromCharCode(a.codePointAt(0) + i - 1);
//   while (j <= i) {
//     container = container + startingChar;
//     startingChar = String.fromCharCode(startingChar.codePointAt(0) + 1);
//     j++;
//   }
//   console.log(container);
//   i++;
// }

///// PATTERN 12 /////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";

// while (i <= n) {
//   let j = 1;
//   container = "";
//   const a = "A";
//   let startingChar = String.fromCharCode(a.codePointAt(0) + n - i);
//   while (j <= i) {
//     container = container + startingChar;
//     startingChar = String.fromCharCode(startingChar.codePointAt(0) + 1);
//     j++;
//   }
//   console.log(container);
//   i++;
// }

//////////////////////
///// PATTERN 13 /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";

// while (i <= n) {
//   let j = 1;
//   container = "";
//   while (j <= n - i) {
//     container = container + " ";
//     j++;
//   }
//   j = 1;
//   while (j <= i) {
//     container = container + "*";
//     j++;
//   }
//   console.log(container);
//   i++;
// }

//////////////////////
///// PATTERN 14 /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";
// while (i <= n) {
//   let j = 1;
//   container = "";
//   while (j <= n - i) {
//     container = container + " ";
//     j++;
//   }
//   j = 1;
//   while (j <= i) {
//     container = container + j;
//     j++;
//   }
//   console.log(container);
//   i++;
// }

//////////////////////
///// PATTERN 15 /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";
// while (i <= n) {
//   let j = 1;
//   container = "";
//   while (j <= n - i + 1) {
//     container = container + "*";
//     j++;
//   }
//   console.log(container);
//   i++;
// }

//////////////////////
///// PATTERN 16 /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));

// let dn = n;
// let i = 1;
// let container = "";
// while (i <= n) {
//   let j = 1;
//   container = "";
//   while (j <= n - i + 1) {
//     container = container + dn;
//     j++;
//   }
//   console.log(container);
//   i++;
//   dn--;
// }

//////////////////////
///// PATTERN 17 /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";

// while (i <= n) {
//   container = "";
//   let spaces = 1;
//   while (spaces <= n - i) {
//     container = container + " ";
//     spaces++;
//   }
//   let j = 1;
//   let p = 1;
//   while (j <= i) {
//     container = container + p;
//     p++;
//     j++;
//   }

//   p = i - 1;
//   j = 1;

//   while (j <= i - 1) {
//     container = container + p;
//     p--;
//     j++;
//   }
//   console.log(container);
//   i++;
// }

//////////////////////
///// PATTERN 18 /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let k = 0;
// let container = "";
// while (i <= n) {
//   container = "";
//   let spaces = 1;
//   while (spaces <= n - i) {
//     container = container + " ";
//     spaces++;
//   }
//   let j = 1;
//   while (j <= i + k) {
//     container = container + "*";
//     j++;
//   }
//   k++;
//   //   j = 1;
//   //   while (j <= i - 1) {
//   //     container = container + "*";
//   //     j++;
//   //   }
//   console.log(container);
//   i++;
// }

//////////////////////
///// PATTERN 19 /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let container = "";
// while (i <= n) {
//   container = "";
//   let spaces = 1;
//   while (spaces <= n - i) {
//     container = container + " ";
//     spaces++;
//   }
//   let j = 1;
//   let p = i;
//   while (j <= i) {
//     container = container + p;
//     p++;
//     j++;
//   }
//   let k = i - 1;
//   j = 1;
//   while (j <= i - 1) {
//     container = container + (k + i - 1);
//     k--;
//     j++;
//   }
//   console.log(container);
//   i++;
// }

//////////////////////
///// PATTERN 20 /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));

// let i = 1;
// let n1 = parseInt((n + 1) / 2);
// let n2 = n - n1;
// let container = "";

// while (i <= n1) {
//   container = "";
//   let j = 1;
//   while (j <= n1 - i) {
//     container = container + " ";
//     j++;
//   }
//   j = 1;
//   while (j <= 2 * i - 1) {
//     container = container + "*";
//     j++;
//   }
//   console.log(container);
//   i++;
// }

// i = n2;
// while (i >= 1) {
//   container = "";
//   let j = 1;
//   while (j <= n2 - i + 1) {
//     container = container + " ";
//     j++;
//   }
//   j = 1;
//   while (j <= 2 * i - 1) {
//     container = container + "*";
//     j++;
//   }
//   console.log(container);
//   i--;
// }

//////////////////////
///// PATTERN 21 /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));

// console.log("*");
// let i = 1;
// let container = "";
// while (i <= n) {
//   container = "";
//   let j = 1;
//   while (j <= 1) {
//     container = container + "*";
//     j++;
//   }
//   j = 1;
//   while (j <= i) {
//     container = container + j;
//     j++;
//   }
//   j = 1;
//   while (j < i) {
//     container = container + (i - j);
//     j++;
//   }
//   console.log(container + "*");
//   i++;
// }
// i = n;
// while (i > 1) {
//   container = "";
//   let j = 1;
//   while (j <= 1) {
//     container = container + "*";
//     j++;
//   }
//   j = 1;
//   while (j < i) {
//     container = container + j;
//     j++;
//   }
//   j = 1;
//   while (j < i - 1) {
//     container = container + (i - j - 1);
//     j++;
//   }
//   console.log(container + "*");

//   i--;
// }
// console.log("*");

//////////////////////
///// PATTERN 22 /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));

// let container = "";
// let i = 1;
// while (i <= n) {
//   container = "";

//   let spaces = "";
//   while (spaces <= i - 1) {
//     container = container + " ";
//     spaces++;
//   }

//   let j = 1;
//   while (j <= n) {
//     container = container + "*";
//     j++;
//   }
//   console.log(container);
//   i++;
// }

//////////////////////
///// PATTERN 23 /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));

// let container = "";
// let i = 1;
// let sum = 0;

// while (i <= n) {
//   container = "";
//   container = container + 1;
//   let j = 2;
//   while (j <= i) {
//     container = container + "+";
//     container = container + j;
//     j++;
//   }
//   j = 1;
//   while (j <= i) {
//     sum = sum + j;
//     j++;
//   }
//   console.log(container + "=" + sum);
//   sum = 0;
//   i++;
// }

//////////////////////
///// PATTERN 24 /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));

// let container = "";
// let i = 1;
// let max = n * 2 - 1;

// while (i <= n) {
//   container = "";
//   let j = 1;
//   let sum = 2 * i - 1;
//   while (j <= n) {
//     container = container + sum;
//     sum += 2;
//     if (sum > max) {
//       sum = 1;
//     }
//     j++;
//   }
//   console.log(container);
//   i++;
// }

//////////////////////
///// Sum and Product /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));
// const c = parseInt(prompt("Write Your Choice Number"));
// let sum = 0;
// let product = 1;

// for (let i = 1; i <= n; i++) {
//   if (c == 1) {
//     sum = sum + i;
//   } else if (c == 2) {
//     product = product * i;
//   }
// }

// if (c == 1) {
//   console.log(sum);
// } else if (c == 2) {
//   console.log(product);
// } else {
//   console.log("-1");
// }

//////////////////////
///// Terms Of AP /////
//////////////////////

// const n = parseInt(prompt("Write a Number"));
// let j = 1;
// let p = 0;
// let i = 1;
// let container = 0;

// while (i <= n) {
//   p = 3 * j + 2;
//   if (p % 4 != 0) {
//     container = container + p + " ";
//     i++;
//   }
//   j++;
// }
// console.log(container);

//////////////////////
///// Introduction to Function /////
//////////////////////

// function display(n, r, npr) {
//   console.log(n + "p" + r + "=" + npr);
// }

// function fact(x) {
//   let rv = 1;

//   for (let i = 1; i <= x; i++) {
//     rv = rv * i;
//   }
//   return rv;
// }

// const n = parseInt(prompt("Write a Number for p"));
// const r = parseInt(prompt("Write a Number for r"));

// const nFact = fact(n);
// const nmrFact = fact(n - r);

// const npr = nFact / nmrFact;

// display(n, r, npr);

//////////////////////
///// Digits Frequency /////
//////////////////////

// let n = parseInt(prompt("Write a Number"));
// const d = parseInt(prompt("Write a Digit"));

// function getDigitFrequency(n, d) {
//   let rv = 0;
//   while (n > 0) {
//     let dig = n % 10;
//     n = parseInt(n / 10);

//     if (dig == d) {
//       rv++;
//     }
//   }
//   return rv;
// }

// const f = getDigitFrequency(n, d);
// console.log(f);

//////////////////////
///// Decimal to any Base Question /////
//////////////////////

// let n = parseInt(prompt("Write Number"));
// const b = parseInt(prompt("Write base No"));

// const getValueInBase = (n, b) => {
//   // Write code here
//   let rv = 0;

//   let p = 1;
//   while (n > 0) {
//     let dig = n % b;
//     n = parseInt(n / b);
//     rv += dig * p;
//     p = p * 10;
//   }
//   return rv;
// };

// const dn = getValueInBase(n, b);
// console.log(dn);

//////////////////////
///// Any base to Decimal /////
//////////////////////

// let n = parseInt(prompt("Write Number"));
// const b = parseInt(prompt("Write base No"));

// const getValueIndecimal = (n, b) => {
//   // Write your code here
//   let rv = 0;
//   let p = 1;
//   while (n > 0) {
//     let dig = n % 10;
//     n = parseInt(n / 10);
//     rv += dig * p;
//     p = p * b;
//   }
//   return rv;
// };

// const d = getValueIndecimal(n, b);
// console.log(d);

//////////////////////
///// Any Base to Any Base /////
//////////////////////

// let n = parseInt(prompt("Write Number"));
// const b1 = parseInt(prompt("Write base No 1"));
// const b2 = parseInt(prompt("Write base No 2"));

// const getValue = (n, b1, b2) => {
//   // Write your code here
//   const dec = anyBaseToDecimal(n, b1);
//   const dn = decimalToAnyBase(dec, b2);
//   return dn;
// };

// const decimalToAnyBase = (n, b) => {
//   // Write code here
//   let rv = 0;

//   let p = 1;
//   while (n > 0) {
//     let dig = n % b;
//     n = parseInt(n / b);
//     rv += dig * p;
//     p = p * 10;
//   }
//   return rv;
// };

// const anyBaseToDecimal = (n, b) => {
//   // Write your code here
//   let rv = 0;
//   let p = 1;
//   while (n > 0) {
//     let dig = n % 10;
//     n = parseInt(n / 10);
//     rv += dig * p;
//     p = p * b;
//   }
//   return rv;
// };

// const d = getValue(n, b1, b2);
// console.log(d);

//////////////////////
///// Any Base Addition /////
//////////////////////

// const b = parseInt(prompt("Write Base Number"));
// const n1 = parseInt(prompt("Write First Number"));
// const n2 = parseInt(prompt("Write Second Number"));

// const getSum = (b, n1, n2) => {
//   // Write your code here
//   let rv = 0;

//   let c = 0;
//   let p = 1;
//   while (n1 > 0 || n2 > 0 || c > 0) {
//     let d1 = n1 % 10;
//     let d2 = n2 % 10;
//     n1 = parseInt(n1 / 10);
//     n2 = parseInt(n2 / 10);

//     let d = d1 + d2 + c;
//     c = parseInt(d / b);
//     d = d % b;

//     rv += d * p;
//     p = p * 10;
//   }
//   return rv;
// };
// const d = getSum(b, n1, n2);
// console.log(d);

//////////////////////
///// Any Base Subtraction /////
//////////////////////

// const b = parseInt(prompt("Write Base Number"));
// const n1 = parseInt(prompt("Write Smaller Number"));
// const n2 = parseInt(prompt("Write larger Number"));

// const getDifference = (b, n1, n2) => {
//   // Write your code here
//   let rv = 0;

//   let c = 0;
//   let p = 1;
//   while (n2 > 0) {
//     let d1 = n1 % 10;
//     n1 = parseInt(n1 / 10);
//     let d2 = n2 % 10;
//     n2 = parseInt(n2 / 10);

//     let d = 0;
//     d2 = d2 + c;

//     if (d2 >= d1) {
//       c = 0;
//       d = d2 - d1;
//     } else {
//       c = -1;
//       d = d2 + b - d1;
//     }

//     rv = rv + d * p;
//     p = p * 10;
//   }
//   return rv;
// };

// const d = getDifference(b, n1, n2);
// console.log(d);

//////////////////////
///// Any Base Multiplication /////
//////////////////////

// const b = parseInt(prompt("Write Base Number"));
// const n1 = parseInt(prompt("Write First Number"));
// const n2 = parseInt(prompt("Write Second Number"));

// const getProduct = (b, n1, n2) => {
//   // Write your code here
//   let rv = 0;

//   let p = 1;
//   while (n2 > 0) {
//     let d2 = n2 % 10;
//     n2 = parseInt(n2 / 10);

//     const sprd = getProductWithASingleDigit(b, n1, d2);
//     rv = getSum(b, rv, sprd * p);
//     p = p * 10;
//   }
//   return rv;
// };

// const getProductWithASingleDigit = (b, n1, d2) => {
//   let rv = 0;

//   let c = 0;
//   let p = 1;
//   while (n1 > 0 || c > 0) {
//     let d1 = n1 % 10;
//     n1 = parseInt(n1 / 10);

//     let d = d1 * d2 + c;

//     c = parseInt(d / b);
//     d = d % b;

//     rv = rv + d * p;
//     p = p * 10;
//   }
//   return rv;
// };

// const getSum = (b, n1, n2) => {
//   // Write your code here
//   let rv = 0;

//   let c = 0;
//   let p = 1;
//   while (n1 > 0 || n2 > 0 || c > 0) {
//     let d1 = n1 % 10;
//     let d2 = n2 % 10;
//     n1 = parseInt(n1 / 10);
//     n2 = parseInt(n2 / 10);

//     let d = d1 + d2 + c;
//     c = parseInt(d / b);
//     d = d % b;

//     rv += d * p;
//     p = p * 10;
//   }
//   return rv;
// };

// const d = getProduct(b, n1, n2);
// console.log(d);

//////////////////////
///// Span Of An Array /////
//////////////////////

/////////////////***************///////////////

// const tNum = parseInt(prompt("Write total Numbers"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseFloat(prompt("Write a Number"));
// }

// let max = arr[0];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// const span = max - min;
// console.log(span);

/////////////////***************///////////////

// const tNum = parseInt(prompt("Write total Numbers"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number"));
// }

// const max = Math.max(...arr);
// const min = Math.min(...arr);

// const span = max - min;
// console.log(span);

//////////////////////
///// Find Element In An Array /////
//////////////////////

/////////////////***************///////////////

// const tNum = parseInt(prompt("Write total Numbers"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number"));
// }

// const data = parseInt(prompt("Write a Number that you want to Find"));

// let idx = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === data) {
//     idx = i;
//     break;
//   }
// }

// console.log(idx);

/////////////////***************///////////////

// const tNum = parseInt(prompt("Write total Numbers"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number"));
// }

// const data = parseInt(prompt("Write a Number that you want to Find"));

// console.log(arr.indexOf(data));

//////////////////////
///// Bar Chart /////
//////////////////////

/////////////////***************///////////////

// const tNum = parseInt(prompt("Write total Numbers"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number"));
// }

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// let container = "";
// let j = 1;
// for (let floor = max; floor >= 1; floor--) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= floor) {
//       container += " * ";
//     } else {
//       container += "   ";
//     }
//   }
//   if (j % 2 === 0) {
//     console.log(container);
//   } else {
//     console.log(container + " ");
//   }
//   container = "";
//   j++;
// }

/////////////////***************///////////////

// const tNum = parseInt(prompt("Write total Numbers"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number"));
// }

// const max = Math.max(...arr);

// let container = "";

// let j = 1;

// for (let floor = max; floor >= 1; floor--) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= floor) {
//       container += " * ";
//     } else {
//       container += "   ";
//     }
//   }
//   if (j % 2 === 0) {
//     console.log(container);
//   } else {
//     console.log(container + " ");
//   }
//   container = "";
//   j++;
// }

//////////////////////
///// Sum Of Two Arrays /////
//////////////////////

/////////////////***************///////////////

// const tNumOne = parseInt(prompt("Write total Numbers for First Array"));

// const arr1 = [];

// for (let i = 0; i < tNumOne; i++) {
//   arr1[i] = parseInt(prompt("Write a Number for Array arr1"));
// }

// const tNumTwo = parseInt(prompt("Write total Numbers for Two Array"));

// const arr2 = [];

// for (let i = 0; i < tNumTwo; i++) {
//   arr2[i] = parseInt(prompt("Write a Number for Array arr2"));
// }

// const sum = [...(tNumOne > tNumTwo ? arr1 : arr2)];

// let c = 0;

// let i = arr1.length - 1;
// let j = arr2.length - 1;
// let k = sum.length - 1;

// while (k >= 0) {
//   let d = c;

//   if (i >= 0) {
//     d += arr1[i];
//   }

//   if (j >= 0) {
//     d += arr2[j];
//   }

//   c = parseInt(d / 10);
//   d = d % 10;

//   sum[k] = d;

//   i--;
//   j--;
//   k--;
// }

// if (c != 0) {
//   console.log(c);
// }

// for (const elem of sum) {
//   console.log(elem);
// }

//////////////////////
///// Difference Of Two Arrays /////
//////////////////////

// const tNumOne = parseInt(prompt("Write total Numbers for First Array"));

// const a1 = [];

// for (let i = 0; i < tNumOne; i++) {
//   a1[i] = parseInt(prompt("Write a Number for Array a1"));
// }

// const tNumTwo = parseInt(prompt("Write total Numbers for Two Array"));

// const a2 = [];

// for (let i = 0; i < tNumTwo; i++) {
//   a2[i] = parseInt(prompt("Write a Number for Array a2"));
// }

// const diff = [...a2];

// let c = 0;

// let i = a1.length - 1;
// let j = a2.length - 1;
// let k = diff.length - 1;

// while (k >= 0) {
//   let d = 0;
//   let a1v = i >= 0 ? a1[i] : 0;

//   // console.log(j);
//   if (a2[j] + c >= a1v) {
//     d = a2[j] + c - a1v;
//     c = 0;
//   } else {
//     d = a2[j] + c + 10 - a1v;
//     c = -1;
//   }

//   diff[k] = d;

//   i--;
//   j--;
//   k--;
// }
// let idx = 0;
// while (idx < diff.length) {
//   if (diff[idx] == 0) {
//     idx++;
//   } else {
//     break;
//   }
// }

// while (idx < diff.length) {
//   console.log(diff[idx]);
//   idx++;
// }

//////////////////////
///// Reverse an Array /////
//////////////////////

/////////////////***************///////////////

// const tNum = parseInt(prompt("Write total numbers for Array"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number for Array"));
// }

// const reverse = (arr) => {
//   // write your code here
//   let i = 0;
//   let j = arr.length - 1;
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;

//     i++;
//     j--;
//   }
//   return arr;
// };
// let container = "";
// for (const elem of reverse(arr)) {
//   container += elem;
// }
// console.log(container);

/////////////////***************///////////////

// const tNum = parseInt(prompt("Write total numbers for Array"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number for Array"));
// }

// arr.reverse();

// let container = "";

// for (const elem of arr) {
//   container += elem;
// }

// console.log(container);

//////////////////////
///// Rotate an Array /////
//////////////////////

/////////////////***************///////////////

// const tNum = parseInt(prompt("Write total numbers for Array"));

// const rNum = parseInt(prompt("Write a Number from you want to Rotate"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number for Array"));
// }

// const reverse = (a, i, j) => {
//   let li = i;
//   let ri = j;

//   while (li < ri) {
//     let temp = a[li];
//     a[li] = a[ri];
//     a[ri] = temp;

//     li++;
//     ri--;
//   }
// };
// const rotate = (a, k) => {
//   k = k % a.length;
//   if (k < a) {
//     k = k + a.length;
//   }
//   // Part 1
//   reverse(a, 0, a.length - k - 1);

//   // Part 2
//   reverse(a, a.length - k, a.length - 1);

//   // all
//   reverse(a, 0, a.length - 1);
// };

// rotate(arr, rNum);
// console.log(arr);

//////////////////////
///// Inverse of an Array /////
//////////////////////

// const tNum = parseInt(prompt("Write total numbers for Array"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number for Array"));
// }

// const inverse = (arr) => {
//   const newArray = [...arr];
//   for (let i = 0; i < arr.length; i++) {
//     let v = arr[i];
//     newArray[v] = i;
//   }
//   return newArray;
// };
// const newArr = inverse(arr);

// for (const elem of newArr) {
//   console.log(elem);
// }

//////////////////////
///// Sub Arrays of an Array /////
//////////////////////

// const tNum = parseInt(prompt("Write total numbers for Array"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number for Array"));
// }
// let container = "";
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     for (let k = i; k <= j; k++) {
//       container = container + arr[k] + "\t";
//     }
//     console.log(container);
//     container = "";
//   }
// }

//////////////////////
///// Subsets of an Array /////
//////////////////////

// const tNum = parseInt(prompt("Write total numbers for Array"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number for Array"));
// }

// let limit = Math.pow(2, arr.length);

// for (let i = 0; i < limit; i++) {
//   let set = " ";
//   let temp = i;

//   for (let j = arr.length - 1; j >= 0; j--) {
//     let r = temp % 2;
//     temp = parseInt(temp / 2);

//     if (r == 0) {
//       set = "-\t" + set;
//     } else {
//       set = arr[j] + "\t" + set;
//     }
//   }
//   console.log(set);
// }

//////////////////////
///// Binary Search Algorithm /////
//////////////////////

/////////////////***************///////////////

// const binarySearchAlgorithm = () => {
//   const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//   const data = 71;

//   let l = 0;
//   let h = arr.length - 1;

//   while (l <= h) {
//     let m = parseInt((l + h) / 2);
//     if (data > arr[m]) {
//       l = m + 1;
//     } else if (data < arr[m]) {
//       h = m - 1;
//     } else {
//       console.log(m);
//       return;
//     }
//   }
//   console.log(-1);
// };
// binarySearchAlgorithm();

/////////////////***************///////////////

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const data = 70;

// console.log(arr.indexOf(data));

//////////////////////
///// Ceil and Floor /////
//////////////////////

// const tNum = parseInt(prompt("Write total numbers for Array"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number for Array"));
// }

// const data = parseInt(
//   prompt("Write a Number which for you  want to find ceil and floor")
// );

// let lo = 0;
// let hi = arr.length - 1;

// let ceil = 0;
// let floor = 0;

// while (lo <= hi) {
//   let mid = parseInt((lo + hi) / 2);
//   if (data < arr[mid]) {
//     hi = mid - 1;
//     ceil = arr[mid];
//   } else if (data > arr[mid]) {
//     lo = mid + 1;
//     floor = arr[mid];
//   } else {
//     ceil = arr[mid];
//     floor = arr[mid];
//     break;
//   }
// }

// console.log(ceil);
// console.log(floor);

//////////////////////
///// First and Last Index /////
//////////////////////

/////////////////***************///////////////

// const tNum = parseInt(prompt("Write total numbers for Array"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number for Array"));
// }

// const data = parseInt(
//   prompt(
//     "Write a Number which for you  want to find first index and last index"
//   )
// );

// let lo = 0;
// let hi = arr.length - 1;
// let fi = -1;

// while (lo <= hi) {
//   let mid = parseInt((lo + hi) / 2);
//   if (data > arr[mid]) {
//     lo = mid + 1;
//   } else if (data < arr[mid]) {
//     hi = mid - 1;
//   } else {
//     fi = mid;
//     hi = mid - 1;
//   }
// }
// console.log(fi);

// lo = 0;
// hi = arr.length - 1;
// let li = -1;

// while (lo <= hi) {
//   let mid = parseInt((lo + hi) / 2);
//   if (data > arr[mid]) {
//     lo = mid + 1;
//   } else if (data < arr[mid]) {
//     hi = mid - 1;
//   } else {
//     li = mid;
//     lo = mid + 1;
//   }
// }
// console.log(li);

/////////////////***************///////////////

// const tNum = parseInt(prompt("Write total numbers for Array"));

// const arr = [];

// for (let i = 0; i < tNum; i++) {
//   arr[i] = parseInt(prompt("Write a Number for Array"));
// }

// const data = parseInt(
//   prompt(
//     "Write a Number which for you  want to find first index and last index"
//   )
// );

// console.log("firstIndex", arr.indexOf(data));
// console.log("lastIndex", arr.lastIndexOf(data));

//////////////////////
///// Introduction to 2-D Arrays /////
//////////////////////

// const tRowNum = parseInt(prompt("Write row number for a 2-D Array"));
// const tColNum = parseInt(prompt("Write col number for a 2-D Array"));

// const arr = [];

// for (let i = 0; i < tRowNum; i++) {
//   arr[i] = [];
//   for (let j = 0; j < tColNum; j++) {
//     arr[i][j] = parseInt(prompt("Write a Number for Array"));
//   }
// }
// let container = "";
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     container = container + arr[i][j] + " ";
//   }
//   console.log(container);
//   container = "";
// }

//////////////////////
///// Patterns-1 /////
//////////////////////

// function patternOne() {
//   const n = parseInt(prompt("Write a Number"));
//   let container = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       container += "*";
//     }
//     console.log(container);
//     container = "";
//   }
// }

// patternOne();

//////////////////////
///// Patterns-2 /////
//////////////////////

// function patternTwo() {
//   const n = parseInt(prompt("Write a Number"));
//   let container = "";
//   for (let i = n; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//       container += "*";
//     }
//     console.log(container);
//     container = "";
//   }
// }

// patternTwo();

//////////////////////
///// Patterns-3 /////
//////////////////////

const patternThree = function () {
  const n = parseInt(prompt("Write a Number"));
  let container = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      container += " ";
    }
    for (let k = 1; k <= i; k++) {
      container += "*";
    }
    console.log(container);
    container = "";
  }
};

patternThree();
