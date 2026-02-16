// Event - page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are even

// Event Listener - event nu reaction -- give reaction when click, dblclick, hover, typing

// Add Event Listener
// select --> event --> function --> what you change
// element.addEventListener("event_name", function(){})

// ==============================================
// Common Events : click, input, change, submit, mouseover, keyup
// Click
//dark mode or light mode
let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    // document.body.classList.toggle("bg-color");
    if(btn.textContent === "Dark Mode"){
        btn.textContent = "Light mode"
         document.body.style.backgroundColor="black";
    }else{
       
        btn.textContent = "Dark Mode"
         document.body.style.backgroundColor = "white";
    }
})
//color change box
let btn1=document.querySelector(".btn1");
let box=document.querySelector(".color-card");
btn1.addEventListener("click",()=>{
    // document.body.classList.toggle("bg-color");
    if(btn1.textContent === "Dark Mode"){
        btn1.textContent = "Light mode"
         box.style.backgroundColor="green";
    }else{
       
        btn1.textContent = "Dark Mode"
        box.style.backgroundColor="pink";
    }
})
//input
//how to know which is typed ?
let inp =document.querySelector("input");
inp.addEventListener("input",(dets)=>{
    if(dets.data!=null){

    console.log(dets.data);
    }
})
//change =--when you 
let sel=document.querySelector(".select");
sel.addEventListener("change",(dets)=>{
    console.log(dets);
     console.log(dets.target.value);
      mobile.textContent=dets.target.value;

})