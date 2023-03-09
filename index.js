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
    const newEmployee ={employee};
    employee.name =`Sam`;
return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee["name"];
    return employee;
}