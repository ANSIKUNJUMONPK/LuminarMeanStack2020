var employee={eid:123,ename:"rahul",edes:"devops"}
console.log(employee)
console.log(employee.ename)
//chek  for salary
console.log("salary" in employee)
employee["salary"]=25000
console.log(employee)
employee["salary"]+=5000
console.log(employee)
for(key in employee){
    console.log(key+","+employee[key])
}