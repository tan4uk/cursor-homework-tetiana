const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };


const getMyTaxes = function(salary) {
    return salary * this.tax;
  };
  


  export {latvia, getMyTaxes};