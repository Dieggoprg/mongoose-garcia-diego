//routes estudiantes
import { Router } from "express";
import { createStudent, getAllStudents, updateStudent, getByIdStudents, deleteStudent } from "../controllers/students.controller.js";

export const routerStudents = Router(); 

routerStudents.post("/postStudents", createStudent)
routerStudents.get("/getAllTStudents", getAllStudents)
routerStudents.get("/getByIdStudent/:id", getByIdStudents)
routerStudents.put("/updateStudent/:id", updateStudent)
routerStudents.delete("/deleteStudent/:id", deleteStudent)