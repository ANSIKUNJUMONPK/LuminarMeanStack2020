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
var arr=[]
for (key in obj){
    arr.push(obj[key])
}console.log(arr)
var srt=arr.sort((a,b)=>b-a)//sorting in descending order
var elem =srt[0]//highest value is in oth position
for(key in obj){
    if(elem==obj[key]){
        console.log("the word repeated max is  "+key)
    }
}