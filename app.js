import "dotenv/config"
import express from "express"
import cors from "cors"
import { routerTeachers } from "./src/routes/teachers.route.js"
import { routerStudents } from "./src/routes/students.route.js"
import { connectDB } from "./src/config/database.js"

const PORT = process.env.PORT
const app = express()

// Estudiantes – Perfiles (1:1)

// Profesores – Cursos (1:N)

// Estudiantes – Cursos (N:M)

// Cursos – Unidades (1:N)

// Cursos – Evaluaciones (1:N)

//middlewares
app.use(express.json())
app.use(cors({
    // origin: 
}))


//rutas 
app.use("/api", routerTeachers)
app.use("/api", routerStudents)

//test conection BD
connectDB()
.then(() => {
 app.listen(PORT, () => {
   console.log("Server listening on port", PORT);
  });
})
 .catch((error) => {
 console.error("Error connecting to dataBase:", error);
});

