import ConnectionMongoDB from "../DB.js";

class StudentsMongoDAO {
  selectNotes = async () => {
    if (!ConnectionMongoDB.connection) return [];
    let notes = await ConnectionMongoDB.db
      .collection("notes")
      .find({}, { name: 1, lastname: 1, notes: 1, _id: 0 })
      .toArray();
    return notes;
  };

  insertStudentNotes = async (student) => {
    if (!ConnectionMongoDB.connection) return {};
    student.grade = parseInt(student.grade);
    await ConnectionMongoDB.db.collection("notes").insertOne(student);
  };

  calculateAvarageNotes = async () => {
    let notes = 0;
    if (!ConnectionMongoDB.connection) return [];
    const students = await ConnectionMongoDB.db
      .collection("notes")
      .find({}, { notes: 1, _id: 0 })
      .toArray();
    let avarage = students.length;
    students.map((student) => {
      notes += parseInt(student.note);
    });
    return {
      notes: avarage,
      avarage: notes / avarage,
    };
  };
}

export default StudentsMongoDAO;
