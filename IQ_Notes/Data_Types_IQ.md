# JavaScript Data Types — Definition & Breakdown

## What Are Data Types?

A **data type** defines what kind of value a piece of data holds — a number, a string of text, a true/false flag, and so on. JavaScript is **dynamically typed**, meaning you don't declare the type — the engine figures it out at runtime based on the value you assign.

```js
let a = 42;        // type: number
let b = "hello";   // type: string
let c = true;      // type: boolean
```

---

## Breakdown Table

| Category       | Type          | typeof Output     | Example                      | Mutable? |
|----------------|---------------|-------------------|------------------------------|----------|
| **Primitive**  | `number`      | `"number"`        | `42`, `3.14`, `NaN`, `Infinity` | No    |
| **Primitive**  | `string`      | `"string"`        | `"hello"`, `'world'`, `` `hi` `` | No   |
| **Primitive**  | `boolean`     | `"boolean"`       | `true`, `false`              | No       |
| **Primitive**  | `undefined`   | `"undefined"`     | `let x;`                     | No       |
| **Primitive**  | `null`        | `"object"` ✱      | `let x = null;`              | No       |
| **Primitive**  | `bigint`      | `"bigint"`        | `9007199254740991n`          | No       |
| **Primitive**  | `symbol`      | `"symbol"`        | `Symbol("id")`               | No       |
| **Object**     | `object`      | `"object"`        | `{}`, `[]`, `new Date()`     | Yes      |
| **Object**     | `function`    | `"function"`      | `function() {}`              | Yes      |

> ✱ `typeof null === "object"` is a long-standing JS bug that won't be fixed for backward compatibility.

---

## Example Walkthrough

```js
// ======================
// PRIMITIVE TYPES
// ======================

// NUMBER — integers, floats, Infinity, NaN
let int = 42;
let float = 3.14;
let inf = Infinity;       // result of 1 / 0
let notANumber = NaN;     // result of "abc" * 2
console.log(typeof int);  // "number"

// STRING — single, double, or backtick quotes
let single = 'hello';
let double = "world";
let template = `hello ${double}`;  // template literal — embeds expressions
console.log(typeof single);        // "string"

// BOOLEAN — true / false
let isActive = true;
let isDone = false;

// UNDEFINED — declared but not assigned
let nothing;
console.log(nothing);     // undefined
console.log(typeof nothing); // "undefined"

// NULL — intentional "empty" value
let empty = null;
console.log(typeof empty); // "object" (historical bug)

// BIGINT — numbers beyond 2^53 - 1
let big = 9007199254740991n;
console.log(typeof big);   // "bigint"

// SYMBOL — unique, immutable identifier
let sym1 = Symbol("key");
let sym2 = Symbol("key");
console.log(sym1 === sym2); // false — every Symbol is unique

// ======================
// OBJECT TYPES (non-primitive)
// ======================

// OBJECT LITERAL
let person = { name: "Alice", age: 30 };
console.log(typeof person); // "object"

// ARRAY (a kind of object)
let colors = ["red", "green", "blue"];
console.log(typeof colors); // "object"

// FUNCTION (callable object)
function greet() { return "hi"; }
console.log(typeof greet);  // "function"

// DATE (built-in object)
let now = new Date();
console.log(typeof now);    // "object"

// ======================
// typeof edge cases
// ======================
console.log(typeof NaN);       // "number" — NaN is a number type
console.log(typeof []);        // "object" — not "array"
console.log(typeof null);      // "object" — historical bug
console.log(typeof typeof 42); // "string" — typeof always returns a string
```

---

## Best Practices

| Practice                          | Why It Matters                                          | ✅ / ❌                    |
|-----------------------------------|---------------------------------------------------------|----------------------------|
| **Prefer `===` over `==`**        | `==` coerces types, leading to subtle bugs              | `a === b` ✅               |
| **Use `const` by default**        | Prevents accidental reassignment; use `let` only when needed | `const x = 5;` ✅      |
| **Check types before operations** | `typeof` guard prevents runtime crashes                 | `typeof x === "number"` ✅ |
| **Avoid implicit coercion**       | `"5" - 3` works, but `"5" + 3` doesn't — confusing      | `Number("5") + 3` ✅       |
| **Use `Number.isNaN()` not `isNaN()`** | Global `isNaN()` coerces; `Number.isNaN()` doesn't   | `Number.isNaN(x)` ✅       |
| **Use `.toString()` or `String()`** | Safer than concatenating with `""` to convert          | `String(val)` ✅           |
| **Use `BigInt` for large integers**| Numbers lose precision past 2^53                        | `9007199254740993n` ✅     |

