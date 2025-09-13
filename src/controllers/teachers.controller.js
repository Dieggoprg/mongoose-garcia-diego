//controllers profesores
import { TeachersModel } from "../models/teachers.model.js";

export const createTeachers = async (req, res) => {
  const { name, lastName, age } = req.body;

  try {
    const newTeacher = await TeachersModel.create({
      name,
      lastName,
      age,
    });

    if (!newTeacher){
      res.status(400).json("Error al crear el/la Profesor/a")
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

export const getAllTeachers = async (req , res) => {
  try {
    const teachers = await TeachersModel.find()

    res.status(200).json(teachers)
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
    
  }
}
