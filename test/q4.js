

var n=2;
var min=49;
var max=65;
 out=[];
for(var i=1;i<=10;i++){
    sq=i**n
    out.push(sq)
} 
console.log(out)
var  ou=out.filter(obj=>((obj>=min)&(obj<=max)))
for(obj of ou){
    console.log(obj)
}

