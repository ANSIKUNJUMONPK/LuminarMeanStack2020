//we have to create a bank application
//with following functionalities createacc(),deposit(),withdraw(), balanceenquiry()
class bank {
    static get bname() {
        var bankname = "sbk";
        return bankname;
    }
    createaccount(pname, acno, balance ) {
        this.person_name = pname;
        this.account_no = acno;
        this.balnce = balance;
        //this.bank_name = b_name;
    }

    deposit(amount) {
        this.balnce += amount;
        console.log("your" +bank.bname + "  account credited with" + amount + "avl balance=" + this.balnce)
    }
    withdraw(amount) {
        if (amount > this.balnce) {
            console.log("balance is insufficient")
        }
        else {
            this.balnce = amount;
            console.log("your" + bank.bname + "  debited with" + amount + "aval balance=" + this.balnce)
        }
    }
    balanceenq() {
        console.log("your current account bALance is" + this.balnce)
    }

}

var obj = new bank()
obj.createaccount("ajay", 1001, 2000)
obj.deposit(10000)
obj.withdraw(5000)

var obj2 = new bank()
obj.createaccount("vijay", 1002, 3000)



