
try{
    var data="10+2$5*8+4*8"  //exception occured
var res=eval(data) 
console.log(res)
}
catch(err){
    var data="10+2+5*8+4*8"
    console.log(data)
    
}