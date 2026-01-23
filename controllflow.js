// Control Flow Statements in JavaScript

// If-Else Statement (if, if else, if else-if else)
// if (condition) {} --> condition true hoy to {} code run
if (12 < 13) {
    console.log(true);
}

if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run

if (!12) { // 12 --> true, !12 --> flase
    console.log("number");
}

if (!0) {
    console.log("number");
}

// -----------------------------------------------------------------------------------------------
// if-else Statement

if (12 < 13) {
    console.log(true);
} else {
    console.log(false);
}

if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run
else {
    console.log(false); // if if statement condition is false then run this code
}

if (!12) {
    console.log("number");
} else {
    console.log("Not A Number");
}
// --------------------------------------------------------------------------------------------------

// if-else if-else Statement
/*
if (condition) {
} else if (condition) {
} else {
}
*/

let loggedin = false;
let admin = false;

if (loggedin && admin) {
    console.log("welcome admin");
} else if (loggedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}
// ---------------------------------------------------------------
let marks = 89;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
// ----------------------------------------------------------------------


    let productName = "Laptop";
    let inStock = true;
    let price = 30000;

    if (inStock && price <= 31000) {
        console.log(productName + " is available and you can buy it");
    } 
    else if (inStock && price > 20000) {
        console.log(productName + " is available but too expensive");
    } 
    else {
        console.log(productName + " is out of stock");
    }
// ------------------------------------------------------------------------------
// Switch case Statement
switch ("BOGO") // value --> case value sathe match karshe ane code run thase
{
    case "First50":
        console.log("50% Off on First Order");
        break;

    case "BOGO":
        console.log("Buy one get one");
        break;

    case "BlackFriday":
        console.log("It's Black Friday Sale - get at Rs. 50");
        break;

    default:
        console.log("Offer Not Vaild");
}


// --------------------------------------------------------task

switch ("Rups") // value --> case value sathe match karshe ane code run thase
{
    case "First50":
        console.log("50% Off on First Order");
        break;
    default:
        console.log("Welcome to Rups");
}
