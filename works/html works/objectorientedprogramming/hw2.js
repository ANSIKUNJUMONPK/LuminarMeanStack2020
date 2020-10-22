var arr = [1, 2, 3, 5, 7, 8, 9]
var op = []
for (num of arr) {

    if (num > 5) {
        num = num + 1
        
     }
    else if (num <= 5) {
        num = num - 1
        
    }
    op.push(num)
    
} 
console.log(op)
