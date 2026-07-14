# Identifiers — Definition & Rules

## What Is an Identifier?

An **identifier** is the name you give to a variable, function, class, object property, or label so you can reference it later. Everything you *name* in JS is an identifier.

```js
let myVariable = 10;        // "myVariable" is an identifier
function doSomething() {}   // "doSomething" is an identifier
class UserAccount {}        // "UserAccount" is an identifier
```

---

## Breakdown Table

| Layer               | What It Means                                     | Valid Example         | Invalid Example         |
|---------------------|---------------------------------------------------|-----------------------|-------------------------|
| **1st Character**   | Must be letter, `_`, or `$` — **not** a digit     | `let _temp;`          | `let 1stPlace;` ✘       |
| **Following chars** | Letters, digits, `_`, or `$` allowed              | `let item2;`          | `let my-var;` ✘         |
| **Case Sensitivity**| `name`, `Name`, `NAME` are **three** different IDs| `let x; let X;` ✅    | treating them as same ✘ |
| **Reserved Words**  | Cannot use JS keywords (`if`, `let`, `class`, …)  | `let myIf;`           | `let if;` ✘             |
| **Unicode Support** | Any Unicode letter is allowed (ES6+)              | `let año;`            | `let 🎉;` ✘ (emoji)    |
| **Convention**      | camelCase for variables/functions, PascalCase for classes | `getUserData`, `Person` | `get_user_data` in JS (usually snake_case is not JS convention) |

---

## Example Walkthrough

```js
// ✅ VALID identifiers
let userName = "Alice";       // starts with letter
let _count = 0;               // starts with underscore
let $price = 19.99;           // starts with dollar sign
let totalAmount = 100;        // camelCase — JS convention
let año = 2024;               // Unicode letter — valid
let _ = "underscore";         // single underscore is valid
let $ = "dollar";             // single dollar is valid

// ❌ INVALID identifiers
// let 1stPlace = "gold";     // ERROR: starts with digit
// let my-var = 5;            // ERROR: hyphen not allowed
// let let = 10;              // ERROR: reserved keyword
// let class = "math";        // ERROR: reserved keyword
// let void = null;           // ERROR: reserved keyword

// CASE SENSITIVITY — all 3 are different
let color = "red";
let Color = "blue";
let COLOR = "green";

console.log(color, Color, COLOR); // "red" "blue" "green"

// UNICODE identifier in action
let niño = 7;   // ñ is a valid Unicode letter
console.log(niño); // 7
```

---

## Best Practices

| Practice                     | Why It Matters                                      | ✅ / ❌                  |
|------------------------------|-----------------------------------------------------|--------------------------|
| **Use camelCase**            | JS ecosystem convention — all built-ins use it      | `let getUser;` ✅        |
| **Use PascalCase for classes**| Distinguishes constructors from regular functions   | `class User {}` ✅       |
| **Use UPPER_SNAKE for constants**| Signals the value should never change             | `const MAX_SIZE = 100;`  |
| **Start with a letter**      | Underscore prefixes suggest "private" (no real enforcement)| `let _internal;` use sparingly|
| **Avoid single-letter names**| Hurts readability except in loop counters (`i`, `j`)| `let x;` ❌ (in most cases)|
| **Don't shadow built-ins**   | Can break your code and confuse readers             | `let name;` ✅ / `let String;` ❌|

```js
// ✅ Good
const MAX_RETRIES = 3;
let userEmail = "alice@example.com";
function fetchData() {}

// ❌ Avoid
let d = "hello";                           // what is "d"?
let String = "overwritten";                // now String() is broken
let _ = "hack";                            // _ is a convention, not private
```

---

## Framework Usage — Testing Automation

Identifiers are everywhere in testing automation frameworks — **test names, hooks, matchers, fixtures, and page objects all rely on identifier rules**.

| Testing Area                        | Identifiers You Write                                            |
|-------------------------------------|------------------------------------------------------------------|
| **Test block names**                | `describe("Login")`, `it("returns 200")` — descriptive strings (not identifiers), but the callback function is |
| **Test callback functions**         | `it("works", function myTest() {})` — `myTest` (optional)        |
| **Custom commands / helpers**       | `Cypress.Commands.add("loginAsUser", ...)` — `loginAsUser`       |
| **Page Object classes**             | `class LoginPage {}` — PascalCase identifier                    |
| **Page Object methods**             | `loginPage.enterEmail()`, `loginPage.clickSubmit()` — camelCase |
| **Fixtures / test data**            | `const testUser = { name: "Alice" }` — camelCase                |
| **Hooks (beforeEach / afterAll)**   | Anonymous callbacks — identifier not needed, but inner variables must be valid |

```js
// Playwright / Cypress example — identifiers throughout
class LoginPage {                              // LoginPage — PascalCase
  async enterEmail(email) {                    // enterEmail — camelCase
    await page.fill("#email", email);
  }
  async clickSubmit() {                        // clickSubmit — camelCase
    await page.click("#submit");
  }
}

describe("Login Flow", () => {                 // "Login Flow" — string (not an identifier)
  const testUser = { email: "a@b.com" };       // testUser — camelCase

  beforeEach(() => {                           // beforeEach — JS keyword (not our identifier)
    const loginPage = new LoginPage();          // loginPage — camelCase
    loginPage.enterEmail(testUser.email);
  });

  it("should redirect on success", async () => { // callback — anonymous, but follows rules
    await loginPage.clickSubmit();
    expect(page.url()).toContain("/dashboard");
  });
});
```

**The rule holds:** every name you invent — test helper, page object class, fixture variable — must follow identifier rules. Test descriptions are strings, so they're exempt, but everything else is fair game.

---

## Identifier Pipeline

```
User thinks of a name
         │
         ▼
Does it start with letter, _ or $ ?
         │
    ┌────┴────┐
    YES        NO → ❌ (e.g. "1name")
    │
    ▼
All remaining chars are letters, digits, _ or $ ?
    │
 ┌──┴──┐
 YES    NO → ❌ (e.g. "my-name")
 │
 ▼
Is it a reserved keyword (if, let, const, class, …)?
 │
 ┌──┴──┐
 NO     YES → ❌ (e.g. "let")
 │
 ▼
 Does it follow team conventions (camelCase, PascalCase)?
 │
 ┌──┴──┐
 YES    NO → ⚠️  won't break, but harder to read
 │
 ▼
 ✅ Valid Identifier
```

---

## TL;DR

| # | Rule                         | Example                    |
|---|------------------------------|----------------------------|
| 1 | Start with letter, `_`, `$`  | `let x; let _y; let $z;`  |
| 2 | Rest can be letter, digit, `_`, `$` | `let item1;`     |
| 3 | **Case-sensitive**           | `age ≠ Age`               |
| 4 | No reserved keywords         | ❌ `let function = 5;`    |
| 5 | Unicode letters OK           | `let niño;`               |
| 6 | camelCase by convention      | `getUserByEmail`          |
| 7 | **Best practice:** readable, consistent naming | `userData` > `x` |
| 8 | **Testing automation:** page object classes, helpers, fixtures are all identifiers | `class LoginPage {}` |

> **An identifier = any name you invent in code.** If it breaks a rule above, JS throws a syntax error before your code even runs. Follow conventions and your test code stays clean.
