import express from "express";
import ControllerStudents from "../controller/students.js";

export class RouterStudents {
  constructor() {
    this.router = express.Router();
    this.controllerStudents = new ControllerStudents();
  }
  start() {
    this.router.get("/notes", this.controllerStudents.getNotes);

    this.router.get("/notes/avarage", this.controllerStudents.getAvarageNotes);

    this.router.post("/", this.controllerStudents.postStudentNotes);

    return this.router;
  }
}
