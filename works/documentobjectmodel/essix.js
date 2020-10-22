for(var i=0;i<10;i++){//scope of i is not limited to a partiuclar block
    console.log(i)
}
console.log("i"+i)

for(let i=0;i<10;i++){  //scope of i limited to this block
    console.log(i)
}
console.log("i"+i)


const pie=3.14;//making it a constatnt value
pie=3.15;
console.log(pie)




