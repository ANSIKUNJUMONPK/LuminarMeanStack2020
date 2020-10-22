var num1=10;
var num2=0;
try{
    if(num2==0 ) throw "divison by zero"
    var res=num1/num2;
    console.log("res="+res)
}
catch(err){
    console.log(err)
}