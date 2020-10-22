//alert("connected")
var htag=document.getElementsByTagName("h1")
for(tags of htag){
    tags.style.color="red"
} 
var first=document.getElementById("first")
first.style.color="green"
var cls=document.getElementsByClassName("two")
for(cl of cls){
    cl.style.color="blue"
}
var lst=document.querySelectorAll("li")
for(let it of lst){
    it.style.color="green";
}
var meth=document.querySelector("#mth")
meth.style.color="cyan";
var list=document.querySelectorAll(".lis")
for(let ls of list){
    ls.style.color="blue";

}

var hone=document.querySelector("#first")
var data=hone.textContent;
alert(data)


hone.textContent="helloworld"


var lst=document.querySelectorAll(".lis")
for(let item of lst){
    item.textContent="listitem";//to change as listitem
}
