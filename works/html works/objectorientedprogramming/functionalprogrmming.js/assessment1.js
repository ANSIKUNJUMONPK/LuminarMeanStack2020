class employee{
    constructor(eid,ename,edesig,ejoin,eresig){
        this.id=eid;
        this.name=ename;
        this.desig=edesig;
        this.join=ejoin;
        this.resig=eresig;
    }
}
getemp=()=>{
    console.log(this.id)
    console.log(this.name)
    console.log(this.desig)
    console.log(this.join)
    console.log(this.resig)
}
var obj=new employee(100,"ajay","devop",1981,2003)
var obj1=new employee(101,"vijay","devop",1992,2008)
var obj2=new employee(102,"bijoy","ba",1999,2007)
var obj3=new employee(103,"jhon","ba",1989,2010)
var obj4=new employee(104,"danie","qa",2009,2014)
var obj5=new employee(105,"lari","qa",1987,2010)
var em=[]
em.push(obj)
em.push(obj1)
em.push(obj2)
em.push(obj3)
em.push(obj4)
em.push(obj5)
console.log("employee names with designation")
 var p=em.map(obj=>obj.name+"  = "+obj.desig)
 console.log(p)
 console.log("employees whose designation is devop")
var de=em.filter(obj=>obj.desig=="devop")
console.log(de)
console.log("employees who worked in 80's")
var ye=em.filter(obj=>((obj.join<1990) && (obj.resig>1980)))
 console.log(ye)   
console.log("employees who has experience greater than 9 years")
var yea=em.filter(obj=>((obj.resig)-(obj.join))>9)
console.log(yea)
console.log("employees based on joining years")
var sort=em.sort((obj,obj1)=>obj.join-obj1.join)
console.log(sort)
