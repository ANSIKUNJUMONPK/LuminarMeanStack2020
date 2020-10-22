class employee {


constructor(eid, ename, desig, sal){
    this.eid = eid;
    this.name = ename;
    this.desig = desig
    this.sal = sal
}
getemp = () => {

    console.log(this.eid)
    console.log(this.name)
    console.log(this.desig)
    console.log(this.sal)
}
}
var obj = new employee(100, "ans", "developer", 20000)
//obj.getemp()

var obj1= new employee(101, "anu", "develper", 26000)
//obj1.getemp()

var obj2= new employee(102, "anto", "developr", 27000)
////obj2.getemp()

var em=[]
em.push(obj)
em.push(obj1)
em.push(obj2)

//to print employee with salary greater than 22000
for(e of em){
if(e.sal>22000){
    console.log(e.name+e.sal)
}
}
//print all employyes whose designation=developer
for(e of em){
    if(e.desig=="developer"){
        console.log(e.name+e.desig)
    }
}


