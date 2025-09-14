//routes perfiles
import { Router } from "express";
import { createProfile, getAllProfiles, updateProfile, getByIdProfile, deleteProfile } from "../controllers/profiles.controller.js";

export const routerProfile = Router(); 

routerProfile.post("/postProfiles", createProfile)
routerProfile.get("/getAllTProfiles", getAllProfiles)
routerProfile.get("/getByIdProfile/:id", getByIdProfile)
routerProfile.put("/updateProfile/:id", updateProfile)
routerProfile.delete("/deleteProfile/:id", deleteProfile)