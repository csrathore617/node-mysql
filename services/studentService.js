const studentRepository = require("../repositories/studentRepository");

const getStudents = async () => {
  const students = await studentRepository.getAllStudents();
  if (students.length === 0) {
    throw new Error("No records found");
  }
  return students;
};

const getStudentById = async (id) => {
  const student = await studentRepository.getStudentById(id);
  if (!student) {
    throw new Error("Student not found");
  }
  return student;
};

const createStudent = async (studentData) => {
  await studentRepository.createStudent(studentData);
};

const updateStudent = async (id, studentData) => {
  const updatedRows = await studentRepository.updateStudent(id, studentData);
  if (updatedRows === 0) {
    throw new Error("Student not found or no changes made");
  }
};

const deleteStudent = async (id) => {
  const deletedRows = await studentRepository.deleteStudent(id);
  if (deletedRows === 0) {
    throw new Error("Student not found");
  }
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
