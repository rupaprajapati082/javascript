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