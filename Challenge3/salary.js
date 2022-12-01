//we first create a function that will take in the salary and the tax rate
function salary(basicSalary, benefits) {

    //we then declare a variable that will be used to calculate the gross salary
    let grossSalary = basicSalary + benefits;

    // this is the variable used to calculate the tax.
    let payee = grossSalary * 0.03;

    //variable used to calculate the nssf deductions.
    let nssfDeductions = grossSalary * 0.06;


    //variable used to calculate the nhif deductions.
    let nhifDeductions = grossSalary * 0.0025;


    //variable used to calculate the net salary.
    let totalDeductions = payee + nssfDeductions + nhifDeductions;
    
    //variable used to calculate the net salary.
    let netSalary = grossSalary - totalDeductions;

    // we then return the total net salary here.
    return "Gross Salary:" + grossSalary + " ,Payee:" + payee + " ,NSSF Deductions:"
     + nssfDeductions + ",NHIF Deductions:" + nhifDeductions + ",Total Deductions:"
    + totalDeductions + ",Net Salary:" + netSalary;


}
 
//we then call th function and pass in the values.

console.log(salary(10000, 20000));

