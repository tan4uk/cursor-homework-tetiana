// Main task

class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
    this.isDismissed = false;
  }

  getInfo() {
    return `${this.course} year student of ${this.university}, ${this.fullName}`;
  }

  get studentMarks() {
    if (this.isDismissed) {
      return null;
    } else {
      return this.marks;
    }
  }

  set studentMarks(mark) {
    if (this.isDismissed) {
      return null;
    } else {
    this.marks.push(mark);
    }
  }

  getAverageMark() {
    if (this.isDismissed) {
      return null;
    } else {
    const markSum = this.marks.reduce((accumulator, mark) => accumulator + mark, 0);
    return markSum / this.marks.length;
    }
  }

  dismiss() {
    this.isDismissed = true;
  }

  recover() {
    this.isDismissed = false;
  }
}

const ostapStudent = new Student('Lviv Medical University', 'First', 'Ostap Bender');

console.log(ostapStudent.getInfo());
console.log(ostapStudent.studentMarks);

ostapStudent.studentMarks = 5;
console.log(ostapStudent.studentMarks);

console.log(ostapStudent.getAverageMark());

ostapStudent.dismiss();
console.log(ostapStudent.isDismissed);
console.log(ostapStudent.studentMarks);
ostapStudent.studentMarks = 5;
console.log(ostapStudent.studentMarks);
console.log(ostapStudent.getAverageMark());

ostapStudent.recover();
console.log(ostapStudent.isDismissed);


// Advanced task

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => this.getScholarship(), 30000);
  }

  getScholarship() {
    if (this.getAverageMark() >= 4 && !this.isDismissed) {
      console.log("You've received 1400 grn scholarship");
    } else {
      console.log("You haven't received a scholarship");
    }
  }
}

const ihorStudent = new BudgetStudent('Lviv Polytechnic University', 'Second', 'Ihor Kulchytskiy');

console.log(ihorStudent.getInfo());
console.log(ihorStudent.studentMarks);
