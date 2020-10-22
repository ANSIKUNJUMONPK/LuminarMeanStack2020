class student{
    constructor(rol,name,total,course){
        this.rol=rol;
        this.name=name;
        this.total=total;
        this.course=course;
    }
}
    getstu=()=>{
        console.log(this.rol)
        console.log(this.name)
        console.log(this.total)
        console.log(this.course)

}
var obj=new student(1,"ansi",200,"bca")
var obj1=new student(2,"abhi",100,"mca")
var obj2=new student(3,"ashmi",150,"bcom")
var obj3=new student(4,"achu",175,"bca")
var st=[]
st.push(obj)
st.push(obj1)
st.push(obj2)
st.push(obj3)
// for(s of st){
//     if(s.total>135){
//         console.log(s.name+"  "+s.rol+ " has total greater than 135")
//     }
// }
var  stud=st.filter(obj=>obj.total>135)
for(s of stud){

    console.log(s.name)
}
// for(s of st){
//     if(s.course=="bca"){
//         console.log(s.name+" has taken course bca")
//     }
// }

var  cfilter=st.filter(obj=>obj.course=="bca")
for(s of cfilter){
console.log(s.name+s.rol)
}
// var tot=0;
// for(s of st){
//     if(s.course=="bca"){
//     tot= tot+s.total;
//     }
// }console.log("the total no of students who have taken bca is " +tot)
var total=cfilter.map(obj=>obj.total).reduce((obj1,obj2)=>(obj1+obj2))
console.log(total)
var maxtotal=st.map(ob=>obj.total).reduce((obj1,obj2)=>(obj1>obj2)?obj1:obj2)
console.log(maxtotal)
var topst=st.filter(obj=>(obj.total==maxtotal))
console.log(topst)
// for(st of topst){
//     console.log(st)
// }
//  for (stud of topst){
//      stud.getstu();
//  }
