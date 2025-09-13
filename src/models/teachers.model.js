//modelo profesores
import {model , Schema} from "mongoose"

const teachersSchema = new Schema(
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

export const TeachersModel = model("Teacher", teachersSchema)