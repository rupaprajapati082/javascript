//functions
//what --> funstion is a block of code that performanve a specific task.
// why --> to avoid code repetition and to make code modular and reusable
// how --> function keyword,name ,parameteres,body ,return statement

// type of functions:
// function name(params) {} ---> function declaration
function abc() {}

// let fnc = function (){} ---> function expression
let fnc = function () {};

// let fnc = () => {} ---> arrow function ---> fat arrow function
let fnc1 = () => {};

 function cart(product,price){
    // product --parmas
    console.log(" Product:",product,"||" ,"price:" ,price)
 }
cart("mobile",200000)
 cart("tablet",456788)
 cart("laptop",500000)

//  simple
 function tcart(){
  
    console.log("Adding Product")
 }
tcart()
 tcart()
 tcart()

 //convert into function expression 
 //let cart ==function(){}
//  convert into arrow function
  let cart2=(product,price)=>{
    // product --parmas
    console.log(" Product:",product,"||" ,"price:" ,price)
 }
cart2("mobile",200000)
 cart2("tablet",456788)
 cart2("laptop",500000)

//  default ,rest and spread parameters in function 
// default
function abc(v1,v2){
    console.log(v1,v2);

}abc(20,21)
function cart3(product ="product",price="price"){
    console.log(product,price)
}
cart3(4000000)
// example
function abr(v3,v4){
    console.log(v3,v4);

}abr(600,900)
function cart4(product ="product",price="price"){
    console.log(product,price)
}
cart4("mobile",900000)

function abcd(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10)
{
    console.log(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10);
}abcd(1,2,3,4,5,6,7,8,9,10);

function cart4(...product){
    console.log(product);
}
cart4("mobile","pc","laptop","cpu","makbook");

// rest --> Jayre function ma multiple arguments pass karva to vadhare params banava
// pade chhe nate ne karvu pade ke mare sparemeter use kariye chiye (rest ----> ...)
function abc(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
    console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1(...numbers) {
    console.log(numbers);
}

abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments

function abcd2(v3, v4, ...numbers) {

    console.log(v3, v4, numbers);
}

abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//return of early return
//return --> function mathi value bahar moklava mate


function getValue1(value) {
    if (value < 25) return "Value is less than 25";
    else if (value < 50) return "Value is less than 50";
    else if (value < 75) return "Value is less than 75";
    return "Value is 100 or more";
}

let result = getValue1(80);
console.log(result);

//first class function
//function can be treated as variable
//function can be passed as argument to other functions
//functions can be returned from other functions

