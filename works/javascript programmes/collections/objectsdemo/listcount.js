var arr=[10,10,20,20,30,32,31]
console.log(arr)
var obj={}
for(word of arr){
    if(word in obj){
        obj[word]+=1;
    }
    else{
        obj[word]=1;
    }
}console.log(obj)