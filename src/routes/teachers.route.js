//cursos profesores
import { Router } from "express";
import { createTeachers, getAllTeachers, updateTeachers, getByIdTeacher, deleteTeacher } from "../controllers/teachers.controller.js";

export const routerTeachers = Router(); 

routerTeachers.post("/postTeachers", createTeachers)
routerTeachers.get("/getAllTeachers", getAllTeachers)
routerTeachers.get("/getByIdTeachers/:id", getByIdTeacher)
routerTeachers.put("/updateTeachers/:id", updateTeachers)
routerTeachers.delete("/deleteTeachers/:id", deleteTeacher)