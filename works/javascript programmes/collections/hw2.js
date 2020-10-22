var num=[-1,1,4,3,0]
//find least positive missing no
var i=0;
var missing=0;
var flag=0;
for(num1 of num){
    for(i=0;i<=4;i++){
    if(num[i]>num[i+1]){
        temp=num[i]
        num[i]=num[i+1]
        num[i+1]=temp
    }}}
    for(i=0;i<4;i++){
    console.log(num[i])}
    for(num1 of num){
        
   for(i=0; i<=4;i++){
       if(num1!==i){
        missing=i+1;
        
           
           break;
           
        } 
        console.log(missing)
        
   }
   }
    