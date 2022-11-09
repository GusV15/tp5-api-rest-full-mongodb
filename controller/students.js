import ApiStudents from "../api/students.js";

class ControllerStudents {
  constructor() {
    this.apiStudents = new ApiStudents();
  }
  getNotes = async (req, res) => {
    res.json(await this.apiStudents.findNotes());
  };

  getAvarageNotes = async (req, res) => {
    res.json(await this.apiStudents.calcAvarageNotes());
  };

  postStudentNotes = async (req, res) => {
    const student = req.body;
    await this.apiStudents.saveNotes(student);
    res.json({ status: "ok" });
  };
}

export default ControllerStudents;
