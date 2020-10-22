var arr=[10,11,12,13,14,15,16]
//find the sum of this array
var sum=0;
for(number of arr){
    
     sum=sum+number;
   
}
console.log(sum);


// find all  even nos from this array

for(number of arr){
    if(number%2==0){
    console.log(number);}
}


//store all even nos and odd nos into two different arrays

odd=[]
even=[]
for(number of arr){
    if(number%2==0){
        even.push(number)
    }
        else{
            odd.push(number)
        }
}
    console.log(odd);
    console.log(even)


