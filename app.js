import "dotenv/config"
import express from "express"
import cors from "cors"
import { routes } from "./src/routes/indexRouter.js"
import { connectDB } from "./src/config/database.js"

const PORT = process.env.PORT
const app = express()

// Estudiantes – Perfiles (1:1)

// Profesores – Cursos (1:N)

// Estudiantes – Cursos (N:M)

// Cursos – Unidades (1:N)

// Cursos – Evaluaciones (1:N)

//middlewares para la configuración del servidor
app.use(express.json())
app.use(cors({
    // origin: 
}))


//middleware de rutas
app.use("/api", routes)

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

