//controllers Unidades
import { CoursesUnitsModel } from "../models/coursesUnits.model.js";

//función para crear una Unidad
export const createCourseUnit = async (req, res) => {
  const { title, description} = req.body;

  try {
    const newCourseUnit = await CoursesUnitsModel.create({
      title,
      description
    });

    if (!newCourseUnit) {
      res.status(400).json("Error creating the Course Unit");
    }

    res.status(201).json({
      ok: true,
      msg: "Correctly created Course Unit",
      data: newCourseUnit,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para encontrar una Unidad por su ID
export const getByIdCourseUtit = async (req, res) => {
  const { id } = req.params;

  try {
    const CourseUnit = await CoursesUnitsModel.findById(id);

    if (!CourseUnit) {
      res.status(404).json("Error finding the Course Unit");
    }

    res.status(200).json({
      ok: true,
      msg: "Successful search",
      data: CourseUnit,
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//función para encontrar todos las Unidades
export const getAllCoursesUnits = async (req, res) => {
  try {
    const CoursesUnits = await CoursesUnitsModel.find();

    res.status(200).json(CoursesUnits);
    console.log(CoursesUnits);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para actualizar una unidad
export const updateCourseUnit = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const updatedCourseUnit = await CoursesUnitsModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Course Unit updated correctly",
      data: updatedCourseUnit,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para eliminar una unidad
export const deleteCourseUnit = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCourseUnit = await CoursesUnitsModel.findOneAndDelete(id);

    if (deletedCourseUnit <= 0) {
      return res.status(400).json({
        ok: false,
        msg: "Error deleting the Course unit",
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