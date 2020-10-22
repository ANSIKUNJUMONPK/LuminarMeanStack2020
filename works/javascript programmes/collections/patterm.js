
//to print pattern [5,3,4]=[7,9,8]====[(3+4),(5+4),(5+3)]

var ar=[5,3,4]
 var total=0;
 for(item of ar){
     total+=item;
 }
 var op=[]
 for(item of ar){
     var element=total-item;
     op.push(element)
 }
 console.log(op)