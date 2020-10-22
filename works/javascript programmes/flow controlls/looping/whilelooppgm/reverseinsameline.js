var num=123;

 var res="";
while(num > 0){
     var digit=num %10;//3    
     res+=digit;// 2
       num=Math.floor(num/10);//123/10=12    12/10=1
     
}  console.log(res) ;
