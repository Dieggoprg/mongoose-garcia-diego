//Archivo barril para las Rutas
import { Router } from "express";
import { routerTeachers } from "./teachers.route.js";
import { routerStudents } from "./students.route.js";
import { routerProfile } from "./profiles.route.js";
import { routerCourseUnit } from "./coursesUnits.route.js";
import { routerCourse } from "./courses.route.js";

export const routes = Router()

routes.use(routerTeachers)
routes.use(routerStudents)
routes.use(routerProfile)
routes.use(routerCourseUnit)
routes.use(routerCourse)