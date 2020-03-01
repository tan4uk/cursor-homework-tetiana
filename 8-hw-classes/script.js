class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
    this.isDismissed = false;
  }

  getInfo() {
    return `Student of ${this.course} of ${this.university}, this.fullName`;
  }

  get marks() {
    if (isDismissed) {
      return null;
    } else {
      return this.marks;
    }
  }

  set marks(mark) {
    this.marks = this.marks.push(mark);
  }

  getAverageMark() {
    const markSum = this.marks.reduce(
      (accumulator, mark) => accumulator + mark,
      0
    );
    return markSum / this.marks.length;
  }

  dismiss() {
    this.isDismissed = true;
  }

  recover() {
    this.isDismissed = false;
  }
}

// Advanced

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
  }

  getScholarship() {
    
  }
}
