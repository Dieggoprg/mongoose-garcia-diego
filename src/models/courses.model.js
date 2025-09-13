//modelo cursos
import {model , Schema} from "mongoose"

const coursesSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        }
    }
);

export const CoursesModel = model("Courses", coursesSchema)