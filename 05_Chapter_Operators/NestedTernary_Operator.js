

// multiple conditions using nested ternary operator
let age = 25;
let category = age < 13 ? "Child" : age < 20 ? "Teenager" : age < 65 ? "Adult" : "Senior";
console.log(`Age: ${age} — Category: ${category}`);

// explain the line
// This line uses nested ternary operators to determine the category based on the age.
// It checks if the age is less than 13, and if so, assigns "Child".
// If not, it checks if the age is less than 20, and if so, assigns "Teenager".
// If not, it checks if the age is less than 65, and if so, assigns "Adult".
// If none of the above conditions are met, it assigns "Senior".


let name = 'madhu';

// if true add karan also
let lastName = 'Turpu';

let name1 = name ==='madhu' ? (lastName) : 'false';

console.log(name1);
