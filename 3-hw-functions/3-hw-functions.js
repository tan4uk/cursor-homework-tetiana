// Function 1
const getMaxDigit = (number) => {
    const arr = number.toString().split('');
    return Math.max(...arr);
}
  
console.log(getMaxDigit(1236));
  

// Function 2
const getPowNumber = (num1, num2) => {
  let result = 1;
    for (let i = 1; i <= num2; i++) {
      if( num2 === 0) {
        result = 1;
     } else {
        result *= num1;
     }
   }
  return result;
}


// Function 3
const upperFirstLetter = (string) => {
    const firstPart= string[0].toUpperCase();
    const secondPart = string.slice(1).toLowerCase();
    return firstPart + secondPart;
}
  
console.log(upperFirstLetter('vLAD'));


// Function 4 
const getSumWithoutTax = (salary) => {
    const taxPercent = 19.5;
    const clientRemainder = salary - salary*taxPercent/100;
    return clientRemainder;
}
 
console.log(getSumWithoutTax(1000));


// Function 5
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
  
console.log(getRandomNumber(4, 10));


// Function 6 
const countLetter = (letter, word) => {
    const letterLow = letter.toLowerCase();
    const wordLow = word.toLowerCase();
    let result = 0;
      for (let i = 0; i < word.length; i++) {
        if (wordLow[i] === letterLow) {
        result ++;
        }
      }
    return result;
}
  
console.log(countLetter('а', 'Асталависта'));


// Function 7
const convertMoney = (string) => {
    const hrn= string.slice(string.length-3, string.length).toLowerCase();
    const dollar = string.slice(string.length-1, string.length);
    const ukrValue = string.slice(0, string.length-3);
    const usaValue = string.slice(0, string.length-1);
      if (hrn === 'uah') {
        return (ukrValue/25) + '$';
    } else if (dollar === '$') {
        return (usaValue*25) + 'грн.';
    } else {
        return "You've entered the wrong value!";
    }
}
   
console.log(convertMoney('2500UAH'));


// Function 8
const getRandomPassword = (num = 8) => {
    let password = '';
    for (let i = 0; i< num; i++) {
      let randomNumber = Math.floor(Math.random()*10);
      password +=  randomNumber;
    }
   return password;
}
  
console.log(getRandomPassword(5));
  

// Function 9
const deleteLetters = (letter, word) => {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== letter) {
    result += word[i];
    }
  }
  return result;
}

console.log(deleteLetters('l', 'blablabla'))


// Function 10
const isPalindrome = (string) => {
    const result = true;
    let newString = ''; 
    for (let i = 0; i < string.length; i++) {
      if(string[i] !== ' ') {
        newString += string[i];
      }
    newString = newString.toLowerCase();
   }
   for (let i = 0; i < newString.length; i++) {
      if (newString[i] !== newString[newString.length-(i+1)]) {
       return false;
      }
    }
   return result;
}
  
console.log(isPalindrome('Аргентина манит негра'));


// Function 11
const deleteDuplicateLetter = (string) => {
    string = string.toLowerCase();
    let result = '';
      for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
          result += string[i];
        }
     }
   return result;
}

console.log(deleteDuplicateLetter('Бисквит был очень нежный'));


document.writeln(`<p> Function 1  - gets the maximum digit from a number: input: 1236 -- result: ${getMaxDigit(1236)}</p>`);
document.writeln(`<p> Function 2  - returns the base to the exponent power: input: 8, 4 -- result:  ${getPowNumber(8,4)}</p>`);
document.writeln(`<p> Function 3  - formats a name in a way only first letter is uppercase: input: vLAD -- result: ${upperFirstLetter('vLAD')}</p>`);
document.writeln(`<p> Function 4  - returns salary without taxes: input: 1000 -- result: ${getSumWithoutTax(1000)}</p>`);
document.writeln(`<p> Function 5  - returns random number between two numbers: input: 1, 10 -- result: ${getRandomNumber(1, 10)}</p>`);
document.writeln(`<p> Function 6  - counts how many times an input letter repeats in an input word: input: 'а', 'Асталависта' -- result: ${countLetter('а', 'Асталависта')}</p>`);
document.writeln(`<p> Function 7  - converts uah in usd and vice versa: input: '2500UAH' -- result: ${convertMoney('2500UAH')}</p>`);
document.writeln(`<p> Function 8  - generates random password which have as many digits as an input: input: 5 -- result: ${getRandomPassword(5)}</p>`);
document.writeln(`<p> Function 9  - deletes an input letter from an input word: input: 'l', 'blablabla' -- result: ${deleteLetters('l', 'blablabla')}</p>`);
document.writeln(`<p> Function 10  - checks if the given word is palindrome: input: 'Аргентина манит негра' -- result: ${isPalindrome('Аргентина манит негра')}</p>`);
document.writeln(`<p> Function 11  - deletes all duplicate letters from the string: input: 'Бисквит был очень нежный' -- result: ${deleteDuplicateLetter('Бисквит был очень нежный')}</p>`);