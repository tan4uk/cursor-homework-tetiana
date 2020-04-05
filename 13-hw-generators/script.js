// Task 1

function* createIdGenerator() {
  for (let i = 1; true; i++) {
    yield i;
  }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);



// Task 2

function* newFontGenerator(fontSize) {
  while (true) {
    let result = yield fontSize;
    if (result === 'up') {
      fontSize += 2;
    } else if (result === 'down') {
      fontSize -= 2;
    }
  }
}

const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next('down').value);
