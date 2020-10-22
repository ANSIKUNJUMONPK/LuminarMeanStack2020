var data="hello hai hello hai hello";
//hell0=3 hai=2
console.log(data)
var words=data.split(" ");
console.log(words)
var obj={}//create empty object
for(word of words){
    if(word in obj){
        obj[word]+=1;
    }
    else{
        obj[word]=1;
    }
}console.log(obj)