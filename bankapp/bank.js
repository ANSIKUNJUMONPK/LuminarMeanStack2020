class bank{

    static getaccountdetails() {
        let data = {
            test1: { username: "test1", password: "testone", accno:1001, balance:50000 },
            test2: { username: "test2", password: "testtwo", accno:1002, balance:60000 },
            test3: { username: "test3", password: "testthree", accno:1003, balance:70000 },
            test4: { username: "test4", password: "testfour", accno:1004, balance:40000 }
        }//data is the object here  , test1=key of object
        return data;//to get data into login
    }
    static login(){
       let usname=document.querySelector("#uname").value;
       let pwd=document.querySelector("#pwd").value;
       //alert(usname+pwd)
       let data=bank.getaccountdetails()
       if(usname in data){
           alert("user name exist")
       }else{
           alert("invalid user")
       }
       let password=data[usname]["password"]
       if(pwd==password){
        swal("login success", "You provided valid data", "success")
        setTimeout(()=>window.location.href="userhomepage.html",5000);
       }
       else{
        swal("login failed", "You provided wrong data", "error");
         
       }


      
    
    }
    static deposit(){
        // alert("connected")
        let uname=document.querySelector("#uname").value
        let amt=Number(document.querySelector("#amount").value);
        let data=bank.getaccountdetails();
       
       if(uname in data){
       
        data[uname]["balance"]+=amt
           alert("available balance"+data[uname]["balance"])
       }else{
           alert("invalid data")}
       }
       static withdraw(){
          
        //    alert ("connected")
        let uname=document.querySelector("#uname").value
        let amt=Number(document.querySelector("#amount").value)
        let data=bank.getaccountdetails();
        let avalbalance=data[uname]["balance"];
        if(amt>avalbalance){
            alert("insufficient balance")
        }else
        if(uname in data){
            data[uname]["balance"]-=amt
            alert("available balance"+data[uname]["balance"])
        }else{
            alert("invalid data")
        }
       }
    
}
