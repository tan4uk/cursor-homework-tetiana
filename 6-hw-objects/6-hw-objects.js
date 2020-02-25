const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }
];


// Function 1

const getSubjects = student => {
  let subjectList = Object.keys(student.subjects);
  const newSubjectList = subjectList.map(subject => {
    return subject.charAt(0).toUpperCase() + subject.slice(1);
  });
  const resultArray = newSubjectList.join().replace("_", " ").split(",");
  return resultArray;
};

console.log(getSubjects(students[0]));



// Function 2

const getAverageMark = student => {
  const subjectList = Object.values(student.subjects).flat();
  const average = subjectList.reduce((accumulator, element) => {
    return accumulator + element;
  }, 0);
  return Number((average / subjectList.length).toFixed(2));
};

console.log(getAverageMark(students[0]));



// Function 3

const getStudentInfo = student => {
  const { course, name } = student;
  const averageMark = getAverageMark(student);
  const infoObject = {
    course,
    name,
    averageMark
  };
  return infoObject;
};
console.log(getStudentInfo(students[0]));



// Function 4

const getStudentsNames = arr => {
  const studentsNames = arr.map(student => {
    return student.name;
  });
  return studentsNames.sort();
};

console.log(getStudentsNames(students));



// Function 5

const getBestStudent = array => {
  const bestStudent = array.reduce((previousValue, currentValue) => {
    return getAverageMark(previousValue) > getAverageMark(currentValue) ? previousValue : currentValue;
  });
  return bestStudent.name;
};

console.log(getBestStudent(students));



// Function 6

calculateWordLetters = word => {
  const lettersObj = {};
  for (let i = 0; i < word.length; i++) {
    if (lettersObj[word[i]]) {
      lettersObj[word[i]] += 1;
    } else {
      lettersObj[word[i]] = 1;
    }
  }
  return lettersObj;
};

console.log(calculateWordLetters('test'));
