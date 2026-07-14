


// comparasion operator will always return a boolean value (true or false)


// Strick comparasion operator (===) will check for both value and type

// ---> Examples of strick comparasion operator (===)
console.log('============================(===)==================================');
console.log(5 === 5);        // true // explaination: both value and type are same
console.log(5 === "5");      // false // explaination: value is same but type is different
console.log(true === 1);     // false // explaination: value is different and type is different

// ----> Examples of loose comparasion operator (==)
console.log('===========================(==)==================================');
console.log(5 == 5);        // true // explaination: both value and type are same
console.log(5 == "5");      // true // explaination: value is same, type is different
console.log(5 == 10);       // false // explaination: both value and type are different



// And operator (&&) will return true if both conditions are true, otherwise it will return false
console.log('============================(&&)==================================');
console.log(5 > 3 && 5 < 10);  // true // explaination: both conditions are true
console.log(5 > 3 && 5 > 10);  // false // explaination: first condition is true but second condition is false



// OR operator (||) will return true if any one of the conditions is true, otherwise it will return false
console.log('============================(||)==================================');
console.log(5 > 3 || 5 < 10); // true // explaination: first condition is true and second condition is also true
console.log(5 < 3 || 5 > 10); // false // explaination: both conditions are false

