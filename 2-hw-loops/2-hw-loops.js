let numberN = prompt('Please enter the starting number');

numberN = parseInt(numberN, 10);

if (isNaN(numberN)) {
   alert("You've entered the wrong value!");
} 

console.log(`The starting number: ${numberN}`);


let numberM = prompt('Please enter the ending number');

numberM = parseInt(numberM, 10);

if (isNaN(numberM)) {
   alert("You've entered the wrong value!");
};

console.log(`The ending number: ${numberM}`);


if (numberN > numberM) {
  alert('Error! The starting number must be lower than the ending number!');
}


let skipEvenNumbers = confirm('Do you want to skip even numbers?')

console.log(`Skip even numbers? : ${skipEvenNumbers}`);


let sum = 0;

for (let i = numberN; i<= numberM; i++) {
    if (skipEvenNumbers === false) {
      sum+=i;
    } else if (skipEvenNumbers === true) {
        if (i%2 !== 0) {
        sum+=i;
      }
    }
  }


if (skipEvenNumbers === false) {
  console.log(`The sum of numbers between ${numberN} and ${numberM} is ${sum}`);
} else if (skipEvenNumbers === true) {
  console.log(`The sum of odd numbers between ${numberN} and ${numberM} is: ${sum}`);
}


document.writeln(`<p>The starting number: ${numberN}<p>`);
document.writeln(`<p>The ending number: ${numberM}<p>`);
document.writeln(`<p>Skip even numbers? : ${skipEvenNumbers}<p>`);

skipEvenNumbers ? document.writeln(`The sum of odd numbers between ${numberN} and ${numberM} is: ${sum}`) : document.writeln(`The sum of numbers between ${numberN} and ${numberM} is: ${sum}`);

