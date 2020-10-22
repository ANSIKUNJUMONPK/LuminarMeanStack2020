class person{
    setperson(ag,nam){//method (like fn)// to set the persons attributes
    this.age=ag;
    this.name=nam;
    }
    getperson(){//to retreive
        console.log("name="+this.name);
        console.log("age="+this.age);
    }
}
var obj=new person();//create new reference
obj.setperson(25,"ajay");
obj.getperson()
var obj1=new person()
obj1.setperson(23,"vijay")
obj1.getperson()

