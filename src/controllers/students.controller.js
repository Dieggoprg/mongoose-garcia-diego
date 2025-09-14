//controllers estudiantes
import { StudentsModel } from "../models/students.model.js";

//función para crear un Student
export const createStudent = async (req, res) => {
  const { name, lastName, age } = req.body;

  try {
    const newStudent = await StudentsModel.create({
      name,
      lastName,
      age,
    });

    if (!newStudent) {
      res.status(400).json("Error creating the Student");
    }

    res.status(201).json({
      ok: true,
      msg: "Correctly created Student",
      data: newStudent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para encontrar un student por su ID
export const getByIdStudents = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await StudentsModel.findById(id);

    if (!student) {
      res.status(404).json("Error finding the Student");
    }

    res.status(200).json({
      ok: true,
      msg: "Successful search",
      data: student,
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//función para encontrar todos los students
export const getAllStudents = async (req, res) => {
  try {
    const students = await StudentsModel.find();

    res.status(200).json(students);
    console.log(students);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para actualizar un student
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, age } = req.body;

  try {
    const updatedStudent = await StudentsModel.findByIdAndUpdate(
      id,
      { name, lastName, age },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Student updated correctly",
      data: updatedStudent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para eliminar un student
export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await StudentsModel.findOneAndDelete(id);

    if (deletedStudent <= 0) {
      return res.status(400).json({
        ok: false,
        msg: "Error deleting the Student",
      });
    }

    return res.status(200).json({
      ok: true,
      msg: "Successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};
