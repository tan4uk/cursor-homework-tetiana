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
  


  export {ostapStudent};