var arr = [10, 2, 4, 11]
for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {//> descending order ,<-ascending order
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr)
