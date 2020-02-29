const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// Task 1

const getMyTaxes = function(salary) {
  return salary * this.tax;
};

console.log(getMyTaxes.call(ukraine, 1500));
console.log(getMyTaxes.call(latvia, 1500));
console.log(getMyTaxes.call(litva, 1500));



// Task 2

const getMiddleTaxes = function() {
  return this.tax * this.middleSalary;
};

console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));



// Task 3

const getTotalTaxes = function() {
  return this.tax * this.middleSalary * this.vacancies;
};

console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));



// Task 4

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getMySalary = function(country) {
  const salary = getRandomNumber(1500, 2000);
  const taxes = getMyTaxes.call(country, salary);
  const profit = salary - taxes;
  const infoObj = {
    salary,
    taxes,
    profit
  };
  return setInterval(() => {
    console.log(InfoObj);
  }, 10000);
};

getMySalary(latvia);
