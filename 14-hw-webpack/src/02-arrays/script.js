const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const marks = [4, 5, 5, 3, 4, 5];

const sortMarks = (arr1, arr2) => {
    const sortedMarks = [];
    for (let i = 0; i < arr1.length; i++) {
      sortedMarks.push([arr1[i], arr2[i]]);
    }
    return sortedMarks;
  };


export {students, marks, sortMarks};