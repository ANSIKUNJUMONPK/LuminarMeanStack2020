class employee{

    constructor(eid,ename){
        this.eid=eid;
        this.ename=ename;
    }
    getemployee(){
        console.log(this.eid)
        console.log(this.ename)
    }
}
var emp=new employee(100,"ajay")//constructor is automatically invoked at the time of object creation
console.log()

//d(uty of setemployee() is initialising instant variables(eid,ename)
