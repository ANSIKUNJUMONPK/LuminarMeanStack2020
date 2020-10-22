var names=["abi","anu","Ajay","binu","bijoy", "bini"]
var uppercase=names.map(name=>name.toUpperCase()) //change to uppercase
console.log(uppercase)
//fetch names starting with a
var aletters=names.filter(name=>name.charAt(0)=="a")
console.log(aletters)
