import StudentsMemDAO from "./studentsMem.js";
import StudentsMongoDAO from "./studentsMongoDB.js";

class StudentsFactoryDAO {
  static get(type) {
    switch (type) {
      case "MEM":
        console.log(" ***** Persistiendo en Memoria ***** ");
        return new StudentsMemDAO();
      case "MONGO":
        console.log(" ***** Persistiendo en MongoDB ***** ");
        return new StudentsMongoDAO();
      default:
        console.log(" ***** Persistiendo en default (Memoria) ***** ");
        return new StudentsMemDAO();
    }
  }
}

export default StudentsFactoryDAO;
