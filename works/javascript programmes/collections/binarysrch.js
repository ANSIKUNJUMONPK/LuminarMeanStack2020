//procedure--binary search
//input is always a sorted array
//step2- lower is given oth position and upper is given the last location(lenght of arr)
//step 3 calc mid=(lower+upperr)/2



//var low=0;
//var upp=(ar.length)-1;
//console.log(upp)
//var mid=math.floor((low+upp)/2);
//var element=6
//case 1 srch element is ar[mid] ie, ar[3]---6>4
//if true, low=mid+1
//case 2 6>4--false ie, element<ar[mid], then low= mid-1
//case  element=ar[mid], elemnt is found//
var ar= [1, 2, 3, 4, 5, 6, 7, 11];
var low = 0;
var element = 6;
var upp = ar.length - 1;


while (low < upp) {//0<7  4<7

    var mid = Math.floor((low + upp) / 2);// mid=0+7/2=3.5=3          4+7/2=5.5=5
        if(element > ar[mid]) {//6>ar[3]---6>4--true    6>ar[5] 6>6 false 
            low = mid + 1;
        }
        else if(element < ar[mid]) {//6<6? flase
            upp = mid - 1;
        }
        else if(element == ar[mid]) {//6=6
            flag+=1;
            break;
            
        }
}if(flag>1){console.log("element found");}
else{console.log("element not ffound")}