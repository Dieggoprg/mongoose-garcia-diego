//routes Unidades
import { Router } from "express";
import { createCourseUnit, getAllCoursesUnits, updateCourseUnit, getByIdCourseUtit, deleteCourseUnit } from "../controllers/coursesUnits.controller.js";

export const routerCourseUnit = Router(); 

routerCourseUnit.post("/postCourseUnit", createCourseUnit)
routerCourseUnit.get("/getAllCoursesUnits", getAllCoursesUnits)
routerCourseUnit.get("/getByIdCourseUnit/:id", getByIdCourseUtit)
routerCourseUnit.put("/updateCourseUnit/:id", updateCourseUnit)
routerCourseUnit.delete("/deleteCourseUnit/:id", deleteCourseUnit)