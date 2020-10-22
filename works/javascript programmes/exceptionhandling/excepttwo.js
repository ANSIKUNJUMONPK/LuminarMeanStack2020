
var data="10+2-5+8+4*8"
var res=eval(data)
console.log(res)
//if it was

try{
    var data="10+2-5$8+4*8"//dollarsign,
var res=eval(data)//tis is the abnormal code//exception occurs here
console.log(res)
}
catch(err){
    var data="10+2-5+8+4*8"
var res=eval(data)
    console.log(res)
}