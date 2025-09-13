//cursos profesores
import { Router } from "express";
import { createTeachers, getAllTeachers } from "../controllers/teachers.controller.js";

export const routerTeachers = Router(); 

routerTeachers.post("/postTeachers", createTeachers)
routerTeachers.get("/getAllTeachers", getAllTeachers)