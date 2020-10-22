 var ar=[1,2,3,4,5,6]
  var total=ar.reduce((num1,num2)=>(num1+num2))
  console.log(total)
  var greater=ar.reduce((num1,num2)=>num1>num2?num1:num2)
  console.log(greater)

