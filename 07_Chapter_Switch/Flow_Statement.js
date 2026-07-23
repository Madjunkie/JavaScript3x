
let responseCode = 200;

switch (responseCode) {
    case 200:
        console.log("OK");
        break;
    case 404:
        console.log("Not Found");
        break;   
        
    case 500:
        console.log("Internal Server Error");
        break;
}


console.log('==============================================================');

// switch grouping

let browser = "Chrome";

switch (browser) {

    case "Chrome":
    case "Firefox":
    case "Edge":
        console.log("Supported Browser");
        break;
    default:
        console.log("Unsupported Browser");

}


console.log('==============================================================');

// question 1 without break statement

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
}


console.log('==============================================================');


// question 2 printing defualt

let day1 = 6;

switch (day1) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid day");
}

console.log('==============================================================');

// question 3 having same value for multiple cases

let day2 = 3;

switch (day2) {
    case 1:
        console.log("Weekday");
        break;
    case 1:
        console.log("Workday");
        break;
    default:
        console.log("Invalid day");
}