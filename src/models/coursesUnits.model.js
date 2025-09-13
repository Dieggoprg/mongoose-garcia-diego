//modelo Unidades de los cursos
import {model , Schema} from "mongoose"

const coursesUnitsSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String
        }
    }
);

export const CoursesUnitsModel = model("Courses_Units", coursesUnitsSchema)