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
