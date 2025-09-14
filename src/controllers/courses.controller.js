//controllers cursos
import { CoursesModel } from "../models/courses.model.js";

//función para crear un Curso
export const createCourse = async (req, res) => {
  const { title, description} = req.body;

  try {
    const newCourse = await CoursesModel.create({
      title,
      description
    });

    if (!newCourse) {
      res.status(400).json("Error creating the Course");
    }

    res.status(201).json({
      ok: true,
      msg: "Correctly created Course",
      data: newCourse,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para encontrar un curso por su ID
export const getByIdCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const Course = await CoursesModel.findById(id);

    if (!Course) {
      res.status(404).json("Error finding the Course");
    }

    res.status(200).json({
      ok: true,
      msg: "Successful search",
      data: Course,
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//función para encontrar todos los cursos
export const getAllCourses = async (req, res) => {
  try {
    const Courses = await CoursesModel.find();

    res.status(200).json(Courses);
    console.log(Courses);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para actualizar un curso
export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const updatedCourse = await CoursesModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Course updated correctly",
      data: updatedCourse,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para eliminar un curso
export const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCourse = await CoursesModel.findOneAndDelete(id);

    if (deletedCourse <= 0) {
      return res.status(400).json({
        ok: false,
        msg: "Error deleting the Course",
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