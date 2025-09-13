//modelo estudiantes
import {model , Schema} from "mongoose"

const studentsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    }
);

export const StudentsModel = model("Teacher", studentsSchema)