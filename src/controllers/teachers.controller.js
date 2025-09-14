//controllers profesores
import { TeachersModel } from "../models/teachers.model.js";

//función para crear un Teacher
export const createTeachers = async (req, res) => {
  const { name, lastName, age } = req.body;

  try {
    const newTeacher = await TeachersModel.create({
      name,
      lastName,
      age,
    });

    if (!newTeacher) {
      res.status(400).json("Error creating the Teacher");
    }

    res.status(201).json({
      ok: true,
      msg: "Correctly created professor",
      data: newTeacher,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para encontrar un teacher por su ID
export const getByIdTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await TeachersModel.findById(id);

    if (!teacher) {
      res.status(404).json("Error finding the Teacher");
    }

    res.status(200).json({
      ok: true,
      msg: "Successful search",
      data: teacher,
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//función para encontrar todos los teachers
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await TeachersModel.find();

    res.status(200).json(teachers);
    console.log(teachers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para actualizar un teacher
export const updateTeachers = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, age } = req.body;

  try {
    const updatedTeacher = await TeachersModel.findByIdAndUpdate(
      id,
      { name, lastName, age },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "teacher updated correctly",
      data: updateTeachers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para eliminar un teacher
export const deleteTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTeacher = await TeachersModel.findOneAndDelete(id);

    if (deletedTeacher <= 0) {
      return res.status(400).json({
        ok: false,
        msg: "Error deleting the teacher",
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
