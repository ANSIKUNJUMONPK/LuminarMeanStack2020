class student{//class
    static get collegename(){//use get keyword for getting static property outside class
        var clgname="luminar"
        return clgname
    }
    static printcollegename(){
        var clgname="luminar"
        console.log(clgname)
    }
    setstudent(rol,name){
        this.roll=rol
        this.nme=name
    }
    getstudent(){
        console.log(this.roll)
        console.log(this.nme)
    }
}
class myclass extends student {};//object of class
var obj= new myclass();
obj.setstudent(11,"anis")
obj.getstudent()
console.log(myclass.collegename)



//static method can be accessed by using  class name inside class but not outside