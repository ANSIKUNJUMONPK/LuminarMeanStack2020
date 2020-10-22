class student{

    setstudent(rol,nam,crse,t){
        this.rollno=rol;
        this.name=nam;
        this.course=crse;
        this.total=t;

    }
    printstudent(){

        console.log("rollno="+this.rollno)
        console.log("name="+this.name)
        console.log("course="+this.course)
        console.log("total="+this.total)
    }
}
var obj=new student();//ccreated reference object
obj.setstudent(1,"ajay","java",2500);
obj.printstudent();
var obj1=new student();//ccreated reference object
obj1.setstudent(2,"vijay","php",3000);
obj1.printstudent();
