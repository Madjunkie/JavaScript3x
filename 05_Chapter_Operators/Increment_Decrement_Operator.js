

// Start value
let a = 10;

// We'll break the expression into explicit steps to show how the
// pre-increment (++a) and post-increment (a++) evaluate internally.

// Step 1: pre-increment (++a) - increments `a` first, then yields the incremented value.
// Equivalent internal behavior:
// a = a + 1; // a becomes 11
// value1 = a; // value1 is 11
a = a + 1;
const value1 = a; // value1 === 11

// Step 2: middle `a` in the expression uses the current value of `a` (after pre-increment)
const value2 = a; // value2 === 11

// Step 3: post-increment (a++) - yields the current value, then increments `a`.
// Equivalent internal behavior:
// value3 = a; // value3 is 11
// a = a + 1; // a becomes 12
const value3 = a;
a = a + 1;

// Now compute the sum as the original expression would: ++a + a + a++
const result = value1 + value2 + value3; // 11 + 11 + 11 === 33


console.log('value1 (from ++a):', value1);
console.log('value2 (middle a):', value2);
console.log('value3 (from a++ before increment):', value3);
console.log('final a after expression:', a);
console.log('result of expression:', result);

// Question 1

let b = 1;
const resultB = b++ + ++b;
console.log(resultB, b);

// Question 2

    let a = 100;

console.log(a++ + ++a +a++ + ++a);

console.log(a);

// Question 3

let k = 37;

console.log(--k + k--);

console.log(k);

// Question 4
let a = 5; 
let b = a-- - --a; 
console.log(b, a);

// Question 5
let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);     


