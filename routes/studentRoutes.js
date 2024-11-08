const express = require("express");
const studentService = require("../services/studentService.js");

const router = express.Router();

// Get all students
router.get("/list", async (req, res) => {
  try {
    const students = await studentService.getStudents();
    res.status(200).send({ success: true, message: "All students records", data: students });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

// Get student by ID
router.get("/list/:id", async (req, res) => {
  try {
    const student = await studentService.getStudentById(req.params.id);
    res.status(200).send({ success: true, data: student });
  } catch (error) {
    res.status(404).send({ success: false, message: error.message });
  }
});

// Create student
router.post("/save", async (req, res) => {
  try {
    await studentService.createStudent(req.body);
    res.status(201).send({ success: true, message: "Student created successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

// Update student
router.put("/update/:id", async (req, res) => {
  try {
    await studentService.updateStudent(req.params.id, req.body);
    res.status(200).send({ success: true, message: "Student updated successfully" });
  } catch (error) {
    res.status(404).send({ success: false, message: error.message });
  }
});

// Delete student
router.delete("/delete/:id", async (req, res) => {
  try {
    await studentService.deleteStudent(req.params.id);
    res.status(200).send({ success: true, message: "Student deleted successfully" });
  } catch (error) {
    res.status(404).send({ success: false, message: error.message });
  }
});

module.exports = router;
