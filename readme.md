Javascript Variable
<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: </p>
<p>Why : </p>
<h1>let hoist hota hai lekin Temporal Dead Zone (TDZ) me hota hai
Declare hone se pehle let variable use nahi kar sakte</h1>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: </p>
<p>Why : </p>
<h1>var hoist hota hai aur default value undefined hoti hai
Isliye error nahi aata</h1>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: </p>
<p>Why : </p>
<h1>var block scope follow nahi karta
Same variable overwrite ho jata hai</h1>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: </p>
<p>Why : </p>
<h1>let block scope hota hai Block ke andar aur bahar alag variables bante hain</h1>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: </p>
<p>Why : </p>

<h1>
const me reference constant hota hai
Object ke andar ki value change ho sakti hai
Lekin poora object reassign nahi kar sakte</h1>
</div>
 
 

 Javascript Datatype:


<h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer or Error: </p>
<p>Why : true is converted to 1
false is converted to 0
1 + 0 = 1
JavaScript automatically converts booleans to numbers when using + (if no string is involved).</p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer or Error: </p>
<p>Why : null is converted to 0 in numeric operations
0 + 1 = 1</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer or Error: </p>
<p>Why : "12" is a string
+ with a string performs string concatenation
Number 12 is converted to string "12"
Result: "12" + "12" → "1212"</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer or Error: </p>
<p>Why : undefined is a falsy value
!! converts a value to its boolean form</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer or Error: </p>
<p>Why : - does not support string concatenation
JavaScript converts "12" to number 12
12 - 1 = 11</p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>Answer or Error: </p>
<p>Why : NaN means Not a Number
It is the result of an invalid numeric operation
JavaScript still treats it as a numeric type</p>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>Answer or Error: </p>
<p>Why :Variable is declared but not assigned
JavaScript automatically assigns undefined =====</p>
</div>



<h2>JavaScript Operators (Simple)</h2>

<!-- Example 1 -->
<h3>Example 1</h3>
<p><b>Code:</b></p>
<pre>
console.log(a);
let a = 10;
</pre>

<p><b>Answer / Error:</b></p>
<p>Error: Cannot access 'a' before initialization</p>

<p><b>Why:</b></p>
<p>
let variable hoist hota hai par initialize nahi hota,
isliye pehle use karne par error aata hai.
</p>

<hr>

<!-- Example 2 -->
<h3>Example 2</h3>
<p><b>Code:</b></p>
<pre>
console.log(+"5" + 5);
</pre>

<p><b>Answer:</b></p>
<p>10</p>

<p><b>Why:</b></p>
<p>
Unary + string ko number bana deta hai.
</p>

<hr>

<!-- Example 3 -->
<h3>Example 3</h3>
<p><b>Code:</b></p>
<pre>
console.log("5" + 5);
</pre>

<p><b>Answer:</b></p>
<p>55</p>

<p><b>Why:</b></p>
<p>
String hone ki wajah se concatenation hota hai.
</p>

<hr>

<!-- Example 4 -->
<h3>Example 4</h3>
<p><b>Code:</b></p>
<pre>
console.log(typeof null);
</pre>

<p><b>Answer:</b></p>
<p>object</p>

<p><b>Why:</b></p>
<p>
JavaScript ka old bug hai.
</p>

<hr>

<!-- Example 5 -->
<h3>Example 5</h3>
<p><b>Code:</b></p>
<pre>
let arr = [];
console.log(typeof arr);
console.log(arr instanceof Array);
</pre>

<p><b>Answer:</b></p>
<p>object<br>true</p>

<p><b>Why:</b></p>
<p>
Array reference type hai, isliye instanceof use hota hai.
</p>

<hr>

<!-- Example 6 -->
<h3>Example 6</h3>
<p><b>Code:</b></p>
<pre>
console.log(!12);
console.log(!!12);
</pre>

<p><b>Answer:</b></p>
<p>false<br>true</p>

<p><b>Why:</b></p>
<p>
12 truthy value hai, ! reverse karta hai.
</p>

