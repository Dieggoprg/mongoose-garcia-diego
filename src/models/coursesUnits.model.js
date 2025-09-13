//modelo Unidades de los cursos
import {model , Schema} from "mongoose"

const coursesUnitsSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            unique: true
        }
    }
);

export const CoursesUnitsModel = model("Courses_Units", coursesUnitsSchema)