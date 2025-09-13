//modelo evaluaciones
import {model , Schema} from "mongoose"

const assessmentsSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        score: {
            type: String,
            required: true
        },
        dataTaken: {
            type: Date,
            default: "No definida"

        },
        passed: {
            type: Boolean
        }
    }
);

export const AssessmentsModel = model("Assessments", assessmentsSchema)