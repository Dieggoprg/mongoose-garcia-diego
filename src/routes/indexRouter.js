//Archivo barril para las Rutas
import { Router } from "express";
import { routerTeachers } from "./teachers.route.js";
import { routerStudents } from "./students.route.js";

export const routes = Router()

routes.use(routerTeachers)
routes.use(routerStudents)