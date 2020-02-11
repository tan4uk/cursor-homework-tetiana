const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференціальне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


// Task 1

let studentsName = students[1];
students[1] = students[2];
students[2] = studentsName;

const getPairs = array => {
  const pairs = [];
  for (i = 0; i < array.length; i += 2) {
    pairs.push([array[i], array[i + 1]]);
  }
  return pairs;
};

const paired = getPairs(students);
console.log(paired);



// Task 2

const sortPairsWithThemes = (arr1, arr2) => {
  const sortedThemes = [];
  for (i = 0; i < arr1.length; i++) {
    sortedThemes.push([arr1[i][0] + " і " + arr1[i][1], arr2[i]]);
  }
  return sortedThemes;
};

const themesForStudents = sortPairsWithThemes(paired, themes);
console.log(themesForStudents);



// Task 3

const sortMarks = (arr1, arr2) => {
  const sortedMarks = [];
  for (i = 0; i < arr1.length; i++) {
    sortedMarks.push([arr1[i], arr2[i]]);
  }
  return sortedMarks;
};

const marksOfStudents = sortMarks(students, marks);
console.log(marksOfStudents);



// Task 4

let pairedThemes = sortPairsWithThemes(paired, themes);

const getRandomMark = array => {
  const projectMarks = [];
  for (i = 0; i < array.length; i++) {
    let randomMark = Math.floor(Math.random() * 5 + 1);
    projectMarks.push([...array[i], randomMark]);
  }
  return projectMarks;
};

const randomMarks = getRandomMark(pairedThemes);
console.log(randomMarks);