<hr>

<!-- Example 7 -->
<h3>Example 7</h3>
<p><b>Code:</b></p>
<pre>
let result = 12 > 13 ? "true" : "false";
console.log(result);
</pre>

<p><b>Answer:</b></p>
<p>false</p>

<p><b>Why:</b></p>
<p>
Condition false hai isliye else part chala.
</p>
<---------------------------------------------->

<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>why:&& (AND) operator me dono conditions true honi chahiye
x > 5 → true
y > 5 → true
Isliye if block execute hua</p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>why:
|| (OR) operator me ek bhi condition true ho to chalega
isAdmin true hai
Isliye access mil gaya</p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Why:
temp > 30 → true
!true → false
if false hua → else execute hua</p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Why:
JavaScript me 0 falsy value hoti hai
Isliye else block chala</p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Why:
78 ≥ 70 → true
Isliye "C" assign hua</p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Why:
120 ≥ 100 → true
First condition match hui
</p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Why:
&& me dono true hone chahiye
hasToken false hai
Isliye "Deny"</p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>Why:
a++ → value ko 1 se increase karta hai
5 → 6</p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>Why:
++a → pehle increase, phir use
8 → 9</p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>
Why:
b++ → pehle value assign, baad me increase
c = 4
b = 5</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Why:
++b → pehle increase
b = 5, c = 5</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>Why:
m-- → pehle print, baad me decrease
First: 10
Then: 9</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>Why (step by step):
n++ → 5 (n = 6)
++n → 7
5 + 7 = 12</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>Why:
result ++likes; ❌ invalid syntax
Correct syntax hota:</p>
</div>

<div>
<h1>Example 12:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Why:
count-- → pehle value compare hoti hai
5 === 5 → true
Baad me count 4 ho jata hai</p>
</div>
================================controllflow===================================
<div>
  <h1>Example 1 :</h1>

  <p>let x = 2;</p>

  <p>
  switch(x){
     case 2:
       console.log("Two");
     case 3:
       console.log("Three");
  }
  </p>

  <p><b>Output:</b> Two Three</p>

  <p><b>Why:</b>  
  Switch case me <code>break</code> use nahi kiya gaya hai,  
  isliye jab <code>case 2</code> match hua to uske baad ka  
  <code>case 3</code> bhi execute ho gaya (fall-through concept).
  </p>
</div>
<div>
  <h1>Example 2 :</h1>

  <p>
  function getGrade(score){
    if(score >= 90 && score <= 100) return "A+";
    else if(score >= 80) return "A";
    else if(score >= 70) return "B";
    else if(score >= 60) return "C";
    else if(score >= 33) return "D";
    else if(score >= 0) return "Fail";
    else return "Invalid Marks";
  }
  </p>

  <p><b>Output (getGrade(75)):</b> B</p>

  <p><b>Why:</b>  
  Score 75, 70–79 ke range me aata hai,  
  isliye function <b>"B"</b> return karta hai.  
  Conditions top-to-bottom check hoti hain.
  </p>
</div>
<div>
  <h1>Example 3 :</h1>

  <p>Rock-Paper-Scissors Logic</p>

  <p>rock - scissors --> rock</p>
  <p>paper - rock --> paper</p>
  <p>scissors - paper --> scissors</p>

  <p><b>Why:</b>  
  Game ke rules ke according:
  Rock scissors ko tod deta hai,  
  Paper rock ko cover karta hai,  
  aur Scissors paper ko kaat deta hai.  
  Isliye in combinations me winner decide hota hai.
  </p>
</div>

<p>------------------------------------------------------------------------</p>

<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
 <p><b>Why:</b></p>
<p>
while loop pehle condition check karta hai.<br>
Jab tak condition true hoti hai, loop chalta rehta hai.<br>
Yahan variable 10 se start hota hai aur har baar 1 se kam hota hai,<br>
isliye numbers 10 se 1 tak print hote hain.
</p>
</div>




