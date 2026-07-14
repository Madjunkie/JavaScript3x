// ======================
// JAVASCRIPT DATA TYPES
// ======================

// PRIMITIVE TYPES (immutable, stored by value)

// NUMBER — integer, float, Infinity, NaN
let int = 42;
let float = 3.14;
let infinity = Infinity;
let notANumber = NaN;
console.log("number:", int, float, infinity, notANumber);
console.log("typeof:", typeof int); // "number"

// STRING — single, double, backtick quotes
let single = 'hello';
let double = "world";
let template = `template ${double}`;
console.log("string:", single, double, template);
console.log("typeof:", typeof single); // "string"

// BOOLEAN — true or false
let isActive = true;
let isDone = false;
console.log("boolean:", isActive, isDone);
console.log("typeof:", typeof isActive); // "boolean"

// UNDEFINED — declared but not assigned
let nothing;
console.log("undefined:", nothing);
console.log("typeof:", typeof nothing); // "undefined"

// NULL — intentional empty value
let empty = null;
console.log("null:", empty);
console.log("typeof:", typeof empty); // "object" (historical JS bug)

// BIGINT — numbers beyond 2^53 - 1
let big = 9007199254740991n;
console.log("bigint:", big);
console.log("typeof:", typeof big); // "bigint"

// SYMBOL — unique, immutable identifier
let sym1 = Symbol("key");
let sym2 = Symbol("key");
console.log("symbol:", sym1, sym2);
console.log("same?", sym1 === sym2); // false — always unique
console.log("typeof:", typeof sym1); // "symbol"

// OBJECT TYPES (mutable, stored by reference)

// OBJECT LITERAL
let person = { name: "Alice", age: 30 };
console.log("object:", person);
console.log("typeof:", typeof person); // "object"

// ARRAY (a kind of object)
let colors = ["red", "green", "blue"];
console.log("array:", colors);
console.log("typeof:", typeof colors); // "object"

// FUNCTION (callable object)
function greet() { return "hi"; }
console.log("function:", greet);
console.log("typeof:", typeof greet); // "function"

// DATE (built-in object)
let now = new Date();
console.log("date:", now);
console.log("typeof:", typeof now); // "object"

// typeof EDGE CASES
console.log("\n--- Edge Cases ---");
console.log("typeof NaN:", typeof NaN);       // "number"
console.log("typeof []:", typeof []);         // "object"
console.log("typeof null:", typeof null);     // "object"
console.log("typeof typeof 42:", typeof typeof 42); // "string"
