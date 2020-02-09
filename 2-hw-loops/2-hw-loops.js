let numberN = prompt('Please enter the starting number');

numberN = parseInt(numberN, 10);

while (isNaN(numberN)) {
  numberN = parseInt(prompt("You've entered the wrong value! Please enter the correct starting number"));
} 

console.log(`The starting number: ${numberN}`);


let numberM = prompt('Please enter the ending number');

numberM = parseInt(numberM, 10);

while (isNaN(numberM)) {
  numberM = parseInt(prompt("You've entered the wrong value! Please enter the correct ending number"));
}

console.log(`The ending number: ${numberM}`);


while (numberN > numberM) {
 numberM = parseInt(prompt('Error! The starting number must be lower than the ending number! Please enter the correct ending number'));
}


const skipEvenNumbers = confirm('Do you want to skip even numbers?')

console.log(`Skip even numbers? : ${skipEvenNumbers}`);


let sum = 0;

for (let i = numberN; i <= numberM; i++) {
  if (!skipEvenNumbers) {
    sum+=i;
  } else if (i%2 !== 0) {
    sum+=i;
  }
}


if (!skipEvenNumbers) {
  console.log(`The sum of numbers between ${numberN} and ${numberM} is ${sum}`);
} else {
  console.log(`The sum of odd numbers between ${numberN} and ${numberM} is: ${sum}`);
}


document.writeln(`<p>The starting number: ${numberN}<p>`);
document.writeln(`<p>The ending number: ${numberM}<p>`);
document.writeln(`<p>Skip even numbers? : ${skipEvenNumbers}<p>`);

skipEvenNumbers ? document.writeln(`The sum of odd numbers between ${numberN} and ${numberM} is: ${sum}`) : document.writeln(`The sum of numbers between ${numberN} and ${numberM} is: ${sum}`);

