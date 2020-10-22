var one=document.querySelector("#one")
one.addEventListener("click",()=>{
    one.textcontent="am clicked";
    one.style.color="red";
})

var two=document.querySelector("#two")
two.addEventListener("dblclick",()=>{
two.style.color="green";
two.textContent="double clicked";

})
var three=document.querySelector("#three")
three.addEventListener("mouseover",()=>{
    three.style.color="yellow";
    three.textcontent="mouse over";
})
three.addEventListener("mouseout",()=>{
    three.style.color="black";
    three.textContent="mouse not over me";
})