<div>
<h1> (Break and Continue)Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<p>Write a Loop from 1 to 100 that:</p>
<p>Prints Each number</p>
<p>Stop Completely when it finds the first number divisible by 7</p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}
</p>
 <p><b>Why:</b></p>
  <p>
    loop har number ko print karta hai.<br>
    Jaise hi pehla number 7 se divisible milta hai,<br>
    break statement loop ko poori tarah stop kar deta hai.
  </p>
</div>

<div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);

}
</p>
<p><b>Why:</b></p>
  <p>
    continue statement multiples of 3 ko skip kar deta hai.<br>
    Jo numbers 3 se divisible nahi hain,<br>
    sirf wahi numbers print hote hain.
  </p>
  </div>
  ====================================================================function===================================
  <h2>## Function Examples</h2>
<hr>

<div>
<h1> Example 1: Function Declaration vs Expression </h1>
<p>Ans: Function declarations are hoisted fully and can be called before they are defined. Function expressions are not hoisted fully; the variable is hoisted but assignment happens at runtime.</p>
<p>Why: Declarations are stored in memory during the compilation phase; expressions are assigned at runtime.</p>
</div>

<div>
<h1> Example 2: Function hoisting with declaration </h1>
<pre>
greet();
function greet(){
    console.log("Hello!");
}
// Output: Hello!
</pre>
<p>Why: Function declarations are hoisted, so calling before definition works.</p>
</div>

<div>
<h1> Example 3: Convert normal function to Arrow Function </h1>
<pre>
function add(a, b){
    return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));      // 5
console.log(addArrow(2, 3)); // 5
</pre>
<p>Why: Arrow functions provide a shorter syntax and inherit `this` from the parent scope.</p>
</div>

<div>
<h1> Example 4: Parameters vs Arguments </h1>
<pre>
function welcome(name){ // 'name' is a parameter
    console.log("Welcome " + name);
}
welcome("user"); // "user" is the argument
// Output: Welcome user
</pre>
<p>Why: Parameters are placeholders; arguments are actual values passed.</p>
</div>

<div>
<h1> Example 5: Number of parameters vs arguments </h1>
<pre>
function temp(a, b, c){
    console.log(a, b, c);
}
temp(1, 2);
// Output: 1 2 undefined
</pre>
<p>Why: There are 3 parameters but only 2 arguments; missing arguments are `undefined`.</p>
</div>

<div>
<h1> Example 6: Default parameters </h1>
<pre>
function temp_user(name = "Guest"){
    console.log("Hello " + name);
}
temp_user();        // Output: Hello Guest
temp_user("Rupa");  // Output: Hello Rupa
</pre>
<p>Why: Default parameter assigns value if argument is missing.</p>
</div>

<div>
<h1> Example 7: Rest operator (...) </h1>
<pre>
function number(...numbers){
    console.log(numbers);
}
number(1, 2, 3, 4, 5); // Output: [1,2,3,4,5]
</pre>
<p>Why: `...` collects all arguments into an array, useful for variable number of arguments.</p>
</div>

<div>
<h1> Example 8: Calculate total with rest parameters </h1>
<pre>
function calculateTotal(...scores){
    let total = 0;
    for(let i = 0; i < scores.length; i++){
        total += scores[i];
    }
    return total;
}

let sumTotal = calculateTotal(10, 20, 30, 40, 50);
console.log(sumTotal); // 150
</pre>
<p>Why: Rest parameters allow passing any number of arguments and summing them.</p>
</div>

<div>
<h1> Example 9: Early return in function </h1>
<pre>
function checkAge(age){
    if(age < 18) return console.log("Too Young");
    console.log("Access Granted");
}
checkAge(15); // Too Young
checkAge(20); // Access Granted
</pre>
<p>Why: Early return avoids extra else nesting, makes code cleaner.</p>
</div>

<div>
<h1> Example 10: Return value of a function </h1>
<pre>
function f(){
    return;
}
console.log(f()); // undefined
</pre>
<p>Why: If `return` is used without a value, the function returns `undefined` by default.</p>
</div>


  <div>
