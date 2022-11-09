class StudentsMemDAO {
  constructor() {
    this.students = [
      { id: 1, name: "Gustavo", lastName: "Velasquez", grade: 5, note: 4 },
    ];
  }
  selectNotes = async () => this.students;

  insertStudentNotes = async (student) => {
    student.grade = parseInt(student.grade);
    const id = parseInt(this.students[this.students.length - 1].id) + 1;
    student.id = id;
    this.students.push(student);
  };

  calculateAvarageNotes = async () => {
    let notes = 0;
    let avarage = this.students.length;
    this.students.map((student) => {
      notes += student.note;
    });
    return {
      notes: avarage,
      avarage: notes / avarage,
    };
  };
}

export default StudentsMemDAO;
