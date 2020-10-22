arr=[1,2,3,4,5]
//  var sq=[]
// for(item of arr){
    
//     sq.push((item**2))
  
// }console.log(sq)

var square=arr.map(num=>num**2)
console.log(square)
var square=arr.filter(num=>num%2==0)
console.log(square)