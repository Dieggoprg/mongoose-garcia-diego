//controllers Perfiles
import { ProfilesModel } from "../models/profiles.model.js";

//función para crear un Profile
export const createProfile = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newProfile = await ProfilesModel.create({
      username,
      email,
      password
    });

    if (!newProfile) {
      res.status(400).json("Error creating the Profile");
    }

    res.status(201).json({
      ok: true,
      msg: "Correctly created Profile",
      data: newProfile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para encontrar un profile por su ID
export const getByIdProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await ProfilesModel.findById(id);

    if (!profile) {
      res.status(404).json("Error finding the Profile");
    }

    res.status(200).json({
      ok: true,
      msg: "Successful search",
      data: profile,
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//función para encontrar todos los profiles
export const getAllProfiles = async (req, res) => {
  try {
    const profiles = await ProfilesModel.find();

    res.status(200).json(profiles);
    console.log(profiles);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para actualizar un profile
export const updateProfile = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  try {
    const updatedProfile = await ProfilesModel.findByIdAndUpdate(
      id,
      { username, email, password },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Profile updated correctly",
      data: updatedProfile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para eliminar un profile
export const deleteProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProfile = await ProfilesModel.findOneAndDelete(id);

    if (deletedProfile <= 0) {
      return res.status(400).json({
        ok: false,
        msg: "Error deleting the Profile",
      });
    }

    return res.status(200).json({
      ok: true,
      msg: "Successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};
