var number=153;
var sum=0;
while(number>0){
    var digit= number%10;//3   5   1
    digit=digit**3;//27    125 1
    sum+=digit;//27+125+1
    var number=Math.floor(number/10)//15  1 
    
}
console.log(sum)