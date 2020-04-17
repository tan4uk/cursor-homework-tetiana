import { getRandomNumber } from './01-functions/script';
import { students, marks, sortMarks } from './02-arrays/script';
import { getRandomArray } from './03-iteration_methods/script';
import { info, getSubjects } from './04-objects/script';
import { latvia, getMyTaxes } from './05-closures/script';
import { ostapStudent } from './06-classes/script';
import { generateBlocksInterval } from './07-DOM/script';

const result = document.getElementById('result');
const block = document.getElementById('main-block');



const functions = document.getElementById('btn-1');
const arrays = document.getElementById('btn-2');
const iterationMethods = document.getElementById('btn-3');
const objects = document.getElementById('btn-4');
const closures = document.getElementById('btn-5');
const classes = document.getElementById('btn-6');
const dom = document.getElementById('btn-7');



functions.addEventListener('click', () => {
  result.innerHTML = '';
  block.style.display = 'none';
  result.innerHTML = `a random number between 4 and 10: ${getRandomNumber(4, 10)}`;
});


arrays.addEventListener('click', () => {
  result.innerHTML = '';
  block.style.display = 'none';
  result.innerHTML = `students and their marks: ${sortMarks(students, marks)}`;
});



iterationMethods.addEventListener('click', () => {
  result.innerHTML = '';
  block.style.display = 'none';
  result.innerHTML = `a random array of numbers from 1 to 100 : ${getRandomArray(15, 1, 100)}`;
});



objects.addEventListener('click', () => {
  result.innerHTML = '';
  block.style.display = 'none';
  result.innerHTML = `list of subjects for the student: ${getSubjects(info[0])}`;
});



closures.addEventListener('click', () => {
  result.innerHTML = '';
  block.style.display = 'none';
  result.innerHTML = `taxes in Latvia : ${getMyTaxes.call(latvia, 1500)}`;
});



classes.addEventListener('click', () => {
  result.innerHTML = '';
  block.style.display = 'none';
  result.innerHTML = `information about student: ${ostapStudent.getInfo()}`;
});



dom.addEventListener('click', () => {
  result.innerHTML = '';
  block.style.display = 'flex';
  generateBlocksInterval();
});