<h1> Example 11: </h1>
<p>What does it mean when we say "functions are first-class citizens"?</p>
<p>Ans: Functions can be treated like any other value in JavaScript. They can be assigned to variables, passed as arguments, or returned from other functions.</p>
<p>Why: Because JavaScript allows functions to be stored in variables, passed to other functions, and returned from functions, making them "first-class citizens".</p>
</div>

<div>
<h1> Example 12: </h1>
<p>Can you assign a function to a variable and then call it?</p>
<p>let a = function(){console.log("Hello");}</p>
<p>a();</p>
<p>Ans: Logs "Hello" to the console.</p>
<p>Why: The function is stored in variable `a`, and calling `a()` executes that function.</p>
</div>

<div>
<h1> Example 13: </h1>
<p>Pass a function into another function and execute it inside.</p>
<p>function abcd(val){ val() }</p>
<p>abcd(function(){ console.log("Hello") })</p>
<p>Ans: Logs "Hello" to the console.</p>
<p>Why: The function passed as an argument is called inside `abcd`, demonstrating a callback function.</p>
</div>

<div>
<h1> Example 14: </h1>
<p>What is a higher-order function?</p>
<p>Ans: A function that takes another function as an argument or returns a function.</p>
<p>Why: Higher-order functions allow functions to be used as values, enabling callbacks, functional programming, and more flexible code.</p>
</div>

<div>
<h1> Example 16: </h1>
<p>Pure or impure function?</p>
<p>let total = 5;</p>
<p>function num(num){ total += num; }</p>
<p>num(3);</p>
<p>Ans: Impure function.</p>
<p>Why: The function modifies an external variable `total`, causing side effects. Pure functions do not rely on or modify external state.</p>
</div>

<div>
<h1> Example 17: </h1>
<p>Convert example 16 function into a pure function.</p>
<p>function num(total, num){ return total + num; }</p>
<p>Ans: Use it like `let newTotal = num(5, 3);`</p>
<p>Why: It does not modify external variables and returns a new value based only on its inputs, making it pure.</p>
</div>

<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>
<p>Ans: Closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.</p>
<p>Example:</p>
<pre>
function outer() {
    let name = "Rupa";
    return function() {
        console.log(name);
    }
}
const inner = outer();
inner(); // Logs "Rupa"
</pre>
<p>Why: Closures are created when an inner function accesses variables from its outer function, preserving the scope.</p>
</div>

<div>
<h1> Example 19: </h1>
<p>What's logged?</p>
<pre>
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
</pre>
<p>Ans: 1 then 2</p>
<p>Why: The inner function is a closure that remembers `count` from the outer function. Each call increments the same `count` variable.</p>
</div>

<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>
<pre>
function init(){
    console.log("Initialized");
}
</pre>
<p>Ans:</p>
<pre>
(function init(){
    console.log("Initialized");
})();
</pre>
<p>Why: IIFE (Immediately Invoked Function Expression) runs the function immediately without explicitly calling it later.</p>
</div>

<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>
<pre>
let fun = (function(){
    let score = 0; // this is private variable
    return {
        getScore: function(){ console.log(score); },
        setScore: function(val){ score = val; }
    }
})();
</pre>
<p>Ans: IIFE is used to create private variables and avoid polluting the global scope. Real-world use case: module pattern.</p>
<p>Why: The function runs immediately and returns an object with access to private variables, simulating encapsulation.</p>
</div>

<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>
<pre>
temp_var();
var temp_var = function(){
    console.log("Hello");
}
</pre>
<p>Ans: Error - temp_var is not a function</p>
<p>Why: `var` declarations are hoisted but the assignment is not. At the time of calling, `temp_var` is undefined.</p>
</div>

<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>
<pre>
temp_var();
function temp_var(){
    console.log("Hello");
}
</pre>
<p>Ans: Logs "Hello"</p>
<p>Why: Function declarations are fully hoisted, so the function is available before its definition in the code.</p>
</div>
