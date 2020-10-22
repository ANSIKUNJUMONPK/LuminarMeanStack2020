string = "HEY" //output=HEEYYY
console.log(string)
var len = string.length;
var op = " "
for (var i = 0; i < len; i++) { 
     
   for( var j=0;j<=i;j++){
        
        op = op + string[i]
        

    }
}
console.log(op)


