//prime or not
var num=9;//1,9
var flag=0;
for(i=2;i<num; i++){
    if(num%i==0){
        flag+=1;
    break;
    }
    
    else{
        flag=0;
        
    }
}
if(flag>0){ 
    console.log("it is not prime")
}
else
{
    console.log("it is prime")}
