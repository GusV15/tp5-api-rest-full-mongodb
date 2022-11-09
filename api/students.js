/* import {
  selectNotes,
  insertStudentNotes,
  calculateAvarageNotes,
} from "../model/studentsMem.js"; */

import config from "../config.js";
import StudentsFactoryDAO from "../model/DAO/studentsFactory.js";

class ApiStudents {
  constructor() {
    this.studentsModel = StudentsFactoryDAO.get(config.PERSISTENCE_MODE);
  }
  findNotes = async () => await this.studentsModel.selectNotes();

  saveNotes = async (student) => {
    return await this.studentsModel.insertStudentNotes(student);
  };

  calcAvarageNotes = async () => {
    return await this.studentsModel.calculateAvarageNotes();
  };
}

export default ApiStudents;
