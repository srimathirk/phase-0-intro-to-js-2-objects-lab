const employee = {name:"sam",streetAddress:"value"};
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = {...employee};
    newEmployee.streetAddress = '11 Broadway';
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee.streetAddress = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
const newEmployee = {...employee};
delete newEmployee[key];
return newEmployee; 
}
    /*const newEmployee ={employee};
    employee.name =`Sam`;
return newEmployee;
}*/
console.log(deleteFromEmployeeByKey(employee,key));
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee["name"];
    return employee;
}