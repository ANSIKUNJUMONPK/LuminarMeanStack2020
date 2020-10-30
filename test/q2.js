
    tweets=[
        "sachin tweet1",
        "sehwag tweet1",
        "kholi tweet1",
        "sachin tweet1",
        "kholi tweet1"]
obj={}
for(elem of tweets){
    if(elem in obj){
    obj[elem]+=1;
    }
    else{
        obj[elem]=1
    }

}console.log(obj)
var s=[]
for(elem in obj){
    
    s.push(obj[elem])
// console.log(s)
}
var so=s.sort((a,b)=>(b-a))
console.log("sorted")
console.log(so)
var ob={}


var max=so.reduce((num1,num2)=>(num1>num2)?num1:num2)
console.log("maximum tweet is"+ max)


  


