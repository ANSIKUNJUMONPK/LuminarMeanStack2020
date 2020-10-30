var input = [3, 1, 4, 6, 5]

sq = []
for (elem of input) {
    value = elem * elem;
     sq.push(value)
} 
console.log(sq)
for (num1 of sq) {
    for (num2 of sq) {
        if ((num1 + num2) == (value)) {
            console.log(num1 + "* " + num1 + " + " + num2 + "* " + num2 + " =" + value)
        }
    }
}