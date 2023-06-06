const UserModel = require("../models/DatabaseSchema");
const mongoose = require("mongoose");
async function register(req, res) {
  try {
    const { firstName, lastName, userEmail, password, confirmPassword } =
      req.body.userDetails;
    const existUser = await UserModel.findOne({ userEmail });

    if (existUser) {
      return res.status(403).json({ msg: "User already exists" });
    }

    if (password !== confirmPassword) {
      return res.status(401).json({ msg: "Password Mismatch" });
    }

    const newUser = await UserModel.create({
      firstName,
      lastName,
      userEmail,
      password,
      confirmPassword,
    });

    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        userEmail: newUser.userEmail,
      });
    } else {
      res.status(415).json({ msg: "Failed to Register" });
    }
  } catch (err) {
    res.status(404);
    throw new Error(err);
  }
}

module.exports = { register };
