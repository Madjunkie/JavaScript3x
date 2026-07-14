// ======================
// ARITHMETIC OPERATORS
// ======================

let a = 20;
let b = 6;

console.log("a =", a, ", b =", b);

// ADDITION
console.log("a + b =", a + b); // 26

// SUBTRACTION
console.log("a - b =", a - b); // 14

// MULTIPLICATION
console.log("a * b =", a * b); // 120

// DIVISION
console.log("a / b =", a / b); // 3.333...

// MODULUS (remainder)
console.log("a % b =", a % b); // 2

// EXPONENTIATION
console.log("a ** b =", a ** b); // 64000000

// INCREMENT (postfix)
let x = 5;
console.log("x++   :", x++);   // 5 (returns original, then increments)
console.log("after  :", x);     // 6

// INCREMENT (prefix)
let y = 5;
console.log("++y   :", ++y);   // 6 (increments first, then returns)

// DECREMENT (postfix)
let m = 5;
console.log("m--   :", m--);   // 5 (returns original, then decrements)
console.log("after  :", m);     // 4

// DECREMENT (prefix)
let n = 5;
console.log("--n   :", --n);   // 4 (decrements first, then returns)

// UNARY NEGATION
let pos = 10;
console.log("-pos  :", -pos);  // -10

// UNARY PLUS (converts to number)
console.log("+'5'  :", +"5");  // 5 (number)
console.log("+true :", +true); // 1
