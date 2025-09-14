//routes cursos
import { Router } from "express";
import { createCourse, getAllCourses, updateCourse, getByIdCourse, deleteCourse } from "../controllers/courses.controller.js";

export const routerCourse = Router(); 

routerCourse.post("/postCourse", createCourse)
routerCourse.get("/getAllCourses", getAllCourses)
routerCourse.get("/getByIdCourse/:id", getByIdCourse)
routerCourse.put("/updateCourse/:id", updateCourse)
routerCourse.delete("/deleteCourse/:id", deleteCourse)