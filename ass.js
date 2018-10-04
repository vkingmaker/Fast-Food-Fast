class CommissionEmployee{
  constructor(firstname,lastname,email){
    this.fullName = `${firstname} ${lastname}`;
    this.email = email;
    this.commissionR = 0;
    this.grossSales = 0;
    this.earning = 0;
  }
  setCommissionR(rate){
    this.commissionR = (rate > 0 && rate < 1) ? rate : 0;
  }
  
  setGrossSale(sales){
    this.grossSale = (sales > 0) ? sales : 0;
  }

  setEarning(){
    this.earning = this.grossSale * this.commissionR;
  }

  toString(){
    return `${this.fullName} is a commission employee, with the credentials.
    Email: ${this.email} and 
    earning: ${this.earning}`;
  }
}

class SalaryAndCommissionEmployee extends CommissionEmployee{
  construction(firstname,lastname,email,salary){
    super(firstname,lastname,email);
    this.salary = salary;
  }

  setEarning(){
    this.earning = this.salary + (this.grossSale * this.commissionR);
  }
  toString(){
    return `${this.fullName} is a salaryAndCommissionEmployee employee, with the credentials.
    Email: ${this.email} and 
    earning: ${this.earning}`;
  }
}

let employee = new CommissionEmployee('victor','Monday','vkingmaker@gmail.com');

employee.setGrossSale(100000);
employee.setCommissionR(0.8);
employee.setEarning();
console.log(employee.toString());


let salaryComEmployee = new SalaryAndCommissionEmployee('victor','Monday','vkingmaker@gmail.com',50000);

salaryComEmployee.setGrossSale(100000);
salaryComEmployee.setCommissionR(0.8);
salaryComEmployee.setEarning();
console.log(salaryComEmployee.toString());