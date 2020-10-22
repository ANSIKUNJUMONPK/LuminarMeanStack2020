var lower = 10;
var upper = 50;
for (var i = lower; i <= upper; i++) {

    var flag = 0;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
        }
    }
    if (flag == 0) {
        console.log(i);
    }
}