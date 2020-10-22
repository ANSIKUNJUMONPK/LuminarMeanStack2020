//find first recursive character
var arr="ABABABAC"

obj={}
for(char of arr){
    console.log(char)
}
for(char of arr){
    if(char in obj){
        console.log(" first recursive character is  " + char)
        break;
    }
    else{
        obj[char]=1;
    }
}