```js
// ✅ Good
const price = Number("19.99");
if (typeof price === "number" && !Number.isNaN(price)) {
  console.log(price * 1.1); // 21.989
}

// ❌ Avoid
let result = "5" - 3;       // 2 — works, but confusing
let mystery = "5" + 3;      // "53" — string concatenation, not addition
if (isNaN("abc")) { }       // true — but isNaN coerces first
```

---

## Framework Usage — Testing Automation

Data types are the foundation of assertions, fixtures, and page-object properties in test frameworks. Knowing what type a value *actually* is often determines whether a test passes or fails.

| Testing Area                     | Data Types in Play                                                  |
|----------------------------------|---------------------------------------------------------------------|
| **Assertions**                   | `expect(count).toBe(3)` — `number`; `expect(text).toContain("hi")` — `string` |
| **Fixtures / test data**         | Objects, arrays, strings, numbers, booleans — all types            |
| **Selectors / locators**         | `page.locator("#id")` — `string`                                    |
| **Timing / delays**              | `page.waitForTimeout(1000)` — `number` (ms)                        |
| **Boolean toggles**              | `await page.isVisible()` returns `boolean`                          |
| **Form values**                  | `.fill("text")` — `string`; `.inputValue()` returns `string`        |
| **API responses (JSON)**         | `response.json()` — returns `object`; status codes — `number`       |
| **Environment variables**        | `process.env.BASE_URL` — always `string` (even `"true"` / `"false"`) |
| **Null / undefined checks**      | `await page.$("#id")` returns `null` when not found                 |

```js
// Playwright test — data types everywhere
test("user profile displays correctly", async ({ page }) => {
  const user = {                          // object
    name: "Alice",                         // string
    age: 30,                               // number
    isActive: true,                        // boolean
    tags: ["admin", "beta"],               // array (object)
  };

  await page.goto("/profile");

  const name = await page.textContent("[data-test=name]"); // string
  expect(name).toBe(user.name);

  const ageText = await page.textContent("[data-test=age]"); // string from DOM
  const age = Number(ageText);                                // explicit conversion
  expect(age).toBe(user.age);

  const visible = await page.isVisible("[data-test=badge]"); // boolean
  expect(visible).toBe(user.isActive);

  // Null check — element doesn't exist
  const missing = await page.$("[data-test=deleted]");
  expect(missing).toBeNull();
});
```

---

## Data Type Pipeline

```
Value is created (literal, variable, function return)
         │
         ▼
JS engine determines the type at runtime (typeof)
         │
         ├─────────────┬────────────────────┬──────────────────┐
         ▼             ▼                    ▼                  ▼
      Primitive     Function           Object              (Other)
         │             │                   │
         ├── number    callable,         ├── plain {}        not hit
         ├── string    typeof ===        ├── array []
         ├── boolean   "function"        ├── Date
         ├── undefined                    ├── null (bug)
         ├── null                          └── Map, Set, ...
         ├── bigint
         └── symbol
              │
              ▼
     Stored by value              Stored by reference
  (immutable, copied)        (mutable, shared reference)
```

---

## TL;DR

| # | Type        | typeof          | Example              | Notes                          |
|---|-------------|-----------------|----------------------|--------------------------------|
| 1 | `number`    | `"number"`       | `42`, `3.14`, `NaN`  | Covers ints, floats, NaN       |
| 2 | `string`    | `"string"`       | `"hello"`            | Single, double, backtick       |
| 3 | `boolean`   | `"boolean"`      | `true`, `false`      |                                |
| 4 | `undefined` | `"undefined"`    | `let x;`             | Default value of unassigned    |
| 5 | `null`      | `"object"` ✱     | `null`               | Intentional empty              |
| 6 | `bigint`    | `"bigint"`       | `100n`               | Large integers                 |
| 7 | `symbol`    | `"symbol"`       | `Symbol("id")`       | Unique keys                    |
| 8 | `object`    | `"object"`       | `{}`, `[]`           | Mutable, stored by reference   |
| 9 | `function`  | `"function"`     | `function() {}`      | Callable object                |

> **Key takeaways:** Primitives (7 types) are immutable and stored by value. Objects (including arrays) are mutable and stored by reference. Always use `===`, check types with `typeof` before operating, and convert explicitly (`Number()`, `String()`) instead of relying on coercion. In test automation, knowing whether something is `null`, `undefined`, or a string often makes or breaks an assertion.
