// Function 1

const getRandomArray = (length, min, max) => {
  const randomArray = [];
  for (i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    randomArray.push(randomNumber);
  }
  return randomArray;
};

console.log(getRandomArray(15, 1, 100));



// Function 2

const getModa = (...numbers) => {
  let counter = 0;
  let max = 0;
  let result;
  const sortNumbers = numbers.sort();
  for (i = 0; i < sortNumbers.length; i++) {
    if (sortNumbers[i] === sortNumbers[i + 1]) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter > max) {
      result = sortNumbers[i];
      max = counter;
    }
  }
  return result;
};

console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));




// Fuction 3

const getAverage = (...numbers) => {
  let average = numbers.reduce((accumulator, element) => {
    if (Number.isInteger(element)) {
      return accumulator + element;
    } else {
      return accumulator;
    }
  }, 0);
  return average / numbers.length;
};

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));




// Function 4

const filterEvenNumbers = (...numbers) => {
  const oddNumbers = numbers.filter(number => {
    return number % 2 !== 0;
  });
  return oddNumbers;
};

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));




// Function 5

const countPositiveNumbers = (...numbers) => {
  const positiveNumbers = numbers.filter(number => {
       return number > 0;
})
  return positiveNumbers.length;
}

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));




// Function 6

const getDividedByFive = (...numbers) => {
  const numbersDividedByFive = numbers.filter(number => {
     return number % 5 === 0;
})
 return numbersDividedByFive;
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



document.writeln(`<p> <span class="name">Function 1</span> - returns an array of random numbers of given length, between min and max: <strong>input: (15, 1, 100)</strong> -- <span class="result">result: ${getRandomArray(15,1,100)}</span></p>`);
document.writeln(`<p> <span class="name">Function 2</span>  - returns the mode of given numbers: <strong>input: (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)</strong>  -- <span class="result">result:  ${getModa(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2)}</span></p>`);
document.writeln(`<p> <span class="name">Function 3</span>  - returns an average of given numbers: <strong>input: (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)</strong>  -- <span class="result">result: ${getAverage(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2)}</span></p>`);
document.writeln(`<p> <span class="name">Function 4</span>  - filter only odd numbers from given numbers: <strong>input: (1, 2, 3, 4, 5, 6)</strong>  -- <span class="result">result: ${filterEvenNumbers(1,2,3,4,5,6)}</span></p>`);
document.writeln(`<p> <span class="name">Function 5</span>  - counts how many positive numbers are there in an given array: <strong>input: (1, -2, 3, -4, -5, 6)</strong>  -- <span class="result">result: ${countPositiveNumbers(1,-2,3,-4,-5,6)}</span></p>`);
document.writeln(`<p> <span class="name">Function 6</span>  - filters all elements which are divided by 5: <strong>input: (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)</strong>  -- <span class="result">result: ${getDividedByFive(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2)}</span></p>`);
