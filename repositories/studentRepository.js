const mySqlPool = require("../config/db");

const getAllStudents = async () => {
  const [data] = await mySqlPool.query("SELECT * FROM student");
  return data;
};

const getStudentById = async (id) => {
  const [data] = await mySqlPool.query("SELECT * FROM student WHERE id = ?", [id]);
  return data[0];
};

const createStudent = async ({ name, roll_no, email, class: studentClass }) => {
  const query = "INSERT INTO student (name, roll_no, email, class) VALUES (?, ?, ?, ?)";
  const values = [name, roll_no, email, studentClass];
  await mySqlPool.query(query, values);
};

const updateStudent = async (id, { name, roll_no, email, class: studentClass }) => {
  const query = "UPDATE student SET name = ?, roll_no = ?, email = ?, class = ? WHERE id = ?";
  const values = [name, roll_no, email, studentClass, id];
  const [result] = await mySqlPool.query(query, values);
  return result.affectedRows;
};

const deleteStudent = async (id) => {
  const query = "DELETE FROM student WHERE id = ?";
  const [result] = await mySqlPool.query(query, [id]);
  return result.affectedRows;
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
