//modelo perfiles
import {model , Schema} from "mongoose"

const profilesSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: Number,
            required: true,
        }
    }
);

export const ProfilesModel = model("Profiles", profilesSchema)